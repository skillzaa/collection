import setup from './tests/setup.es.js';

const collection = setup();
collection.useRandomIds = false;    

console.log('collection :>> ', collection);
const del = collection.delete(2);
console.log('del :>> ', del);

