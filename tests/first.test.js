const Collection = require('../public/collectioncjs');
const collection = new Collection();
//................................
collection.useRandomIds = false;
//................................
describe("Check length",()=>{
for (let index = 1; index < 11; index++) {
        collection.add();
        const len = collection.length;
        test(`length:${index}`,()=>{expect(len).toBe(index)});        
    }    
});    
//......................................
describe("collection",()=>{
//--here add random     
collection.setRandom();

collection.data.forEach(d => {
    const dRandom = d.random;
    test('should have random prop',()=>{expect(dRandom).not.toBeUndefined()});        
    test('random should be number',()=>{expect(typeof dRandom).toBe("number")});        
});
 
});    

describe("sort",()=>{
//.....................noe sort
collection.sort("random");   
const firstItem = collection.getFirst();
var previousRandom = firstItem.random;
//---------------------------------------
    collection.data.forEach(c => {
    let tf = false;
    tf = (c.random >= previousRandom )? true : false;    
        test('new sort bigger than old',()=>{expect(tf).toBeTruthy()});        
        previousRandom = c.random;
        //console.log('randomRef :>> ', previousRandom);
    });
});


describe("sort DESC",()=>{
//.....................noe sort
collection.sortDesc("random");   
const firstItem = collection.getFirst();
var previousRandom = firstItem.random;
//---------------------------------------
    collection.data.forEach(c => {
    let tf = false;
    tf = (c.random <= previousRandom )? true : false;    
        test('new sort SMALLER than old',()=>{expect(tf).toBeTruthy()});        
        previousRandom = c.random;
        //console.log('randomRef :>> ', previousRandom);
    });
});

//---------------------------------------
describe("searchAll",()=>{
//---Add a property called oddOrEven and 5-% true n false    
collection.data.forEach(c => {
    c.setProperty("oddOrEven",Math.random() >= 0.5)
});
//----change all true into changes
const res = collection.search("oddOrEven", true);
///----------check if i picked correct
    res.forEach(resElm => {
        const tf = resElm.oddOrEven;
        test('just false and changed',()=>{expect(tf).toBeTruthy()});          
    });

res.forEach(resElm => {
    resElm.oddOrEven = "changed";
});

//------------------------------------------------------
//------------------------------------------------------
const first = collection.searchFirst("oddOrEven","changed");
const tf2  = (first.id === res[0].id)? true:false;
test('first.id = res[0].id',()=>{expect(tf2).toBeTruthy()});          
//------------------------------------------------------
//------------------------------------------------------
//----now all shd be just false or changed    
res.forEach(resElm => {
const res = resElm.oddOrEven;
const tf = (res === false || "changed")? true : false;   
test('just false and changed',()=>{expect(tf).toBeTruthy()});          
});
//..................................................
});

