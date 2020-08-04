
*****    The API
    ***Public Variables
        - useRandomIds: boolean;
        - data: ICollectionItem[];

***Methods

- <a href="./add.md">add</a>(parentId?:string): ICollectionItem;

- <a href="./insert.md">insert</a> insert(item: ICollectionItem): ICollectionItem | IReturnObject; 
  <a href="./insert.md">insert</a>
- indexToId(index: number): number | string | IReturnObject;
  <a href="./insert.md">insert</a>
- idToIndex(id: string | number): number | ReturnObject;
  <a href="./insert.md">insert</a>
- isFirst(id: string | number): boolean;
  <a href="./insert.md">insert</a>
- getFirst(): ICollectionItem;
  <a href="./insert.md">insert</a>
- getLast(): ICollectionItem;
  <a href="./insert.md">insert</a>
- isLast(id: string | number): boolean;
  <a href="./insert.md">insert</a>
- searchFirst(prop: keyof CollectionItem, value: any): CollectionItem | boolean;
  <a href="./insert.md">insert</a>
- search(prop?: string, value?: string | number): CollectionItem[] | [];
  <a href="./insert.md">insert</a>
- searchAndFirst(prop1: string, value1: any, prop2: string, value2: any): boolean | CollectionItem;
  <a href="./insert.md">insert</a>
- searchAnd(prop1: string, value1: any, prop2: string, value2: any): CollectionItem[] | [];
  <a href="./insert.md">insert</a>
- find(id: string | number): boolean | ICollectionItem;
  <a href="./insert.md">insert</a>
- findChildren(parentItemId: string | number): ICollectionItem[] | [];
  <a href="./insert.md">insert</a>
- sort(property?: string, overWrite?: boolean): ICollectionItem[];
  <a href="./insert.md">insert</a>
- sortDesc(property: string, overWrite?: boolean): ICollectionItem[];
  <a href="./insert.md">insert</a>

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