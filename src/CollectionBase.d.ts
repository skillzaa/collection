import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
import ReturnObject from "./ReturnObject.js";
/**
 *-This is a class Wrapped around an Array of Objects, it add into each object some fileds like id,sortOrder, parentId etc.
 */
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
}
//# sourceMappingURL=CollectionBase.d.ts.map