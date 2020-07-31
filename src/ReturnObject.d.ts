import IReturnObject from "./interfaces/IReturnObject.js";
export default class ReturnObject implements IReturnObject {
    messages: string[];
    success: boolean;
    value: any;
    errorNumber: number;
    addMessage(msg: string): boolean;
    getMessageString(): string;
    getMessages(): string[];
}
//# sourceMappingURL=ReturnObject.d.ts.map