export default class CollectionItem {
public id : string|number = "";    
public parentId : string|number|null = null;    
public title : string ="";    
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
