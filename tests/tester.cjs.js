class Tester{
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

 test('testProp', () => {expect(final).toBeTruthy()});
}   
testLen(length){
let final = false;    
let storedValue;
const len = this.nodes.length;
if(len == length){
    final = true;
    }else{
        final = false;
    }
 test('testProp', () => {expect(final).toBeTruthy()});
}   
/////////////////////////////////////////////////////
}


module.exports = Tester;