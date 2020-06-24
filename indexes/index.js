import Collection from './src/Collection.js';

const collection = new Collection();
collection.useRandomIds = false;
//--------add 10 items-----------------
//--st from 1 to 1 less than 101 => 100
let sortOrder=1;
for (let index = 1; index < 11; index++) {

    const item = {};
    item.id = Math.ceil(Math.random()*9999);
    item.sortOrder = sortOrder++;
    collection.read(item);
    }    

console.log('collection :>> ', collection);
