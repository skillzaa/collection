"use strict";
import CollectionBase from "./CollectionBase.js";
import ICollection from "./interfaces/ICollection.js";
import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";
/**      
 *-This is a class Wrapped around an Array of Objects, it add into each object some fileds like id,sortOrder, parentId etc.
 */
//.......................................
//implements ICollection --// on hold
export default class Collection  extends CollectionBase {
//If debugMode == true we use NON-random id as 1,2,3,4 else we always use string based uuids.
public useRandomIds:boolean = false; //By default True
public data:ICollectionItem[]=[];

constructor(data:ICollectionItem[]=[]) {
super(data);    
}

public add(parentId:string="0"):ReturnObject {

const collectionItem:ICollectionItem = new CollectionItem();
collectionItem.id = this.newId();
collectionItem.sortOrder = this.sortOrderCounter++; //imp
collectionItem.createdAt = new Date().getTime();
//.........dont check parent id existance give freedom
collectionItem.parentId = String(parentId);
this.data.push(collectionItem);
return this.response(0,"All ok",true,collectionItem);
}//fn

public insert(item:ICollectionItem):ReturnObject {
//--1
if(this.hasValue(item)===false)
{return this.response(3,"A valid collection item is required");}   
//--2
if(typeof item.id !== "string"){item.id = String(item.id);}
//--3 
if(this.hasValue(item.id)===false)
{return this.response(1,"A valid id is required");}    
//--4   ..string
if(this.isIdUnique(String(item.id)) !== true){return this.response(2,"The id provided already exists in the system. Please provide a unique id");}
//--5 sort order
if((this.hasValue(item.sortOrder)===false) || (typeof item.sortOrder !== "number") ){
item.sortOrder = this.sortOrderCounter++; //imp    
}
//--5 sort order
if(this.hasValue(item.parentId)===false) {
item.parentId = "0"; //imp    
}
this.data.push(item);
return  this.response(0,"All ok",true,item);
}   

public indexToId(index:number):ReturnObject {
//-----------checkIndexBoundsResult    
const checkIndexBoundsResult = this.checkIndexBounds(index);
if(checkIndexBoundsResult.success !== true){
    return checkIndexBoundsResult;}

let item = this.data[index];
//...--check if item is real item
return this.response(0,"",true,String(item.id));         
}

public idToIndex(id:string):ReturnObject {
if(typeof id !== "string"){id = String(id);}    

for (let idx = 0; idx < this.data.length; idx++) {
     
    if (this.data[idx].id == id) {
        return idx;
    }     
 }

return this.response(3,"Could not find the index. Most probably the id was not found");    
}//...............abs

isFirst(id:string):ReturnObject{
    if (this.data[0].id == id) {
        return true;
    }
    else {
        return false;
    }
} //getItem
getFirst():ReturnObject { //what if the collection is empty?
    return this.data[0];
} //getItem
getLast():ReturnObject {
    return this.data[this.data.length - 1];
} //getItem
isLast(id:string|number):ReturnObject {
    if (this.data[this.data.length - 1].id == id) {
        return true;
    }
    else {
        return false;
    }
} //getItem
/**Just send back the first one  */
searchFirst(prop:keyof CollectionItem, value:string|number):ReturnObject {
    for (let idx = 0; idx < this.data.length; idx++) {
        if (this.data[idx][prop] == value) {
            return this.data[idx];
        }
    }
return false;    
} //

search(prop:string = "id", value:string|number = 0):ReturnObject{
    const final:CollectionItem[]|[] = [];
    this.data.forEach(e => {
        if (e[prop] == value) {
            final.push(e);
        }   
    });
    return final;
} //
//--A forEach loop once starts will loop through all the array elements and can not be stopped by return.
searchAndFirst(prop1:string, value1:any, prop2:string, value2:any):ReturnObject {
    for (let idx = 0; idx < this.data.length; idx++) {
        const e = this.data[idx];
        if ((e[prop1] == value1) && (e[prop2] == value2)) {
            return e;
        }
    }
    return false;
} //
searchAnd(prop1:string, value1:string|number, prop2:string, value2:string|number) :ReturnObject{
    const final:CollectionItem[] = [];
    for (let idx = 0; idx < this.data.length; idx++) {
        const e = this.data[idx];
        if ((e[String(prop1)] == value1) && (e[prop2] == value2)) {
            final.push(e);
        }
    }
    return final;
} //   
//------------------Batch 3
find(id:string):ReturnObject {
    let final:boolean|ICollectionItem = false;
    this.data.forEach(e => {
        if (e.id == id) {
            final = e;
        }
    });
    return final;
} //getItem

findChildren(parentItemId:string|number):ReturnObject {
    let final:ICollectionItem[] = [];
    this.data.forEach(e => {
        if (e['parentId'] == parentItemId) {
            final.push(e);
        }
    });
    return final;
} //
sort(property:string="sortOrder",overWrite:boolean = true):ReturnObject {
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
sortDesc(property:string, overWrite = false):ReturnObject {
    let sorted = this.data.sort((a, b) => {
        const bandA = a[property] || 0;
        const bandB = b[property] || 0;
        let comparison = 0;
        if (bandA > bandB) {
            comparison = -1; //from 1 to -1 to make desc
        }
        else if (bandA < bandB) {
            comparison = 1;//from -1 to 1 to make desc
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
public push(a:ICollectionItem):ReturnObject {
    this.data.push(a);
    return true;
}
get length():ReturnObject {
    return this.data.length;
}
public getPrevByIndex(item:ICollectionItem):ReturnObject {
    let isFirst = this.isFirst(item.id);
    if (isFirst == false) {
        let itemIndex = this.idToIndex(item.id);
        return this.data[itemIndex - 1];
    }
    else {
        return false;
    }
} //fn
public getNextByIndex(item:CollectionItem):ReturnObject {
    let isLast = this.isLast(item.id);
    if (isLast == false) {
        let itemIndex = this.idToIndex(item.id);
        return this.data[itemIndex + 1];
    }
    else {
        return false;
    }
} //fn

public setPropertyAll(property:keyof CollectionItem, value:any):ReturnObject {
    let arr = [];
    this.data.forEach(e => {
        e.setProperty(property,value);
    });    
return true;    
}
public setRandom():ReturnObject {
    this.data.forEach(e => {
        e.setProperty("random",Math.ceil(Math.random()*9999));
    });
return true;    
}
//..............................................
public delete(itemOrId:string|ICollectionItem):ReturnObject {
/**
 * To Delete
 * -if the itemOrId is not string ie id get the id out of it
 * -the fn returns only ReturnOBject
 **/
let theId:string;  
if (typeof itemOrId == 'object') {
theId = String(itemOrId.id);//use string just for safety
}else if (typeof itemOrId == 'string'){
    theId = itemOrId;
}else if (typeof itemOrId == 'number'){
    theId = String(itemOrId);
}else{
    return this.response(1,"Wrong format of ID ");
}
//----get the element from the array before removing
const deletedElementIndex:number|ReturnObject = this.idToIndex(theId);
if (typeof deletedElementIndex === "number"){
    const deletedElement = this.data[deletedElementIndex];
    ///----deletion statement
    const newData = [];
        for (let idx = 0; idx < this.data.length; idx++) {
            if(this.data[idx].id !== theId){
                newData.push(this.data[idx]);
            }
        }
    
        this.data = newData;
    return  this.response(0,"The deleted item is being returned in the value argument",true,deletedElement);
}else{
    return this.response(2,"Could not retrieve index");
}
//---save the deleted elm for return;

}//delete end


} //class end