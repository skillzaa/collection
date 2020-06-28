export default class ReturnObject {
    constructor() {
        this.message = [];
        this.success = false;
        this.value = null;
        this.errorNumber = 0;
        /////////////////////////////////    
    }
    addMessage(msg = "") {
        this.message.push(msg);
    }
}
