import setup from './tests/setup.es.js';
const collection = setup();



const item = {
    id:3,
    sortOrder: 55
}    

const res = collection.insert(item);

console.log('collection :>> ', res);
console.log('collection :>> ', collection);