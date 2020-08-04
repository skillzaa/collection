import Collection from '../public/collection.js';

export default function setup(){
    const collection = new Collection();
    collection.useRandomIds = false;
    
    for (let index = 1; index < 11; index++) {
        collection.add();
    }    
    return collection;
    
}
