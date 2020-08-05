import setup from './tests/setup.es.js';
import Collection from './public/collection.js';

const collection = setup();
collection.useRandomIds = false;

 

let theId =1;
   for (let idx = 0; idx < collection.length; idx++) {
       const theReturnedIndex = collection.idToIndex(String(theId));
      
       console.log("idx",idx);
       console.log("theId",theId);
       theId++;
       
   }     
 
 