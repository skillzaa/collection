import setup from './tests/setup.es.js';

const collection = setup();
collection.useRandomIds = false;    
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
for (let index = 0; index < collection.data.length; index++) {
   if ( index % 2 == 0) {
      collection.data[index].setProperty("oddOrEven",true);  
   }else{
      collection.data[index].setProperty("oddOrEven",false);  
   }
}
console.log('collection :>> ', collection);


/////further 
//...........................
const res = collection.search("oddOrEven",true);
console.log("res",res);

//////////
const trueValues = collection.search("oddOrEven",true);
//--add a property "tag"
trueValues.value.forEach(e => {
    e.setProperty("tag", "this is true");
});

//--search based on true and tag
const newArray = collection.searchAnd("oddOrEven",true,"tag","this is true");
console.log('newArray :>> ', newArray);


const first = collection.searchFirst("oddOrEven",true);
 
 console.log('first :>> ', first);