import setup from './tests/setup.es.js';

const collection = setup();
collection.useRandomIds = false;    

for (let idx = 0; idx < collection.length; idx++) {
   const theId = collection.data[idx].id;

   const ret = collection.indexToId(idx);
   console.log("ret",ret);
   //const theReturnedId= ret.value.id;
   
}     
