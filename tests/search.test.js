const setup = require('./setup.cjs');
const Tester = require('./tester.cjs');

const collection = setup();
collection.useRandomIds = false;
const tester = new Tester(collection);

//.......................
//Add odd and events based on index number
for (let index = 0; index < collection.data.length; index++) {
    if ( index % 2 == 0) {
        collection.data[index].setProperty("oddOrEven",true);  
    }else{
        collection.data[index].setProperty("oddOrEven",false);  
    }
}
//.......................

describe("",()=>{

//---check oddOrEven prop it has to be a boolean
collection.data.forEach(e => {
test("tfOnly",()=>{expect(typeof e.oddOrEven).toBe("boolean")});            
});        

/////further 
//...........................
 const res = collection.search("oddOrEven",true);
// console.log("res",res);

 test("trueOnly",()=>{expect(res.success).toBeTruthy()});            
 test("trueOnly",()=>{expect(res.numberOfResults).toBe(5)});   
 res.value.forEach(e => {
    test("tfOnly",()=>{expect(e.oddOrEven).toBeTruthy()});            
    });        
 
//...........................
 const res2 = collection.search("oddOrEven",false);
// console.log("res",res);

 test("trueOnly",()=>{expect(res2.success).toBeTruthy()});            
 test("trueOnly",()=>{expect(res2.numberOfResults).toBe(5)});    
 res2.value.forEach(e => {
    test("tfOnly",()=>{expect(e.oddOrEven).toBeFalsy()});            
    });        
 
});




describe("",()=>{
//////////////////////////////////////////
//////////////////////////////////////////
//---get all true vlaues
const trueValues = collection.search("oddOrEven",true);
//--add a property "tag"
trueValues.value.forEach(e => {
    e.setProperty("tag", "this is true");
});

//--search based on true and tag
const newArray = collection.searchAnd("oddOrEven",true,"tag","this is true");
//----------------------------

newArray.value.forEach(e => {
    oddOrEven = (e.oddOrEven == true)? true:false;
    tag= (e.tag == 'this is true')? true:false;
    test("oddOrEven",()=>{expect(oddOrEven).toBeTruthy()});            
    test("tag",()=>{expect(tag).toBeTruthy()});            
});
// /////////////finaly also check searchAndFirst
// const andFirst = collection.searchAndFirst("oddOrEven",true,"tag","this is true");

// test("tag",()=>{expect(andFirst.id).toEqual(newArray[0].id)});            

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////
});