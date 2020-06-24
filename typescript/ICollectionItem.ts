export default interface ICollectionItem {
id : string|number;    
parentId : string|number;    
sortOrder :number;    
createdAt :number;

setProperty(prop:string,value:any):boolean;
getProperty(prop:string):any;
}
