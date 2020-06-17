# What is Collection Object
>> This is a **wrapper class** to wrap an **array of Objects** and provide useful methods to help managa that array of object.
------
>> It takes an array of objects and provide an interface using which we can easily manage that array.

## Why we need an Class for Array of Objects:
When ever we have an array of objects we have items organized in an indexed array but what we want is to refer to the items using their ids (just like in a database) or  sort them based on a sort order or find out the most expensive item among the list. This object solves this issue bu provinding an interface using which conversion from id to Index or from Index to id is not an issue.
In addition to that there are many methods using which we can add , delete , sort and search this array.

##How it Works
>>When we create a collection object its creates an empty array and we are provided with a number of methods to use.
>>The array of Objects is accessable throught **collection.data**.
>> We use **add** method to add new items into this collection and use **read** method to load previously created items (saved in database etc)
>> Every item has these 4 properties:
       -- id: (compulasary) for a new item the id will be assigned by the class however old items can bring their own ids however the id of an old item that is being **read** (loaded into) the collection its id should be unique.
       -- sortOrder: Every item has sort order for sorting. The collection object has **sort** and **sortDesc** methods to sirt the collection based on any numerical property.
       -- createdAt: Time of creation of the item (not must).
       -- parentId : Though the items are independent but if the user wants he can add parentIds there by converting this flat list into a tree structure.

## The API
----------------------
addNew :
---
addOld : under construction
---
delete :
---
setPropertyAll :
---
indexToId :
---
idToIndex :
---
isFirst :
---
isLast : 
---
getFirst :
---
getLast : 
---
search :
---
searchAll :
---
searchAnd :
---
searchAndAll :
---
find :
---
findChildren :
---
sort :
---
sortByProperty :
---
push :
---
length :
---

