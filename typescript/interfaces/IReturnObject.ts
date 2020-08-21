/**
The return object is not only for errors, if there is an error the success flag will tell us
if (returnObject.success===true)...... 
 */
export default interface IReturnObject{
messages: string[];    
success:boolean;
data:any;
errorNumber:number;

addMessage(msg:string):boolean;
getMessageString():string;
getMessages():string[];
/////////////////////////////////    
}