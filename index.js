import Collection from './src/collection/Collection.js';

const collection = new Collection();
collection.useRandomIds = false;
//--------add 10 items-----------------
//--st from 1 to 1 less than 101 => 100
for (let index = 1; index < 11; index++) {
    collection.addNew();
    }    



const eightChildren = collection.findChildren(8);

console.log('collection :>> ', eightChildren);
