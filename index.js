import setup from './tests/setup.es.js';

const collection = new setup();  
//const ret  = collection.insert({"id":"2221"});
const ret  = collection.insert({"id":"2221"});

 console.log(ret);
 console.log(collection.data);