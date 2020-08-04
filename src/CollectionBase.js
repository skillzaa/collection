"use strict";
import CollectionItem from "./CollectionItem.js";
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
    validateParentId(parentId) {
        if (typeof parentId !== "string" || parentId == "") {
            return "0";
        }
        else {
            return parentId;
        }
    }
} //class ends    