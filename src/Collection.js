"use strict";
import Find from "./Find.js";
//import ICollection from "./interfaces/ICollection.js";
import CollectionItem from "./CollectionItem.js";
export default class Collection extends Find {
    constructor(data = []) {
        super(data);
    }
    add(parentId = "0") {
        const collectionItem = new CollectionItem();
        collectionItem.id = this.newId();
        collectionItem.sortOrder = this.sortOrderCounter++; //imp
        collectionItem.createdAt = new Date().getTime();
        //.........dont check parent id existance give freedom
        collectionItem.parentId = String(parentId);
        this.data.push(collectionItem);
        return this.response(0, "All ok", true, collectionItem);
    } //fn
    insert(item) {
        //--1
        if (this.hasValue(item) === false) {
            return this.response(3, "A valid collection item is required");
        }
        //--2
        if (typeof item.id !== "string") {
            item.id = String(item.id);
        }
        //--3 
        if (this.hasValue(item.id) === false) {
            return this.response(1, "A valid id is required");
        }
        //--4   ..string
        if (this.isIdUnique(String(item.id)) !== true) {
            return this.response(2, "The id provided already exists in the system. Please provide a unique id");
        }
        //--5 sort order
        if ((this.hasValue(item.sortOrder) === false) || (typeof item.sortOrder !== "number")) {
            item.sortOrder = this.sortOrderCounter++; //imp    
        }
        //--5 sort order
        if (this.hasValue(item.parentId) === false) {
            item.parentId = "0"; //imp    
        }
        this.data.push(item);
        return this.response(0, "All ok", true, item);
    }
    /**
     *
     * @param index
     * the only difference between getting directly the id 4and calling this function is that this function checks the index bounds
     */
    indexToId(index) {
        //-----------checkIndexBoundsResult    
        const checkIndexBoundsResult = this.checkIndexBounds(index);
        if (checkIndexBoundsResult.success !== true) {
            return checkIndexBoundsResult;
        }
        let item = this.data[index];
        //...--check if item is real item
        return this.response(0, "", true, String(item.id));
    }
    idToIndex(id) {
        if (typeof id !== "string") {
            id = String(id);
        } //just convert type   
        //--here i have to use some hasing algorithem if needed
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].id == id) {
                return this.response(0, "success", true, idx);
            }
        }
        //--if the id is not found....
        return this.response(3, "Could not find the index. Most probably the id was not found");
    } //...............abs
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
} //class end
