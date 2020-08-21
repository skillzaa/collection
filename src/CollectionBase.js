"use strict";
import CollectionItem from "./CollectionItem.js";
import ReturnObject from "./ReturnObject.js";
/**
 *-This is a class Wrapped around an Array of Objects, it add into each object some fileds like id,sortOrder, parentId etc.
 */
//.......................................
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
} //class ends    
