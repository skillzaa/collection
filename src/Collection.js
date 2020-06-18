"use strict";
import CollectionItem from "./CollectionItem.js";
/**
 *-This is a class Wrapped around an Array of Objects, it add into each object some fileds like id,sortOrder, parentId etc.
 */
//.......................................
//.......................................
export default class Collection {
    constructor(data = []) {
        this.useRandomIds = true;
        this.idCounter = 1;
        this.sortOrderCounter = 1;
        this.data = [];
        this.data = data; //the aoo = an array not an object
    }
    add(parentId = null) {
        const collectionItem = new CollectionItem();
        collectionItem.id = this.newId();
        collectionItem.sortOrder = this.sortOrderCounter++; //imp
        //-----------------
        collectionItem.parentId = parentId;
        collectionItem.createdAt = new Date().getTime();
        this.data.push(collectionItem);
        return collectionItem;
    }
    read(item) {
        if (typeof item.id === "undefined") {
            return false;
        }
        if (this.idTypeMatch(item.id) !== true) {
            return false;
        }
        if (this.isIdUnique(item.id) !== true) {
            return false;
        }
        //if(typeof item.parentId !== ){return false;}
        //---set the values also
        if ((typeof item.sortOrder == "undefined") || (typeof item.sortOrder !== "number")) {
            item.sortOrder = this.sortOrderCounter++; //imp    
        }
        if ((typeof item.parentId == "undefined")) {
            item.parentId = null; //imp    
        }
        this.data.push(item);
        return item;
    }
    //.......................abs
    indexToId(index) {
        let item = this.data[index];
        return item.id;
    }
    idToIndex(id) {
        //--this foreach is working since has arrow function????  
        let index = null;
        this.data.forEach((e, idx) => {
            if (e.id == id) {
                index = idx;
            }
        });
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
    searchFirst(prop = "id", value) {
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
            if ((e[prop1] == value1) && (e[prop2] == value2)) {
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
        return this.data;
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
    /**take its own aoo(arr of obj not aoo class) and not the this.data */
    setPropertyAll(property, value) {
        let arr = [];
        this.data.forEach(e => {
            e.setProperty(property, value);
        });
    }
    setRandom() {
        this.data.forEach(e => {
            e.setProperty("random", Math.ceil(Math.random() * 9999));
        });
    }
    //..............................................
    delete(itemOrId) {
        if (typeof itemOrId == 'object') {
            this.data = this.data.filter(i => i.id !== itemOrId.id);
        }
        else if (typeof itemOrId == 'number') {
            this.data = this.data.filter(i => { i.id !== itemOrId; });
        }
    }
    newId() {
        if (this.useRandomIds === false) {
            return this.idCounter++;
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
        let isUnique = true;
        this.data.forEach(e => {
            if (e.id === id) {
                isUnique = false;
            }
        });
        return isUnique;
    }
    idTypeMatch(id) {
        if (typeof id === "string" && this.useRandomIds == true) {
            return true;
        }
        if (typeof id === "number" && this.useRandomIds == false) {
            return true;
        }
        return false;
    }
} //class ends    
