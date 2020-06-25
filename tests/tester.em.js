export default class Tester{
constructor(nodes=""){
this.nodes = nodes;    
}
testProp(id,prop,requiredValue){
let final = false;    
let storedValue;
const item = this.nodes.find(id);
if(item !== false){
    storedValue = item[prop];
    if (storedValue == requiredValue)
    {
        final=true;
    }
}

const res = `id:${id}, Prop:${prop},Required Val:${requiredValue}, Obtained Val: ${storedValue}`

console.log('Result--:>> ', res);

//test('testProp', () => {expect(final).toBeTruthy()});
}   
/////////////////////////////////////////////////////
}




