const setup = require('./setup.cjs');
const Tester = require('./tester.cjs');


const collection = setup();
const tester = new Tester(collection);

describe("collection",()=>{
//const res =  collection.add(123456789);
const len = collection.length;    
tester.testLen(10)
const justAdded = collection.add(1234);
tester.testLen(11)

tester.testProp(11,"parentId",1234);

const last  = collection.getLast();

tester.testProp(11,"id",last.id);

});