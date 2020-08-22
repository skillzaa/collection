import Delete from "./Delete.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";
export default class Search extends Delete {
    constructor(data?: ICollectionItem[]);
    searchFirst(prop?: string, value?: string | number): ReturnObject;
    search(prop?: string, value?: string | number): ReturnObject;
    searchAnd(prop1: string, value1: string | number, prop2: string, value2: string | number): ReturnObject;
    searchOr(prop1: string, value1: string | number, prop2: string, value2: string | number): ReturnObject;
}
//# sourceMappingURL=Search.d.ts.map