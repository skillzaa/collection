const setup = require('./setup.cjs');
const Tester = require('./tester.cjs');


const collection = setup();
const tester = new Tester(collection);

describe("collection",()=>{

const item = {
    id:33,
    sortOrder: 55
}    

const justAdded = collection.read(item);
tester.testProp(33,"sortOrder",55);
tester.testProp(33,"id",justAdded.id);

//test(`find: ${index}`,()=>{expect(itemFound.id).toEqual(itemByIndex.id)});        


});


describe("collection",()=>{
const item = {
    id:3,
    sortOrder: 55
}    

const justAdded = collection.read(item);
test('justAdded',()=>{expect(justAdded).toBeFalsy()});        


});
describe("collection",()=>{
const item = {
    id:4,
    sortOrder: 55
}    
const justAdded = collection.read(item);
test('justAdded',()=>{expect(justAdded).toBeFalsy()});        

});