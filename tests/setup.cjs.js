//import Collection from './src/Collection.js';
const Col = require('./collection.cjs');

function setup(){
    const collection = new Col();
    collection.useRandomIds = false;
    
    for (let index = 1; index < 11; index++) {
        collection.add();
    }    
    return collection;
    
}
module.exports = setup;