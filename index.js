import Collection from './public/collection.js';
const collection = new Collection();  


collection.useRandomIds = false;
for (let index = 0; index < 11; index++) {
  //    const random = Math.floor(Math.random()*9999);
  //  collection.add(random);
    collection.add();
    
}
console.log(collection.data);