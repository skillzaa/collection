import Delete from "./Delete.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";
export default class Sort extends Delete {
    constructor(data?: ICollectionItem[]);
    sort(property?: string, overWrite?: boolean): ReturnObject;
    sortDesc(property: string, overWrite?: boolean): ReturnObject;
}
//# sourceMappingURL=Sort.d.ts.map