"use strict";
import Delete from "./Delete.js";
//import ICollection from "./interfaces/ICollection.js";
import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";

export default class Search  extends Delete {

constructor(data:ICollectionItem[]=[]) {
super(data);    
}


searchFirst(prop:string = "id", value:string|number = 0):ReturnObject{
//only string or number vlaues are allowed no object vlaues
if (this.shouldBeStringNumberOrBool(value).success !== true){
    return this.response(1,"The value argument can just contain number or string values");
}
//--------------------------------------- 
    for (let idx = 0; idx < this.data.length; idx++) {
        if (this.data[idx][prop] == value) {
            return  this.response(0,"Here is the first result found",true,this.data[idx]);            
        }   
    }
return this.response(2,"No maching result found");    
} //
search(prop:string = "id", value:string|number = 0):ReturnObject{
//only string or number vlaues are allowed no object vlaues
if (this.shouldBeStringNumberOrBool(value).success !== true){
    return this.response(1,"The value argument can just contain number or string values");
}
const results:CollectionItem[]=[];
//--------------------------------------- 
    for (let idx = 0; idx < this.data.length; idx++) {
        if (this.data[idx][prop] == value) {
         results.push(this.data[idx]);
        }   
    }

const numberOfResults =  results.length;  
if( numberOfResults === 0 ){
    return this.response(2,"No maching result found");    
}else{
     
    const ret =  this.response(0,`Here are ${results.length}  results found`,true,results);    
    ret.numberOfResults = numberOfResults;
    return ret;
}    
} //

searchAnd(prop1:string, value1:string|number, prop2:string, value2:string|number) :ReturnObject{

if (this.shouldBeStringNumberOrBool(value1).success !== true){
    return this.response(1,"The value argument can just contain number or string values");
}    
if (this.shouldBeStringNumberOrBool(value2).success !== true){
    return this.response(1,"The value argument can just contain number or string values");
}    
    const final:CollectionItem[] = [];
    for (let idx = 0; idx < this.data.length; idx++) {
        const e = this.data[idx];
        if ((e[String(prop1)] == value1) && (e[String(prop2)] == value2)) {
            final.push(e);
        }
    }
const numberOfSearches = final.length;
return this.response(0,
    `There are a total of ${numberOfSearches} searches found`,
    true,final);
    
} //   
searchOr(prop1:string, value1:string|number, prop2:string, value2:string|number) :ReturnObject{

if (this.shouldBeStringNumberOrBool(value1).success !== true){
    return this.response(1,"The value argument can just contain number string or boolean values");
}    
if (this.shouldBeStringNumberOrBool(value2).success !== true){
    return this.response(1,"The value argument can just contain number string or boolean values");
}    
    const final:CollectionItem[] = [];
    for (let idx = 0; idx < this.data.length; idx++) {
        const e = this.data[idx];
        if ((e[String(prop1)] == value1) || (e[String(prop2)] == value2)) {
            final.push(e);
        }
    }
const numberOfSearches = final.length;
return this.response(0,
    `There are a total of ${numberOfSearches} searches found`,
    true,final);
    
} //   

} //class end