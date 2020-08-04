import ICollectionItem from './ICollectionItem';
import CollectionItem from '../CollectionItem';
/**
 */
export default interface ICollection {
    useRandomIds: boolean;
    data: ICollectionItem[];
    add(parentId: string): ICollectionItem;
    insert(item: ICollectionItem): ICollectionItem | string;
    indexToId(index: number): string | number | string;
    idToIndex(id: string | number): number | string;
    isFirst(id: string | number): boolean | string;
    getFirst(): ICollectionItem | string;
    getLast(): ICollectionItem | string;
    isLast(id: string | number): boolean | string;
    search(prop: string, value: string | number): CollectionItem[] | boolean;
    searchFirst(prop: keyof CollectionItem, value: any): CollectionItem | boolean;
    searchAnd(prop1: string, value1: any, prop2: string, value2: any): CollectionItem[] | boolean;
    searchAndFirst(prop1: string, value1: any, prop2: string, value2: any): CollectionItem | boolean;
    find(id: string | number): ICollectionItem | boolean;
    findChildren(parentItemId: string | number): ICollectionItem[] | boolean;
    sort(property: string, overWrite: boolean): ICollectionItem[] | boolean;
    sortDesc(property: string, overWrite: boolean): ICollectionItem[] | boolean;
    push(a: CollectionItem): CollectionItem[] | boolean;
    readonly length: number;
    getPrevByIndex(item: ICollectionItem): ICollectionItem | boolean;
    setPropertyAll(property: keyof CollectionItem, value: any): CollectionItem | boolean;
    setRandom(): boolean;
    delete(itemOrId: string | CollectionItem): void;
}
//# sourceMappingURL=ICollection.d.ts.map