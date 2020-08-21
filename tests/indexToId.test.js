const Collection = require('../public/collectioncjs');
const setup = require('./setup.cjs');
const Tester = require('./tester.cjs');

const collection = setup();
collection.useRandomIds = false;
const tester = new Tester(collection);
/**
 * indexToId must get index max upto data.length and min =0
 */
describe("indexToId--check each index",()=>{    
   for (let idx = 0; idx < collection.length; idx++) {
       const theId = collection.data[idx].id;
       const ret = collection.indexToId(idx);
       //console.log("ret",ret);
       const theReturnedId= ret.data.id;
       test(`check Id`,()=>{expect(theReturnedId).toBe(theReturnedId)});
       
   }     
});

describe("indexToId",()=>{    
const ret = collection.indexToId(500);
test(`error`,()=>{expect(ret.errorNumber).toBe(1)});
const ret2 = collection.indexToId(-2);
test(`error`,()=>{expect(ret2.errorNumber).toBe(1)});
///--check all such cases 
///wah +1
const ret3 = collection.indexToId(collection.data.length+1);
test(`error`,()=>{expect(ret3.errorNumber).toBe(1)});
///wah -1
const ret4 = collection.indexToId(-11);
test(`error`,()=>{expect(ret4.errorNumber).toBe(1)});
     
});
    
// ///////////////////////////////
describe("idToIndex",()=>{    
let theId = 1;
for (let idx = 0; idx < collection.length; idx++) {
  const ret = collection.idToIndex(String(theId));
   theId++;
   test(`check Id`,()=>{expect(ret.data).toBe(idx)});
}     
});

describe("send wrong ids",()=>{    
const ret = collection.idToIndex("feedwws");
test(`error`,()=>{expect(ret.errorNumber).toBe(3)});
const ret1 = collection.idToIndex("2222243");
test(`error`,()=>{expect(ret1.errorNumber).toBe(3)}); 

const ret2 = collection.idToIndex(-2);
test(`error`,()=>{expect(ret2.errorNumber).toBe(3)});

});
