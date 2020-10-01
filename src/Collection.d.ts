import Find from "./Find.js";
import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";
export default class Collection extends Find {
    constructor(data?: ICollectionItem[]);
    add(parentId?: string): ReturnObject;
    insert(item: ICollectionItem): ReturnObject;
    /**
     *
     * @param index
     * the only difference between getting directly the id 4and calling this function is that this function checks the index bounds
     */
    indexToId(index: number): ReturnObject;
    idToIndex(id: string): ReturnObject;
    getPrevByIndex(item: ICollectionItem): ReturnObject;
    getNextByIndex(item: CollectionItem): ReturnObject;
}
//# sourceMappingURL=Collection.d.ts.map