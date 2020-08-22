import CollectionBase from "./CollectionBase.js";
import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";
/**
 *-This is a class Wrapped around an Array of Objects, it add into each object some fileds like id,sortOrder, parentId etc.
 */
export default class Collection extends CollectionBase {
    useRandomIds: boolean;
    data: ICollectionItem[];
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
    isFirst(id: string): ReturnObject;
    getFirst(): ReturnObject;
    getLast(): ReturnObject;
    isLast(id: string | number): ReturnObject;
    /**Just send back the first one  */
    searchFirst(prop?: string, value?: string | number): ReturnObject;
    search(prop?: string, value?: string | number): ReturnObject;
    searchAnd(prop1: string, value1: string | number, prop2: string, value2: string | number): ReturnObject;
    searchOr(prop1: string, value1: string | number, prop2: string, value2: string | number): ReturnObject;
    find(id: string): ReturnObject;
    findChildren(parentItemId: string | number): ReturnObject;
    sort(property?: string, overWrite?: boolean): ReturnObject;
    sortDesc(property: string, overWrite?: boolean): ReturnObject;
    push(a: ICollectionItem): ReturnObject;
    get length(): number;
    getPrevByIndex(item: ICollectionItem): ReturnObject;
    getNextByIndex(item: CollectionItem): ReturnObject;
    setPropertyAll(property: keyof CollectionItem, value: any): ReturnObject;
    setRandom(): ReturnObject;
    /**
     * @param itemOrId
     * the delete function deletes by ID
     * * To Delete
     * -if the itemOrId is not string ie id get the id out of it
     * -the fn returns only ReturnOBject
     */
    delete(itemOrId: string | ICollectionItem): ReturnObject;
    protected shouldBeStringOrNumber(value: string | number): ReturnObject;
    protected shouldBeStringNumberOrBool(value: string | number | boolean): ReturnObject;
}
//# sourceMappingURL=Collection.d.ts.map