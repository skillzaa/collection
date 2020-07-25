import IReturnObject from "./interfaces/IReturnObject.js";

export default class ReturnObject implements IReturnObject{
messages: string[]=[];    
success:boolean=false;
value:any=null;
errorNumber:number=0;//0 means all correct no errors;

public addMessage(msg:string){   
this.messages.push(msg);
return true;
}
public getMessageString(){
return this.messages.join();
}
getMessages(){
    return this.messages;
}
/////////////////////////////////    
}