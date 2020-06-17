const Collection = require('./collection.cjs');
const collection = new Collection();
//................................
collection.useRandomIds = false;
//................................
describe("collection",()=>{
for (let index = 1; index < 11; index++) {
        collection.addNew();
        const len = collection.length;
        test(`length:${index}`,()=>{expect(len).toBe(index)});        
    }    
});    
//......................................
describe("",()=>{
    collection.data.forEach(c => {
        c.setProperty("oddOrEven",Math.random() >= 0.5)
  //      console.log('object :>> ', (Math.random() >= 0.5));
    });

    collection.data.forEach(e => {
    test("tfOnly",()=>{expect(typeof e.oddOrEven).toBe("boolean")});            
    });        
//...........................
const res = collection.search("oddOrEven",true);
    
    res.forEach(e => {
    //all shd be true
    const trueOnly = (e.oddOrEven == true)? true : false;
    test("trueOnly",()=>{expect(trueOnly).toBeTruthy()});            
    });        

res.forEach(e => {
    e.setProperty("tag", "this is true");
});
    
const newArray = collection.searchAnd("oddOrEven",true,"tag","this is true");
newArray.forEach(e => {
    oddOrEven = (e.oddOrEven == true)? true:false;
    tag= (e.tag == 'this is true')? true:false;
    test("oddOrEven",()=>{expect(oddOrEven).toBeTruthy()});            
    test("tag",()=>{expect(tag).toBeTruthy()});            
});
/////////////finaly also check searchAndFirst
const andFirst = collection.searchAndFirst("oddOrEven",true,"tag","this is true");

test("tag",()=>{expect(andFirst.id).toEqual(newArray[0].id)});            


});