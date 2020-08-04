const Collection = require('../public/collectioncjs');
const Tester = require('./tester.cjs');

const collection = new Collection();
collection.useRandomIds = false;
const tester = new Tester(collection);
//--The add method should always add and send back the added item --there should be no failure Also should fit the parent id. 
describe("collection",()=>{
collection.add("testParentId"); //string parent id
tester.testLen(1);
tester.testProp(1,"sortOrder",1);
tester.testProp(1,"parentId","testParentId");

});

describe("collection",()=>{
    collection.add();///empty , no parent id
tester.testLen(2);'',
tester.testProp(2,"parentId","0");
tester.testProp(2,"sortOrder",2);

 test(`createdAt`,()=>{expect(typeof collection.data[1].createdAt).toEqual("number")});        
// tester.testProp(2,"createdAt","0");

});
describe("collection",()=>{
collection.add(1234);//parenti id without " and "    
tester.testLen(3);'',
tester.testProp(3,"parentId","1234");
tester.testProp(3,"sortOrder",3);

 test(`createdAt`,()=>{expect(typeof collection.data[1].createdAt).toEqual("number")});        
});