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

const ret = collection.insert(item); 
test(`ret error 3`,()=>{expect(ret.errorNumber).toEqual(0)});            

tester.testLen(1);
tester.testProp("234","sortOrder",1);
tester.testProp("234","id","234");

});

describe("this will work",()=>{
//the null will be wrapped inside " and "    
    const item = {
        id: null,
        parentId:"0",
        sortOrder : "",
        createdAt : ""
        };
const ret = collection.insert(item); 
//console.log('ret :>> ', ret);
test(`ret`,()=>{expect(ret.errorNumber).toEqual(0)})
});

describe("collection",()=>{
const item = {
    id: 555,
    parentId:"kgtf",
    sortOrder : 999,
    createdAt : ""
    };

const ret = collection.insert(item); 
test(`ret`,()=>{expect(ret.errorNumber).toEqual(0)});
//console.log('ret :>> ', ret);
tester.testLen(3);
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

    tester.testLen(3); //still 3 as prev time

const ret = collection.insert(item); 
test(`ret`,()=>{expect(ret.errorNumber).toEqual(2)}); //not unique
});
