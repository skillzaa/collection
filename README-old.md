# What is Collection Object
>> This is a **wrapper class** to wrap an **array of Objects** and provide useful methods to help managa that array of object.
------
>> It takes an array of objects and provide an interface using which we can easily manage that array.

## Why we need an Class for Array of Objects:
- When ever we have an array of objects we have items organized in an indexed array but what we want is to refer to the items using their ids (just like in a database) or  sort them based on a sort order or find out the most expensive item among the list.
- This object solves this issue by provinding an interface using which conversion from id to Index or from Index to id is not an issue.
- In addition to that there are many methods using which we can add , delete , sort and search this array.

## How it Works
##### When we create a collection object its creates an empty array and we are provided with a number of methods to use.
##### The array of Objects is accessable throught **collection.data**.
##### We use **add** method to add new items into this collection and use **read** method to load previously created items (saved in database etc)
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
    
    