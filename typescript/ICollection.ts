import ICollectionItem from './ICollectionItem';
import CollectionItem from './CollectionItem';

export default interface ICollection {
useRandomIds:boolean;
data:ICollectionItem[];
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
add(parentId:string|number|null):CollectionItem;
read(item:CollectionItem):CollectionItem|false;
indexToId(index:number):number|string;
idToIndex(id:string|number):number|null;
isFirst(id:string|number):boolean;
getFirst():ICollectionItem;
getLast():ICollectionItem;
isLast(id:string|number):boolean;

search(prop:string, value:string|number):CollectionItem[]|[];
searchFirst(prop:string, value:any):CollectionItem|boolean;

searchAnd(prop1:string, value1:any, prop2:string,value2:any):CollectionItem[]|[]; 
searchAndFirst(prop1:string, value1:any, prop2:string, value2:any):boolean | CollectionItem;


find(id:string|number):boolean|ICollectionItem;
findChildren(parentItemId:string|number):ICollectionItem[]|[];
        
sort(property:string,overWrite:boolean):ICollectionItem[]; 
sortDesc(property:string, overWrite:boolean):ICollectionItem[];
    
push(a:CollectionItem):CollectionItem[];
    
length():number;
    
getPrevByIndex(item:CollectionItem):CollectionItem|boolean;
setPropertyAll(property:string, value:any):CollectionItem|boolean;
    
setRandom():void;
    
delete(itemOrId:number|CollectionItem):void;
    

}
