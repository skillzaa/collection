const setup = require('./setup.cjs');
const collection = setup();
collection.useRandomIds = false;
//Add odd and events based on index number
for (let index = 0; index < collection.data.length; index++) {
    if ( index % 2 == 0) {
        collection.data[index].setProperty("oddOrEven",true);  
    }else{
        collection.data[index].setProperty("oddOrEven",false);  
    }
}

describe("",()=>{
//---check oddOrEven prop it has to be a boolean
collection.data.forEach(e => {
test("tfOnly",()=>{expect(typeof e.oddOrEven).toBe("boolean")});            
});        

/////further 
//---just pick the true items
 const res = collection.search("oddOrEven",true);
 test("return object",()=>{expect(res.success).toBeTruthy()});            
 test("this fn also send number of results",()=>{expect(res.numberOfResults).toBe(5)});   
 res.data.forEach(e => {
    test("tfOnly",()=>{expect(e.oddOrEven).toBeTruthy()});            
    });        
 
//--get only false
 const res2 = collection.search("oddOrEven",false);
 test("trueOnly",()=>{expect(res2.success).toBeTruthy()});            
 test("trueOnly",()=>{expect(res2.numberOfResults).toBe(5)});    
 res2.data.forEach(e => {
    test("tfOnly",()=>{expect(e.oddOrEven).toBeFalsy()});            
    });        
 
});


describe("get all false and add a tag proterty",()=>{
//---get all false vlaues
const trueValues = collection.search("oddOrEven",false);
//--add a property "tag"
trueValues.data.forEach(e => {
    e.setProperty("tag", "this is false");
});

//--search based on true and tag --- now search based on 2 prop
const newArray = collection.searchAnd("oddOrEven",false,"tag","this is false");
//----------------------------

newArray.data.forEach(e => {
    // oddOrEven = (e.oddOrEven == false)? true:false;//give true if value = false
    // tag= (e.tag == 'this is false')? true:false;
    test("oddOrEven",()=>{expect(e.oddOrEven).toBeFalsy()});            
    test("tag",()=>{expect(e.tag).toBe('this is false')});            
});

});


describe("",()=>{

//---get all true vlaues
const trueValues = collection.search("oddOrEven",true);
//--add a property "tag"
trueValues.data.forEach(e => {
    e.setProperty("tag", "this is true");
});

//--search based on true and tag
const newArray = collection.searchAnd("oddOrEven",true,"tag","this is true");
//----------------------------

newArray.data.forEach(e => {
    oddOrEven = (e.oddOrEven == true)? true:false;
    tag= (e.tag == 'this is true')? true:false;
    test("oddOrEven",()=>{expect(oddOrEven).toBeTruthy()});            
    test("tag",()=>{expect(tag).toBeTruthy()});            
});

});



describe("no search found",()=>{
const result  = collection.search("oddOrEven","wrong value");
test("",()=>{expect(result.errorNumber).toBe(2)});            
});

describe("search first",()=>{

 const first = collection.searchFirst("oddOrEven",true);
 test("",()=>{expect(first.errorNumber).toBe(0)})
 ;            
});