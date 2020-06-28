const setup = require('./setup.cjs');
const Tester = require('./tester.cjs');


const collection = setup();
const tester = new Tester(collection);

describe("collection",()=>{
const item = {
    id:33,
    sortOrder: 55
}    
const justAdded = collection.insert(item);
tester.testProp(33,"sortOrder",55);
tester.testProp(33,"id",justAdded.id);
//test(`find: ${index}`,()=>{expect(itemFound.id).toEqual(itemByIndex.id)});        
});

describe("collection",()=>{
const item = {
    id:3,
    sortOrder: 55
}    
const justAdded = collection.insert(item);
test('=',()=>{expect(justAdded.success).toBeFalsy()});        
test('=',()=>{expect(justAdded.errorNumber).toBe(2)});        
});




describe("collection",()=>{
const item = {
    sortOrder: 55
}    
const justAdded = collection.insert(item);
test('justAdded',()=>{expect(justAdded.success).toBeFalsy()});        
test('justAdded',()=>{expect(justAdded.errorNumber).toBe(1)});        

});