"use strict";
import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";

import ICollection from "./interfaces/ICollection.js";
/**      
 *-This is a class Wrapped around an Array of Objects, it add into each object some fileds like id,sortOrder, parentId etc.
 */
//.......................................
export default class CollectionBase{
//If useRandomIds == true we use NON-random id as "1","2","3","4" else we always use string based uuids.

protected idCounter:number=1;
protected sortOrderCounter:number= 1;
public useRandomIds:boolean = false; //By default True
public data:ICollectionItem[]=[];

constructor(data:ICollectionItem[]=[]) {
this.data = data; //the aoo = an array not an object
}

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
//--------------------------
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
} //class ends    
