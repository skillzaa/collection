const setup = require('./setup.cjs');
const Tester = require('./tester.cjs');

const collection = setup();
collection.useRandomIds = false;
const tester = new Tester(collection);

describe("send id as number",()=>{
const del2 = collection.delete(2); //send number
//console.log('del2 :>> ', del2);
test(`del2`,()=>{expect(del2.errorNumber).toEqual(0)});            
test(`del2`,()=>{expect(del2.success).toBeTruthy()});            
test(`del2`,()=>{expect(del2.value.id).toBe("2")});            
});

describe("send id as string",()=>{
const del = collection.delete("5"); 
//console.log('del2 :>> ', del2);
test(`del`,()=>{expect(del.errorNumber).toEqual(0)});            
test(`del`,()=>{expect(del.success).toBeTruthy()});            
test(`del`,()=>{expect(del.value.id).toBe("5")});            
});

describe("send object",()=>{
const del = collection.delete(collection.find("6")); 
//console.log('del2 :>> ', del2);
test(`del`,()=>{expect(del.errorNumber).toEqual(0)});            
test(`del`,()=>{expect(del.success).toBeTruthy()});            
test(`del`,()=>{expect(del.value.id).toBe("6")});            
});

describe("try deleting twice",()=>{
const del = collection.delete(10);//yes we have id 10 
test(`del`,()=>{expect(del.errorNumber).toEqual(0)});            
test(`del`,()=>{expect(del.success).toBeTruthy()});            
test(`del`,()=>{expect(del.value.id).toBe("10")});            
//the del contains id 10 now and id 10 is deleted from data
//try to deleted it again
const del2 = collection.delete(del);//yes we have id 10 
// or we could also ave done collection.delete(10)

 test(`del`,()=>{expect(del2.errorNumber).toEqual(2)});            
 test(`del`,()=>{expect(del2.success).toBeFalsy()});            

});

describe("send non string object and number",()=>{
const del = collection.delete(true);
test(`del`,()=>{expect(del.errorNumber).toEqual(1)});            
test(`del`,()=>{expect(del.success).toBeFalsy()});            
});
    