const setup = require('./setup.cjs');
const collection = setup();
//................................
collection.useRandomIds = false;

describe("find each item by id using FIND",()=>{
for (let index = 1; index < 11; index++) {
//we can check all except 0 since there i no id=0    
    const itemFound = collection.find(index);
    const itemFoundIndex = collection.idToIndex(itemFound.id);
    const itemByIndex = collection.data[itemFoundIndex];
console.log("itemByIndex",itemByIndex);
console.log("index",index);
    test(`find: ${index}`,()=>{expect(itemFound.id).toEqual(itemByIndex.id)});        
}    
});
/*
describe("findChildren",()=>{
    const ch1 = collection.find(1);
    ch1.parentId = 8;
    const ch2 = collection.find(2);
    ch2.parentId = 8;
    const ch3 = collection.find(3);
    ch3.parentId = 8;
    const ch4 = collection.find(4);
    ch4.parentId = 8;
const eightChildren = collection.findChildren(8);
test('Length =4',()=>{expect(eightChildren.length).toEqual(4)});           

eightChildren.forEach(ec => {
test(`children:`,()=>{expect(ec.parentId).toEqual(8)});           
});

});

describe("get property",()=>{
    collection.data.forEach(c => {
        const s = c.getProperty("sortOrder")
        test('SortORder',()=>{expect(typeof s).toBe("number")});                   
    });         

});

*/