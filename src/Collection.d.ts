import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ICollection from "./interfaces/ICollection.js";
import ReturnObject from "./ReturnObject.js";
import IReturnObject from "./interfaces/IReturnObject.js";
/**
 *-This is a class Wrapped around an Array of Objects, it add into each object some fileds like id,sortOrder, parentId etc.
 */
export default class Collection implements ICollection {
    useRandomIds: boolean;
    data: ICollectionItem[];
    private idCounter;
    private sortOrderCounter;
    constructor(data?: ICollectionItem[]);
    /**
     * This takes just the parentId and assigns that to the parentId prop. It gives its own id and incresement the id. If we do not want the id to incremenet we shd use read()
     * it should always return a collection Item INTERFACE and never an error.
     * @param parentId
     */
    add(parentId?: string): ICollectionItem;
    insert(item: ICollectionItem): ICollectionItem | IReturnObject;
    indexToId(index: number): number | string | IReturnObject;
    idToIndex(id: string | number): number | ReturnObject;
    isFirst(id: string | number): boolean;
    getFirst(): ICollectionItem;
    getLast(): ICollectionItem;
    isLast(id: string | number): boolean;
    /**Just send back the first one  */
    searchFirst(prop: keyof CollectionItem, value: any): CollectionItem | boolean;
    search(prop?: string, value?: string | number): CollectionItem[] | [];
    searchAndFirst(prop1: string, value1: any, prop2: string, value2: any): boolean | CollectionItem;
    searchAnd(prop1: string, value1: string | number, prop2: string, value2: string | number): CollectionItem[];
    find(id: string | number): boolean | ICollectionItem;
    findChildren(parentItemId: string | number): ICollectionItem[] | [];
    sort(property?: string, overWrite?: boolean): ICollectionItem[];
    sortDesc(property: string, overWrite?: boolean): ICollectionItem[];
    push(a: ICollectionItem): boolean;
    get length(): number;
    getPrevByIndex(item: ICollectionItem): ICollectionItem | boolean;
    getNextByIndex(item: CollectionItem): CollectionItem | boolean;
    setPropertyAll(property: keyof CollectionItem, value: any): boolean;
    setRandom(): boolean;
    delete(itemOrId: number | string | CollectionItem): void;
    protected newId(): string;
    protected uuid(): string;
    protected isIdUnique(id: string | number): boolean;
    protected blankCopy(): CollectionItem;
}
//# sourceMappingURL=Collection.d.ts.map