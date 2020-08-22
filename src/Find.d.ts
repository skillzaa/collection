import Search from "./Search.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";
export default class Find extends Search {
    constructor(data?: ICollectionItem[]);
    find(id: string): ReturnObject;
    findChildren(parentItemId: string | number): ReturnObject;
}
//# sourceMappingURL=Find.d.ts.map