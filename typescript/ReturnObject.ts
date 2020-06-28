export default class ReturnObject{
message: string[]=[];    
success:boolean=false;
value:any=null;
errorNumber:number=0;

addMessage(msg:string=""){
this.message.push(msg);
}
/////////////////////////////////    
}