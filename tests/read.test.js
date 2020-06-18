const Collection = require('./collection.cjs');
const collection = new Collection();
//................................
collection.useRandomIds = false;
//................................
describe("collection",()=>{
let sortOrder=1;
for (let index = 1; index < 11; index++) {
    const item = {};
    item.id = Math.ceil(Math.random()*9999);
    item.sortOrder = sortOrder++;
    collection.read(item);
    }    

const len = collection.length;    
test('length=10',()=>{expect(len).toBe(10)});        

sortOrder=1; //again for testing

collection.data.forEach(e => {
test('id',()=>{expect(typeof e.id).toBe("number")});        
test('id',()=>{expect(e.sortOrder).toBe(sortOrder++)});

});
    
});    
//......................................
