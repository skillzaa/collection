export default class ResponseObject {
    constructor() {
        this.messages = [];
        this.success = false;
        this.returnData = false;
        ///--------------------------------    
    }
    add(msg) {
        this.messages.push(msg);
    }
}
