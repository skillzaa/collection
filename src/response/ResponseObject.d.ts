export default class ResponseObject {
    messages: string[];
    success: boolean;
    returnData: boolean;
    add(msg: string): void;
}
