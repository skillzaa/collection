"use strict";class t{constructor(){this.parentId="0",this.id="0",this.sortOrder=0,this.createdAt=0,this.title="New Node",this.selected=!1,this.highlighted=!1,this.internalGap=2,this.folded=!1,this.titleCapitalization="first",this.details="",this.border=2,this.borderRadius=15,this.padding=8,this.fontSize=22,this.fontColor="#343a40",this.width=null,this.height=null,this.minWidth=50,this.minHeight=50,this.fontFamily="Impact",this.overWriteStyle=!1,this.x=0,this.y=0,this.titleX=null,this.titleY=null,this.childLess=null,this.ccw=null}setProperty(t,e){return"string"==typeof t&&(this[t]=e,!0)}getProperty(t){return this[t]}}class e{constructor(){this.messages=[],this.success=!1,this.value=null,this.errorNumber=0}addMessage(t){return this.messages.push(t),!0}getMessageString(){return this.messages.join()}getMessages(){return this.messages}}module.exports=class extends class{constructor(t=[]){this.idCounter=1,this.sortOrderCounter=1,this.useRandomIds=!1,this.data=[],this.data=t}newId(){return!1===this.useRandomIds?String(this.idCounter++):this.uuid()}uuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}isIdUnique(t){for(let e=0;e<this.data.length;e++)if(this.data[e].id==t)return!1;return!0}blankCopy(){return new t}validateParentId(t){return"string"!=typeof t||""==t?"0":t}response(t=0,s="",r=!1){const i=new e;return i.addMessage(s),i.errorNumber=t,i.success=r,i}hasValue(t){return void 0!==t&&""!=t&&null!=t}}{constructor(t=[]){super(t),this.useRandomIds=!1,this.data=[]}add(e="0"){const s=new t;return s.id=this.newId(),s.sortOrder=this.sortOrderCounter++,s.createdAt=(new Date).getTime(),s.parentId=String(e),this.data.push(s),s}insert(t){return!1===this.hasValue(t)?this.response(3,"A valid collection item is required"):!1===this.hasValue(t.id)?this.response(1,"A valid id is required"):!0!==this.isIdUnique(t.id)?this.response(2,"The id provided already exists in the system. Please provide a unique id"):("string"!=typeof t.id&&(t.id=String(t.id)),!1!==this.hasValue(t.sortOrder)&&"number"==typeof t.sortOrder||(t.sortOrder=this.sortOrderCounter++),!1===this.hasValue(t.parentId)&&(t.parentId="0"),this.data.push(t),t)}indexToId(t){if(Number(t)>=this.data.length||Number(t)<0)return this.response(1,"The index is larger than the number of items in the collection");let e=this.data[t];return String(e.id)}idToIndex(t){"string"!=typeof t&&(t=String(t));for(let e=0;e<this.data.length;e++)if(this.data[e].id==t)return e;return this.response(3,"Could not find the index. Most probably the id was not found")}isFirst(t){return this.data[0].id==t}getFirst(){return this.data[0]}getLast(){return this.data[this.data.length-1]}isLast(t){return this.data[this.data.length-1].id==t}searchFirst(t,e){for(let s=0;s<this.data.length;s++)if(this.data[s][t]==e)return this.data[s];return!1}search(t="id",e=0){const s=[];return this.data.forEach(r=>{r[t]==e&&s.push(r)}),s}searchAndFirst(t,e,s,r){for(let i=0;i<this.data.length;i++){const a=this.data[i];if(a[t]==e&&a[s]==r)return a}return!1}searchAnd(t,e,s,r){const i=[];for(let a=0;a<this.data.length;a++){const n=this.data[a];n[String(t)]==e&&n[s]==r&&i.push(n)}return i}find(t){let e=!1;return this.data.forEach(s=>{s.id==t&&(e=s)}),e}findChildren(t){let e=[];return this.data.forEach(s=>{s.parentId==t&&e.push(s)}),e}sort(t="sortOrder",e=!0){let s=this.data.sort((e,s)=>{const r=e[t]||0,i=s[t]||0;let a=0;return r>i?a=1:r<i&&(a=-1),a});if(!0===e)return this.data=s,s;return s.map(t=>Object.assign({},t))}sortDesc(t,e=!1){let s=this.data.sort((e,s)=>{const r=e[t]||0,i=s[t]||0;let a=0;return r>i?a=-1:r<i&&(a=1),a});if(!0===e)return this.data=s,s;return s.map(t=>Object.assign({},t))}push(t){return this.data.push(t),!0}get length(){return this.data.length}getPrevByIndex(t){if(0==this.isFirst(t.id)){let e=this.idToIndex(t.id);return this.data[e-1]}return!1}getNextByIndex(t){if(0==this.isLast(t.id)){let e=this.idToIndex(t.id);return this.data[e+1]}return!1}setPropertyAll(t,e){return this.data.forEach(s=>{s.setProperty(t,e)}),!0}setRandom(){return this.data.forEach(t=>{t.setProperty("random",Math.ceil(9999*Math.random()))}),!0}delete(t){"object"==typeof t?this.data=this.data.filter(e=>e.id!==t.id):"string"==typeof t&&(this.data=this.data.filter(t=>{t.id}))}};
