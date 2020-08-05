const Collection = require('../public/collectioncjs');
const setup = require('./setup.cjs');
const Tester = require('./tester.cjs');

const collection = setup();
collection.useRandomIds = false;
const tester = new Tester(collection);
//--The add method should always add and send back the added item --there should be no failure Also should fit the parent id. 
describe("indexToId",()=>{    
   for (let idx = 0; idx < collection.length; idx++) {
       const theId = collection.data[idx].id;
       const theReturnedId = collection.indexToId(idx);
       test(`check Id`,()=>{expect(theReturnedId).toBe(theId)});
       
   }     
});


describe("idToIndex",()=>{    
   let theId = 1;
   for (let idx = 0; idx < collection.length; idx++) {
       const theReturnedIndex = collection.idToIndex(String(theId));
       theId++;
       test(`check Id`,()=>{expect(theReturnedIndex).toBe(idx)});
       
   }     
});
