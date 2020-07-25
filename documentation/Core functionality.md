
##### Every item has these 4 properties:
- id: (compulasary) for a new item the id will be assigned by the class however old items can bring their own ids however the id of an old item that is being **read** (loaded into) the collection its id should be unique.
- sortOrder: Every item has sort order for sorting. The collection object has **sort** and **sortDesc** methods to sirt the collection based on any numerical property.
- createdAt: Time of creation of the item (not must).
- parentId : Though the items are independent but if the user wants he can add parentIds there by converting this flat list into a tree structure.

## The API
----------------------
### Global Varialbes
- useRandomIds:boolean : This switch between using numberical sequential ids (mean 1,2,3...) or unique string based ids. For testing always make useRandomIds to false and for production code turn it true.
- data:ICollectionItem[] : This is the main data (array of objects) that this class is managing. This data is also directly accessable.

## Methods
add(parentId?: string | number): CollectionItem;
---
insert(item: ICollectionItem): ICollectionItem | false;
---
indexToId(index: number): number | string;
---
idToIndex(id: string | number): number | null;
---
isFirst(id: string | number): boolean;
---
getFirst(): ICollectionItem;
---
getLast(): ICollectionItem;
---
isLast(id: string | number): boolean;
---
searchFirst(prop: keyof CollectionItem, value: any): CollectionItem | boolean;
---
search(prop?: string, value?: string | number): CollectionItem[] | [];
---
searchAndFirst(prop1: string, value1: any, prop2: string, value2: any): boolean | CollectionItem;
---
searchAnd(prop1: string, value1: any, prop2: string, value2: any): CollectionItem[] | [];
---
find(id: string | number): boolean | ICollectionItem;
---
findChildren(parentItemId: string | number): ICollectionItem[] | [];
---
sort(property?: string, overWrite?: boolean): ICollectionItem[];
---
sortDesc(property: string, overWrite?: boolean): ICollectionItem[];
---
push(a: ICollectionItem): boolean;
---
get length(): number;
---
getPrevByIndex(item: ICollectionItem): ICollectionItem | boolean;
---
getNextByIndex(item: CollectionItem): CollectionItem | boolean;
---
setPropertyAll(property: keyof CollectionItem, value: any): boolean;
---
setRandom(): void;
---
delete(itemOrId: number | string | CollectionItem): void;
---
    
    