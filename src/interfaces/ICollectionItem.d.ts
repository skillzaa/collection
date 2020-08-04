export default interface ICollectionItem {
    id: string;
    parentId: string;
    sortOrder: number;
    createdAt: number;
    setProperty(prop: string, value: any): boolean;
    getProperty(prop: string): any;
}
//# sourceMappingURL=ICollectionItem.d.ts.map