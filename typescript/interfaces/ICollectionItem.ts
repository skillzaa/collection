export default interface ICollectionItem {
id : string;    
parentId : string;    
sortOrder :number;    
createdAt :number;

setProperty(prop:string,value:string|number):boolean;
getProperty(prop:string):any;
}
