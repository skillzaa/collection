import Collection from '../src/Collection.js';
//const Col = require('./collection.cjs');

export default function setup(){
    const collection = new Collection();
    collection.useRandomIds = false;
    
    for (let index = 1; index < 10; index++) {
        collection.add();
    }    
    return collection;
    
}
