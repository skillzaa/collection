"use strict";class t{constructor(){this.parentId=0,this.id=0,this.sortOrder=0,this.createdAt=0,this.title="New Node",this.selected=!1,this.highlighted=!1,this.internalGap=2,this.folded=!1,this.titleCapitalization="first",this.details="",this.border=2,this.borderRadius=15,this.padding=8,this.fontSize=22,this.fontColor="#343a40",this.width=null,this.height=null,this.minWidth=50,this.minHeight=50,this.fontFamily="Impact",this.overWriteStyle=!1,this.x=0,this.y=0,this.titleX=null,this.titleY=null,this.childLess=null,this.ccw=null}setProperty(t,e){return"string"==typeof t&&(this[t]=e,!0)}getProperty(t){return this[t]}}class e{constructor(){this.messages=[],this.success=!1,this.value=null,this.errorNumber=0}addMessage(t){return this.messages.push(t),!0}getMessageString(){return this.messages.join()}getMessages(){return this.messages}}module.exports=class{constructor(t=[]){this.useRandomIds=!1,this.data=[],this.idCounter=1,this.sortOrderCounter=1,this.data=t}add(e=""){const r=new t;return r.id=this.newId(),r.sortOrder=this.sortOrderCounter++,r.parentId=e,r.createdAt=(new Date).getTime(),this.data.push(r),r}insert(t){if(void 0===t.id){const t=new e;return t.addMessage("A valid id is required."),t.errorNumber=1,t}if(!0!==this.isIdUnique(t.id)){const t=new e;return t.addMessage("The id provided already exists in the system. Please provide a unique id"),t.errorNumber=2,t}return void 0!==t.sortOrder&&"number"==typeof t.sortOrder||(t.sortOrder=this.sortOrderCounter++),void 0===t.parentId&&(t.parentId=0),this.data.push(t),t}indexToId(t){if(t>=this.data.length){const t=new e;return t.addMessage("The index is larger than the number of items in the collection."),t.errorNumber=3,t}return this.data[t].id}idToIndex(t){let r;if(this.data.forEach((e,s)=>{e.id==t&&(r=s)}),"number"!=typeof r||"string"!=typeof r){const t=new e;return t.addMessage("Could not find the index. Most probably the id was not found."),t.errorNumber=3,t}return r}isFirst(t){return this.data[0].id==t}getFirst(){return this.data[0]}getLast(){return this.data[this.data.length-1]}isLast(t){return this.data[this.data.length-1].id==t}searchFirst(t,e){for(let r=0;r<this.data.length;r++)if(this.data[r][t]==e)return this.data[r];return!1}search(t="id",e=0){const r=[];return this.data.forEach(s=>{s[t]==e&&r.push(s)}),r}searchAndFirst(t,e,r,s){for(let i=0;i<this.data.length;i++){const a=this.data[i];if(a[t]==e&&a[r]==s)return a}return!1}searchAnd(t,e,r,s){const i=[];for(let a=0;a<this.data.length;a++){const d=this.data[a];d[t]==e&&d[r]==s&&i.push(d)}return i}find(t){let e=!1;return this.data.forEach(r=>{r.id==t&&(e=r)}),e}findChildren(t){let e=[];return this.data.forEach(r=>{r.parentId==t&&e.push(r)}),e}sort(t="sortOrder",e=!0){let r=this.data.sort((e,r)=>{const s=e[t]||0,i=r[t]||0;let a=0;return s>i?a=1:s<i&&(a=-1),a});if(!0===e)return this.data=r,r;return r.map(t=>Object.assign({},t))}sortDesc(t,e=!1){let r=this.data.sort((e,r)=>{const s=e[t]||0,i=r[t]||0;let a=0;return s>i?a=-1:s<i&&(a=1),a});if(!0===e)return this.data=r,r;return r.map(t=>Object.assign({},t))}push(t){return this.data.push(t),!0}get length(){return this.data.length}getPrevByIndex(t){if(0==this.isFirst(t.id)){let e=this.idToIndex(t.id);return this.data[e-1]}return!1}getNextByIndex(t){if(0==this.isLast(t.id)){let e=this.idToIndex(t.id);return this.data[e+1]}return!1}setPropertyAll(t,e){return this.data.forEach(r=>{r.setProperty(t,e)}),!0}setRandom(){this.data.forEach(t=>{t.setProperty("random",Math.ceil(9999*Math.random()))})}delete(t){"object"==typeof t?this.data=this.data.filter(e=>e.id!==t.id):"number"==typeof t&&(this.data=this.data.filter(t=>{t.id}))}newId(){return!1===this.useRandomIds?this.idCounter++:this.uuid()}uuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}isIdUnique(t){for(let e=0;e<this.data.length;e++)if(this.data[e].id==t)return!1;return!0}blankCopy(){return new t}};
