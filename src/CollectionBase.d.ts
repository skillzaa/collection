import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";
export default class CollectionBase {
    protected idCounter: number;
    protected sortOrderCounter: number;
    useRandomIds: boolean;
    data: ICollectionItem[];
    constructor(data?: ICollectionItem[]);
    protected newId(): string;
    protected uuid(): string;
    protected isIdUnique(id: string | number): boolean;
    protected blankCopy(): CollectionItem;
    protected validateParentId(parentId: string): string;
    /**
     *
     * @param errorNumber
     * @param message
     * @param success
     * @param value
     * errorNumber 0 means all is well
     */
    protected response(errorNumber?: number, message?: string, success?: boolean, data?: any): ReturnObject;
    protected hasValue(value: any): boolean;
    protected checkIndexBounds(index: number): ReturnObject;
    protected shouldBeStringOrNumber(value: string | number): ReturnObject;
    protected shouldBeStringNumberOrBool(value: string | number | boolean): ReturnObject;
    push(a: ICollectionItem): ReturnObject;
    get length(): number;
    setPropertyAll(property: keyof CollectionItem, value: any): ReturnObject;
    setRandom(): ReturnObject;
    isFirst(id: string): ReturnObject;
    getFirst(): ReturnObject;
    getLast(): ReturnObject;
    isLast(id: string | number): ReturnObject;
}
//# sourceMappingURL=CollectionBase.d.ts.map