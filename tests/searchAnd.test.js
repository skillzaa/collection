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


});