const Collection = require('../public/collectioncjs');
const Tester = require('./tester.cjs');

const collection = new Collection();
collection.useRandomIds = false;
const tester = new Tester(collection);

const item = {
id:"0",
parentId:"0",
sortOrder : "",
createdAt : ""
};

describe("collection",()=>{
    item.id = "234";    
collection.insert(item); //string parent id
tester.testLen(1);
tester.testProp(1,"sortOrder",1);
tester.testProp(1,"id","234");

});
