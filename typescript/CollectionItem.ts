import ICollectionItem from './ICollectionItem.js';

export default class CollectionItem implements ICollectionItem{
public id : string|number = "";    
public parentId : string|number|null = null;    
public sortOrder :number =0;    
public createdAt :number =0;

setProperty(prop:string,value:any){
if(typeof prop !== "string"){return false;}    
this[prop] = value;
return true;
}
getProperty(prop:string){
return this[prop];
}
}
