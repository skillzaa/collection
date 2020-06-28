import ICollectionItem from './ICollectionItem';
import CollectionItem from './CollectionItem';
import ReturnObject from "./ReturnObject.js";
/**
 *-- 
 */
export default interface ICollection {
debugMode:boolean;
data:ICollectionItem[];
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
add(parentId:string|number):CollectionItem;
read(item:ICollectionItem):ICollectionItem|ReturnObject;

indexToId(index:number):string|number|ReturnObject;
idToIndex(id:string|number):number|ReturnObject;

isFirst(id:string|number):boolean|ReturnObject;
getFirst():ICollectionItem|ReturnObject;
getLast():ICollectionItem|ReturnObject;
isLast(id:string|number):boolean|ReturnObject;

search(prop:string, value:string|number):CollectionItem[]|boolean;
searchFirst(prop:keyof CollectionItem, value:any):CollectionItem|boolean;

searchAnd(prop1:string, value1:any, prop2:string,value2:any):CollectionItem[]|boolean; 
searchAndFirst(prop1:string, value1:any, prop2:string, value2:any):CollectionItem|boolean;


find(id:string|number):ICollectionItem|boolean;
findChildren(parentItemId:string|number):ICollectionItem[]|boolean;
        
sort(property:string,overWrite:boolean):ICollectionItem[]|boolean; 
sortDesc(property:string, overWrite:boolean):ICollectionItem[]|boolean;
    
push(a:CollectionItem):CollectionItem[]|boolean;
    
length():number;
    
getPrevByIndex(item:CollectionItem):CollectionItem|boolean;
setPropertyAll(property:keyof CollectionItem, value:any):CollectionItem|boolean;
    
setRandom():void;
    
delete(itemOrId:number|CollectionItem):void;
    

}
