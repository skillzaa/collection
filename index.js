import setup from './tests/setup.es.js';
const collection = setup();



const item = {
    id:33,
    sortOrder: 55
}    

const res = collection.read(item);

console.log('collection :>> ', res);
console.log('collection :>> ', collection);