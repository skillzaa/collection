
    <h1>The API</h1>
    <h2>Public Variables</h2>
        - useRandomIds: boolean;
        - data: ICollectionItem[];

<h2>Methods</h2>

- <a href="./add.html">add</a>(parentId?:string): ICollectionItem;
<!-- <p>some text in between</p> -->
- insert(item: ICollectionItem): ICollectionItem | IReturnObject; 
- indexToId(index: number): number | string | IReturnObject;
- idToIndex(id: string | number): number | ReturnObject;
- isFirst(id: string | number): boolean;
- getFirst(): ICollectionItem;
- getLast(): ICollectionItem;
- isLast(id: string | number): boolean;

- searchFirst(prop: keyof CollectionItem, value: any): CollectionItem | boolean;
- search(prop?: string, value?: string | number): CollectionItem[] | [];
- searchAndFirst(prop1: string, value1: any, prop2: string, value2: any): boolean | CollectionItem;
- searchAnd(prop1: string, value1: any, prop2: string, value2: any): CollectionItem[] | [];
- find(id: string | number): boolean | ICollectionItem;
- findChildren(parentItemId: string | number): ICollectionItem[] | [];
- sort(property?: string, overWrite?: boolean): ICollectionItem[];
- sortDesc(property: string, overWrite?: boolean): ICollectionItem[];

- push(a: ICollectionItem): boolean;
get length(): number;

- getPrevByIndex(item: ICollectionItem): ICollectionItem | boolean;
- getNextByIndex(item: CollectionItem): CollectionItem | boolean;
- setPropertyAll(property: keyof CollectionItem, value: any): boolean;
- setRandom(): void;

- delete(itemOrId: number | string | CollectionItem): void;

</ol>

</body>
</html>