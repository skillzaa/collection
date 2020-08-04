import ICollectionItem from './interfaces/ICollectionItem.js';
export default class CollectionItem implements ICollectionItem {
    parentId: string;
    id: string;
    sortOrder: number;
    createdAt: number;
    title: string;
    selected: boolean;
    highlighted: boolean;
    internalGap: number;
    folded: boolean;
    titleCapitalization: string;
    details: string;
    border: number;
    borderRadius: number;
    padding: number;
    fontSize: number;
    fontColor: string;
    width: null;
    height: null;
    minWidth: number;
    minHeight: number;
    fontFamily: string;
    overWriteStyle: boolean;
    x: number;
    y: number;
    titleX: null;
    titleY: null;
    childLess: null;
    ccw: null;
    constructor();
    setProperty(prop: string, value: any): boolean;
    getProperty(prop: string): any;
}
//# sourceMappingURL=CollectionItem.d.ts.map