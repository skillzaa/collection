"use strict";
import CollectionItem from "./CollectionItem.js";
import ReturnObject from "./ReturnObject.js";
export default class CollectionBase {
    constructor(data = []) {
        //If useRandomIds == true we use NON-random id as "1","2","3","4" else we always use string based uuids.
        this.idCounter = 1;
        this.sortOrderCounter = 1;
        this.useRandomIds = false; //By default True
        this.data = [];
        this.data = data; //the aoo = an array not an object
    }
    //---------PROTECTED METHODS
    //-----------------------------------
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
    validateParentId(parentId) {
        if (typeof parentId !== "string" || parentId == "") {
            return "0";
        }
        else {
            return parentId;
        }
    }
    /**
     *
     * @param errorNumber
     * @param message
     * @param success
     * @param value
     * errorNumber 0 means all is well
     */
    response(errorNumber = 0, message = "", success = false, data = "") {
        const r = new ReturnObject();
        r.addMessage(message);
        r.errorNumber = errorNumber;
        r.success = success;
        r.data = data;
        return r;
    }
    hasValue(value) {
        if ((typeof value == "undefined") ||
            (value == "") || (value == null)) {
            return false;
        }
        else {
            return true;
        }
    }
    checkIndexBounds(index) {
        if ((Number(index) >= this.data.length)
            ||
                (Number(index) < 0)) {
            return this.response(1, "The index is either larger or smaller than the number of items in the collection");
        }
        else {
            return this.response(0, "All ok", true, index);
        }
    } //fn
    ////////////////////////////////////////
    shouldBeStringOrNumber(value) {
        if ((typeof value !== "number") && ((typeof value !== "string"))) {
            return this.response(1, "The vlaue argument can just contain number or string values");
        }
        else {
            return this.response(0, "ok", true);
        }
    }
    shouldBeStringNumberOrBool(value) {
        if ((typeof value !== "number") && ((typeof value !== "string")) && (typeof value !== "boolean")) {
            return this.response(1, "The vlaue argument can just contain number, string or boolean values");
        }
        else {
            return this.response(0, "ok", true);
        }
    }
    ////////////////////////////////////////
    push(a) {
        this.data.push(a);
        return true;
    }
    get length() {
        return this.data.length;
    }
    setPropertyAll(property, value) {
        let arr = [];
        this.data.forEach(e => {
            e.setProperty(property, value);
        });
        return this.response(0, "ok", true, this.data);
    }
    setRandom() {
        this.data.forEach(e => {
            e.setProperty("random", Math.ceil(Math.random() * 9999));
        });
        return this.response(0, "ok", true, this.data);
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
    } //getlast
    isLast(id) {
        if (this.data[this.data.length - 1].id == id) {
            return true;
        }
        else {
            return false;
        }
    } //islast
} //class ends    
