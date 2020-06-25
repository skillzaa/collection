export default class ResponseObject{

public messages:string[]=[];
public success:boolean=false;
public returnData:boolean=false;

add(msg:string){
this.messages.push(msg);
}
///--------------------------------    
}