/**
The return object is not only for errors, if there is an error the success flag will tell us
if (returnObject.success===true)......
 */
export default class ReturnObject {
    constructor() {
        this.messages = [];
        this.success = false; //bydefault its error
        this.data = null;
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
