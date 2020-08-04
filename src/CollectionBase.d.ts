import CollectionItem from "./CollectionItem.js";
import ICollectionItem from "./interfaces/ICollectionItem.js";
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
}
//# sourceMappingURL=CollectionBase.d.ts.map