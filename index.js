import setup from './tests/setup.es.js';
import Collection from './public/collection.js';

const collection = setup();
collection.useRandomIds = false;    

console.log('collection :>> ', collection); 

const ret = collection.delete(2);
console.log('ret :>> ', ret);
