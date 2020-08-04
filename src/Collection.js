"use strict";
import CollectionItem from "./CollectionItem.js";
import ReturnObject from "./ReturnObject.js";
/**
 *-This is a class Wrapped around an Array of Objects, it add into each object some fileds like id,sortOrder, parentId etc.
 */
//.......................................
export default class Collection {
    constructor(data = []) {
        //If debugMode == true we use NON-random id as 1,2,3,4 else we always use string based uuids.
        this.useRandomIds = false; //By default True
        this.data = [];
        this.idCounter = 1;
        this.sortOrderCounter = 1;
        this.data = data; //the aoo = an array not an object
    }
    /**
     * This takes just the parentId and assigns that to the parentId prop. It gives its own id and incresement the id. If we do not want the id to incremenet we shd use read()
     * it should always return a collection Item INTERFACE and never an error.
     * @param parentId
     */
    add(parentId = "") {
        //--To create an actual obj we have to use the class and not the interface    
        const collectionItem = new CollectionItem();
        collectionItem.id = this.newId();
        collectionItem.sortOrder = this.sortOrderCounter++; //imp
        //-----------------
        collectionItem.parentId = parentId;
        collectionItem.createdAt = new Date().getTime();
        this.data.push(collectionItem);
        return collectionItem;
    }
    insert(item) {
        if (typeof item.id === "undefined") {
            const r = new ReturnObject();
            r.addMessage("A valid id is required.");
            r.errorNumber = 1;
            return r;
        }
        if (this.isIdUnique(item.id) !== true) {
            const r = new ReturnObject();
            r.addMessage("The id provided already exists in the system. Please provide a unique id");
            r.errorNumber = 2;
            return r;
        }
        //---set the values also
        if ((typeof item.sortOrder == "undefined") || (typeof item.sortOrder !== "number")) {
            item.sortOrder = this.sortOrderCounter++; //imp    
        }
        if ((typeof item.parentId == "undefined")) {
            item.parentId = 0; //imp    
        }
        this.data.push(item);
        return item;
    }
    indexToId(index) {
        if (index >= this.data.length) {
            const r = new ReturnObject();
            r.addMessage("The index is larger than the number of items in the collection.");
            r.errorNumber = 3;
            return r;
        }
        let item = this.data[index];
        return item.id;
    }
    idToIndex(id) {
        //--this foreach is working since has arrow function????  
        let index;
        this.data.forEach((e, idx) => {
            if (e.id == id) {
                index = idx;
            }
        });
        if (typeof index !== "number" || typeof index !== "string") {
            const r = new ReturnObject();
            r.addMessage("Could not find the index. Most probably the id was not found.");
            r.errorNumber = 3;
            return r;
        }
        return index;
    }
    isFirst(id) {
        if (this.data[0].id == id) {
            return true;
        }
        else {
            return false;
        }
    } //getItem
    getFirst() {
        return this.data[0];
    } //getItem
    getLast() {
        return this.data[this.data.length - 1];
    } //getItem
    isLast(id) {
        if (this.data[this.data.length - 1].id == id) {
            return true;
        }
        else {
            return false;
        }
    } //getItem
    /**Just send back the first one  */
    searchFirst(prop, value) {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx][prop] == value) {
                return this.data[idx];
            }
        }
        return false;
    } //
    search(prop = "id", value = 0) {
        const final = [];
        this.data.forEach(e => {
            if (e[prop] == value) {
                final.push(e);
            }
        });
        return final;
    } //
    //--A forEach loop once starts will loop through all the array elements and can not be stopped by return.
    searchAndFirst(prop1, value1, prop2, value2) {
        for (let idx = 0; idx < this.data.length; idx++) {
            const e = this.data[idx];
            if ((e[prop1] == value1) && (e[prop2] == value2)) {
                return e;
            }
        }
        return false;
    } //
    searchAnd(prop1, value1, prop2, value2) {
        const final = [];
        for (let idx = 0; idx < this.data.length; idx++) {
            const e = this.data[idx];
            if ((e[String(prop1)] == value1) && (e[prop2] == value2)) {
                final.push(e);
            }
        }
        return final;
    } //
    //------------------Batch 3
    find(id) {
        let final = false;
        this.data.forEach(e => {
            if (e.id == id) {
                final = e;
            }
        });
        return final;
    } //getItem
    findChildren(parentItemId) {
        let final = [];
        this.data.forEach(e => {
            if (e['parentId'] == parentItemId) {
                final.push(e);
            }
        });
        return final;
    } //
    sort(property = "sortOrder", overWrite = true) {
        let sorted = this.data.sort((a, b) => {
            const bandA = a[property] || 0;
            const bandB = b[property] || 0;
            let comparison = 0;
            if (bandA > bandB) {
                comparison = 1; //-keep the same a .b
            }
            else if (bandA < bandB) {
                comparison = -1; //swap both from a-b to b-a
            }
            return comparison; //????
        });
        //---array.sort ends      
        if (overWrite === true) {
            this.data = sorted;
            return sorted; //actually return aoo
        }
        else {
            const newArray = sorted.map(a => Object.assign({}, a));
            return newArray;
        }
    } //sortBySortOrder
    sortDesc(property, overWrite = false) {
        let sorted = this.data.sort((a, b) => {
            const bandA = a[property] || 0;
            const bandB = b[property] || 0;
            let comparison = 0;
            if (bandA > bandB) {
                comparison = -1; //from 1 to -1 to make desc
            }
            else if (bandA < bandB) {
                comparison = 1; //from -1 to 1 to make desc
            }
            return comparison;
        });
        ////...................................
        //---array.sort ends      
        if (overWrite === true) {
            this.data = sorted;
            return sorted; //actually return aoo
        }
        else {
            const newArray = sorted.map(a => Object.assign({}, a));
            return newArray;
        }
        ////...................................
    } //sortBySortOrder        
    //-----------------------------------sort ends
    push(a) {
        this.data.push(a);
        return true;
    }
    get length() {
        return this.data.length;
    }
    getPrevByIndex(item) {
        let isFirst = this.isFirst(item.id);
        if (isFirst == false) {
            let itemIndex = this.idToIndex(item.id);
            return this.data[itemIndex - 1];
        }
        else {
            return false;
        }
    } //fn
    getNextByIndex(item) {
        let isLast = this.isLast(item.id);
        if (isLast == false) {
            let itemIndex = this.idToIndex(item.id);
            return this.data[itemIndex + 1];
        }
        else {
            return false;
        }
    } //fn
    setPropertyAll(property, value) {
        let arr = [];
        this.data.forEach(e => {
            e.setProperty(property, value);
        });
        return true;
    }
    setRandom() {
        this.data.forEach(e => {
            e.setProperty("random", Math.ceil(Math.random() * 9999));
        });
        return true;
    }
    //..............................................
    delete(itemOrId) {
        if (typeof itemOrId == 'object') {
            this.data = this.data.filter(i => i.id !== itemOrId.id);
        }
        else if (typeof itemOrId == 'string') {
            this.data = this.data.filter(i => { i.id !== itemOrId; });
        }
    }
    newId() {
        if (this.useRandomIds === false) {
            return String(this.idCounter++);
        }
        else {
            return this.uuid();
        }
    }
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    //--------------------------
    isIdUnique(id) {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].id == id) {
                return false;
            }
        }
        return true;
    }
    blankCopy() {
        return new CollectionItem();
    }
} //class end
