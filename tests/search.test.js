const setup = require('./setup.cjs');
const Tester = require('./tester.cjs');

const collection = setup();
collection.useRandomIds = false;
const tester = new Tester(collection);

describe("",()=>{
collection.data.forEach(c => {
    c.setProperty("oddOrEven",Math.random() >= 0.5)
});

collection.data.forEach(e => {
test("tfOnly",()=>{expect(typeof e.oddOrEven).toBe("boolean")});            
});        

/////further 
//...........................
 const res = collection.search("oddOrEven",true);
// console.log("res",res);

// test("trueOnly",()=>{expect(res.success).toBeTruthy()});            
//     res.value.forEach(e => {
//         //all shd be true
//         const trueOnly = (e.oddOrEven == true)? true : false;
//         test("trueOnly",()=>{expect(trueOnly).toBeTruthy()});            
//     });        
//----------------------------
// res.forEach(e => {
//     e.setProperty("tag", "this is true");
// });
    
// const newArray = collection.searchAnd("oddOrEven",true,"tag","this is true");
//----------------------------

// newArray.value.forEach(e => {
//     oddOrEven = (e.oddOrEven == true)? true:false;
//     tag= (e.tag == 'this is true')? true:false;
//     test("oddOrEven",()=>{expect(oddOrEven).toBeTruthy()});            
//     test("tag",()=>{expect(tag).toBeTruthy()});            
// });
// /////////////finaly also check searchAndFirst
// const andFirst = collection.searchAndFirst("oddOrEven",true,"tag","this is true");

// test("tag",()=>{expect(andFirst.id).toEqual(newArray[0].id)});            

});