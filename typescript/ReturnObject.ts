import IReturnObject from "./interfaces/IReturnObject.js";
/**
The return object is not only for errors, if there is an error the success flag will tell us
if (returnObject.success===true)...... 
 */
export default class ReturnObject implements IReturnObject{
messages: string[]=[];    
success:boolean=false;//bydefault its error
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