import setup from './tests/setup.es.js';
import Collection from './public/collection.js';

const collection = new Collection();  

const ret = collection.insert(); 

const item = {
    id: 555,
    parentId:"kgtf",
    sortOrder : 999,
    createdAt : ""
    };


const ret2 = collection.insert(item); 
const item2 = { //
    id: 555,
    parentId:"kgtf",
    sortOrder : 999,
    createdAt : ""
    };

const ret3 = collection.insert(item2); 
 console.log("ret3",ret3);
 console.log(collection.data);