import CollectionItem from "./CollectionItem.js";
import ICollection from "./ICollection.js";
import ICollectionItem from "./ICollectionItem.js";
/**
 *-This is a class Wrapped around an Array of Objects, it add into each object some fileds like id,sortOrder, parentId etc.
 */
export default class Collection implements ICollection {
    useRandomIds: boolean;
    debugMode: boolean;
    data: ICollectionItem[];
    private idCounter;
    private sortOrderCounter;
    constructor(data?: ICollectionItem[]);
    /**
     * This takes just the parentId and assigns that to the parentId prop. It gives its own id and incresement the id. If we do not want the id to incremenet we shd use read()
     * it should always return a collection Item INTERFACE and never an error.
     * @param parentId
     */
    add(parentId?: string | number): CollectionItem;
    insert(item: ICollectionItem): ICollectionItem | false;
    indexToId(index: number): number | string;
    idToIndex(id: string | number): number | null;
    isFirst(id: string | number): boolean;
    getFirst(): ICollectionItem;
    getLast(): ICollectionItem;
    isLast(id: string | number): boolean;
    /**Just send back the first one  */
    searchFirst(prop: keyof CollectionItem, value: any): CollectionItem | boolean;
    search(prop?: string, value?: string | number): CollectionItem[] | [];
    searchAndFirst(prop1: string, value1: any, prop2: string, value2: any): boolean | CollectionItem;
    searchAnd(prop1: string, value1: any, prop2: string, value2: any): CollectionItem[] | [];
    find(id: string | number): boolean | ICollectionItem;
    findChildren(parentItemId: string | number): ICollectionItem[] | [];
    sort(property?: string, overWrite?: boolean): ICollectionItem[];
    sortDesc(property: string, overWrite?: boolean): ICollectionItem[];
    push(a: ICollectionItem): boolean;
    get length(): number;
    getPrevByIndex(item: ICollectionItem): ICollectionItem | boolean;
    getNextByIndex(item: CollectionItem): CollectionItem | boolean;
    setPropertyAll(property: keyof CollectionItem, value: any): boolean;
    setRandom(): void;
    delete(itemOrId: number | string | CollectionItem): void;
    protected newId(): string | number;
    private uuid;
    protected isIdUnique(id: string | number): boolean;
    protected blankCopy(): CollectionItem;
}
