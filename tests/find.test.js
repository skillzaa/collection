const Collection = require('./collection.cjs');
const collection = new Collection();
//................................
collection.useRandomIds = false;
//................................
describe("collection",()=>{
for (let index = 1; index < 11; index++) {
        collection.add();
        const len = collection.length;
        test(`length:${index}`,()=>{expect(len).toBe(index)});        
    }    
});    
//......................................
describe("find",()=>{
for (let index = 1; index < 11; index++) {
//we can check all except 0 since there i no id=0    
    const itemFound = collection.find(index);
    const itemIndex = collection.idToIndex(itemFound.id);
    const itemByIndex = collection.data[itemIndex];

    test(`find: ${index}`,()=>{expect(itemFound.id).toEqual(itemByIndex.id)});        
}    
});

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