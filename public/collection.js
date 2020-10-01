///this collection item is node--waoooo
class CollectionItem {
    //---------------------------------------------
    constructor() {
        this.parentId = "0";
        //No item can have id=0, this is just for newly created items who have not yet been given id yet. Consider it as null.
        this.id = "0";
        this.sortOrder = 0;
        this.createdAt = 0;
        this.title = "New Node";
        this.selected = false;
        this.highlighted = false;
        this.internalGap = 2;
        this.folded = false;
        this.titleCapitalization = "first";
        this.details = "";
        this.border = 2;
        this.borderRadius = 15;
        this.padding = 8;
        this.fontSize = 22;
        this.fontColor = "#343a40";
        this.width = null; //to be filled in later
        this.height = null; //to be filled in later
        this.minWidth = 50;
        this.minHeight = 50;
        this.fontFamily = "Impact";
        this.overWriteStyle = false;
        this.x = 0;
        this.y = 0;
        this.titleX = null; //to be filled in later
        this.titleY = null; ////to be filled in later
        this.childLess = null; ////to be filled in later
        this.ccw = null; ////to be filled in later--importantay
    } //const        
    setProperty(prop, value) {
        if (typeof prop !== "string") {
            return false;
        }
        this[prop] = value;
        return true;
    }
    getProperty(prop) {
        return this[prop];
    }
} //class ends

/**
The return object is not only for errors, if there is an error the success flag will tell us
if (returnObject.success===true)......
 */
class ReturnObject {
    constructor() {
        this.messages = [];
        this.success = false; //bydefault its error
        this.data = null;
        this.errorNumber = 0; //0 means all correct no errors;
        /////////////////////////////////    
    }
    addMessage(msg) {
        this.messages.push(msg);
        return true;
    }
    getMessageString() {
        return this.messages.join();
    }
    getMessages() {
        return this.messages;
    }
}

class CollectionBase {
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

class Delete extends CollectionBase {
    constructor(data = []) {
        super(data);
    }
    delete(itemOrId) {
        let theId;
        if (typeof itemOrId == 'object') {
            theId = String(itemOrId.id); //use string just for safety
        }
        else if (typeof itemOrId == 'string') {
            theId = itemOrId;
        }
        else if (typeof itemOrId == 'number') {
            theId = String(itemOrId);
        }
        else {
            return this.response(1, "Wrong format of ID ");
        }
        //----get the element from the array before removing
        const ret = this.idToIndex(theId);
        if (ret.success === true) { //means not an error
            const deletedElement = this.data[ret.data];
            ///----deletion statement
            const newData = [];
            for (let idx = 0; idx < this.data.length; idx++) {
                if (this.data[idx].id !== theId) {
                    newData.push(this.data[idx]);
                }
            }
            //we created a new data array and assigned it to this.data after removing the given id--we could also have used splice??    
            this.data = newData; //dont return this
            return this.response(0, "The deleted item is being returned in the value argument", true, deletedElement);
        }
        else {
            return this.response(2, "Could not find this ID");
        }
    } //delete end
} //class end

class Search extends Delete {
    constructor(data = []) {
        super(data);
    }
    searchFirst(prop = "id", value = 0) {
        //only string or number vlaues are allowed no object vlaues
        if (this.shouldBeStringNumberOrBool(value).success !== true) {
            return this.response(1, "The value argument can just contain number or string values");
        }
        //--------------------------------------- 
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx][prop] == value) {
                return this.response(0, "Here is the first result found", true, this.data[idx]);
            }
        }
        return this.response(2, "No maching result found");
    } //
    search(prop = "id", value = 0) {
        //only string or number vlaues are allowed no object vlaues
        if (this.shouldBeStringNumberOrBool(value).success !== true) {
            return this.response(1, "The value argument can just contain number or string values");
        }
        const results = [];
        //--------------------------------------- 
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx][prop] == value) {
                results.push(this.data[idx]);
            }
        }
        const numberOfResults = results.length;
        if (numberOfResults === 0) {
            return this.response(2, "No maching result found");
        }
        else {
            const ret = this.response(0, `Here are ${results.length}  results found`, true, results);
            ret.numberOfResults = numberOfResults;
            return ret;
        }
    } //
    searchAnd(prop1, value1, prop2, value2) {
        if (this.shouldBeStringNumberOrBool(value1).success !== true) {
            return this.response(1, "The value argument can just contain number or string values");
        }
        if (this.shouldBeStringNumberOrBool(value2).success !== true) {
            return this.response(1, "The value argument can just contain number or string values");
        }
        const final = [];
        for (let idx = 0; idx < this.data.length; idx++) {
            const e = this.data[idx];
            if ((e[String(prop1)] == value1) && (e[String(prop2)] == value2)) {
                final.push(e);
            }
        }
        const numberOfSearches = final.length;
        return this.response(0, `There are a total of ${numberOfSearches} searches found`, true, final);
    } //   
    searchOr(prop1, value1, prop2, value2) {
        if (this.shouldBeStringNumberOrBool(value1).success !== true) {
            return this.response(1, "The value argument can just contain number string or boolean values");
        }
        if (this.shouldBeStringNumberOrBool(value2).success !== true) {
            return this.response(1, "The value argument can just contain number string or boolean values");
        }
        const final = [];
        for (let idx = 0; idx < this.data.length; idx++) {
            const e = this.data[idx];
            if ((e[String(prop1)] == value1) || (e[String(prop2)] == value2)) {
                final.push(e);
            }
        }
        const numberOfSearches = final.length;
        return this.response(0, `There are a total of ${numberOfSearches} searches found`, true, final);
    } //   
} //class end

class Find extends Search {
    constructor(data = []) {
        super(data);
    }
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
} //class end

class Collection extends Find {
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

export default Collection;
