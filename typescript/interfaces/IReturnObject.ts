export default interface IReturnObject{
messages: string[];    
success:boolean;
value:any;
errorNumber:number;

addMessage(msg:string):boolean;
getMessageString():string;
getMessages():string[];
/////////////////////////////////    
}