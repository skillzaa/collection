const Collection = require('../public/collectioncjs');
const Tester = require('./tester.cjs');

const collection = new Collection();
collection.useRandomIds = false;
const tester = new Tester(collection);

describe("collection",()=>{
const ret = collection.insert(); 
test(`ret error 3`,()=>{expect(ret.errorNumber).toEqual(3)});            
});

describe("collection",()=>{
    const item = {
        id: "234",
        parentId:"0",
        sortOrder : "",
        createdAt : ""
        };

collection.insert(item); 
tester.testLen(1);
tester.testProp("234","sortOrder",1);
tester.testProp("234","id","234");

});
describe("collection",()=>{
    const item = {
        id: null,
        parentId:"0",
        sortOrder : "",
        createdAt : ""
        };
const ret = collection.insert(item); 
test(`ret`,()=>{expect(ret.errorNumber).toEqual(1)})
});

describe("collection",()=>{
const item = {
    id: 555,
    parentId:"kgtf",
    sortOrder : 999,
    createdAt : ""
    };

collection.insert(item); 
//console.log('item :>> ', item);
tester.testLen(2);
tester.testProp("555","sortOrder",999);//--note
tester.testProp("555","parentId","kgtf");//--note
tester.testProp("555","id","555");
});
describe("dublicate id",()=>{
const item = { //
    id: 555,
    parentId:"kgtf",
    sortOrder : 999,
    createdAt : ""
    };

const ret = collection.insert(item); 
test(`ret`,()=>{expect(ret.errorNumber).toEqual(2)})
});
