import setup from './tests/setup.es.js';
import Collection from './public/collection.js';

const collection = setup();
collection.useRandomIds = false;

const ret2 = collection.indexToId(-2);
console.log('ret2 :>> ', ret2); 
