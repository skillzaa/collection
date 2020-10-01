"use strict";
import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";

export default class CollectionBase{
//If useRandomIds == true we use NON-random id as "1","2","3","4" else we always use string based uuids.

protected idCounter:number=1;
protected sortOrderCounter:number= 1;
public useRandomIds:boolean = false; //By default True
public data:ICollectionItem[]=[];

constructor(data:ICollectionItem[]=[]) {
this.data = data; //the aoo = an array not an object
}

//---------PROTECTED METHODS
//-----------------------------------
protected newId():string {
    if (this.useRandomIds === false) {  
        return  String(this.idCounter++);
    } else {
        return this.uuid();
    }
}
protected uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
protected isIdUnique(id:string|number){    
for (let idx = 0; idx < this.data.length; idx++) {
    if(this.data[idx].id == id){
        return false;
    }
}    
return true;
}
protected blankCopy():CollectionItem{
return new CollectionItem();
  }
protected validateParentId(parentId:string):string{
if(typeof parentId !== "string" || parentId==""){
    return "0";
}else {
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
protected response(errorNumber=0,message="",success=false,data:any=""){
    const r = new ReturnObject();
    r.addMessage(message);
    r.errorNumber = errorNumber;
    r.success = success;
    r.data = data;
    return r;
}
protected hasValue(value:any):boolean{
if( (typeof value == "undefined") ||
    (value == "") || (value == null) ){
    return false;
}else{
    return true;}
}    
protected checkIndexBounds(index:number):ReturnObject{
    if( (Number(index) >= this.data.length)
    ||
    (Number(index) < 0)
){
    return this.response(1,"The index is either larger or smaller than the number of items in the collection");        
} else{
    return  this.response(0,"All ok",true,index);        
}   
}//fn

////////////////////////////////////////
protected shouldBeStringOrNumber(value:string|number){
if( (typeof value !== "number") && ((typeof value !== "string")) ){  
    return this.response(1,"The vlaue argument can just contain number or string values");
}else{
    return this.response(0,"ok",true);
}
}
protected shouldBeStringNumberOrBool(value:string|number|boolean){
if( (typeof value !== "number") && ((typeof value !== "string")) && (typeof value !== "boolean") ){
    return this.response(1,"The vlaue argument can just contain number, string or boolean values");
}else{
    return this.response(0,"ok",true);
}
}
    
////////////////////////////////////////
public push(a:ICollectionItem):ReturnObject {
    this.data.push(a);
    return true;
}
get length():number {
    return this.data.length;
}


public setPropertyAll(property:keyof CollectionItem, value:any):ReturnObject {
    let arr = [];
    this.data.forEach(e => {
        e.setProperty(property,value);
    });    
return this.response(0,"ok",true,this.data); 
}
public setRandom():ReturnObject {
    this.data.forEach(e => {
        e.setProperty("random",Math.ceil(Math.random()*9999));
    });
return this.response(0,"ok",true,this.data);
}


isFirst(id:string):Boolean{
    if (this.data[0].id == id) {
        return true;
    }
    else {
        return false;
    }
} //getItem
getFirst():ICollectionItem { //what if the collection is empty?
    return this.data[0];
} //getItem
getLast():ICollectionItem {
    return this.data[this.data.length - 1];
} //getlast
isLast(id:string):boolean {
    if (this.data[this.data.length - 1].id == id) {
        return true;
    }
    else {
        return false;
    }
} //islast
////////////////////////////////////////
} //class ends    
