import CollectionBase from "./CollectionBase.js";
import ICollection from "./interfaces/ICollection.js";
import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";
/**
 *-This is a class Wrapped around an Array of Objects, it add into each object some fileds like id,sortOrder, parentId etc.
 */
export default class Collection extends CollectionBase implements ICollection {
    useRandomIds: boolean;
    data: ICollectionItem[];
    constructor(data?: ICollectionItem[]);
    add(parentId?: string): ICollectionItem;
    insert(item: ICollectionItem): ICollectionItem | ReturnObject;
    indexToId(index: number): string | ReturnObject;
    idToIndex(id: string): number | ReturnObject;
    isFirst(id: string): boolean;
    getFirst(): ICollectionItem;
    getLast(): ICollectionItem;
    isLast(id: string | number): boolean;
    /**Just send back the first one  */
    searchFirst(prop: keyof CollectionItem, value: string | number): CollectionItem | boolean;
    search(prop?: string, value?: string | number): CollectionItem[] | [];
    searchAndFirst(prop1: string, value1: any, prop2: string, value2: any): boolean | CollectionItem;
    searchAnd(prop1: string, value1: string | number, prop2: string, value2: string | number): CollectionItem[];
    find(id: string): ReturnObject;
    findChildren(parentItemId: string | number): ICollectionItem[] | [];
    sort(property?: string, overWrite?: boolean): ICollectionItem[];
    sortDesc(property: string, overWrite?: boolean): ICollectionItem[];
    push(a: ICollectionItem): boolean;
    get length(): number;
    getPrevByIndex(item: ICollectionItem): ICollectionItem | boolean;
    getNextByIndex(item: CollectionItem): CollectionItem | boolean;
    setPropertyAll(property: keyof CollectionItem, value: any): boolean;
    setRandom(): boolean;
    delete(itemOrId: string | ICollectionItem): ReturnObject;
}
//# sourceMappingURL=Collection.d.ts.map