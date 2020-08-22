import CollectionBase from "./CollectionBase.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";
export default class Delete extends CollectionBase {
    constructor(data?: ICollectionItem[]);
    delete(itemOrId: string | ICollectionItem): ReturnObject;
}
//# sourceMappingURL=Delete.d.ts.map