import ICollectionItem from './interfaces/ICollectionItem.js';
///this collection item is node--waoooo
export default class CollectionItem implements ICollectionItem{
parentId :number|string;    
id : number|string;
sortOrder :number;
createdAt :number;
title :string;
selected :boolean;
highlighted :boolean;
internalGap :number;
folded : boolean;
titleCapitalization :string;
details  :string
border  : number;
borderRadius  :number;
padding  :number;
fontSize  :number;
fontColor  :string;
width  :   null;
height  : null;
minWidth  :number;
minHeight  :number;
fontFamily  :string;
overWriteStyle : boolean;
x :number;
y :number;
titleX : null;
titleY : null;
childLess : null;
ccw : null;
//---------------------------------------------
constructor(){
this.parentId = 0;    
//No item can have id=0, this is just for newly created items who have not yet been given id yet. Consider it as null.
this.id = 0;
this.sortOrder = 0;
this.createdAt =0;
this.title = "New Node";
this.selected = false;
this.highlighted = false;
this.internalGap = 2;
this.folded = false;
this.titleCapitalization = "first";
this.details  =   "";
this.border  =   2;
this.borderRadius  =  15;
this.padding  =   8;
this.fontSize  =   22;
this.fontColor  =  "#343a40";
this.width  =   null;//to be filled in later
this.height  = null;//to be filled in later
this.minWidth  =   50;
this.minHeight  = 50;
this.fontFamily  =  "Impact";
this.overWriteStyle = false;
this.x = 0;
this.y = 0;
this.titleX = null; //to be filled in later
this.titleY = null;////to be filled in later
this.childLess = null;////to be filled in later
this.ccw = null;////to be filled in later--importantay
}//const        

setProperty(prop:string,value:any){
    if(typeof prop !== "string"){return false;}    
    this[prop] = value;
    return true;
    }
    getProperty(prop:string){
    return this[prop];
    }
} //class ends    


