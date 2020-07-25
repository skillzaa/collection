export default class ReturnObject {
    constructor() {
        this.messages = [];
        this.success = false;
        this.value = null;
        this.errorNumber = 0; //0 means all correct no errors;
        /////////////////////////////////    
    }
    addMessage(msg) {
        this.messages.push(msg);
        return true;
    }
    getMessageString() {
        return this.messages.join();
    }
    getMessages() {
        return this.messages;
    }
}
