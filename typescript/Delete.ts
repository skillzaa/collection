"use strict";
import CollectionBase from "./CollectionBase.js";
//import ICollection from "./interfaces/ICollection.js";
import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";


export default class Delete  extends CollectionBase {

constructor(data:ICollectionItem[]=[]) {
super(data);    
}
public delete(itemOrId:string|ICollectionItem):ReturnObject {
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
const ret:ReturnObject = this.idToIndex(theId);
if (ret.success === true){//means not an error
    const deletedElement = this.data[ret.data];
    ///----deletion statement
    const newData = [];
        for (let idx = 0; idx < this.data.length; idx++) {
            if(this.data[idx].id !== theId){
                newData.push(this.data[idx]);
            }
        }
//we created a new data array and assigned it to this.data after removing the given id--we could also have used splice??    
        this.data = newData;//dont return this
    return  this.response(0,"The deleted item is being returned in the value argument",true,deletedElement);
}else{
    return this.response(2,"Could not find this ID");
}
}//delete end
    

} //class end