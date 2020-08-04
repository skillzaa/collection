**insert**

- We use insert to add into collection an item with predefined id. "insert" will not add its own id rather will use the id provided by the user
- the id provided should be unique or the object will be rejected.
- if the typeof parentId is undefined the method will assign "0" as parent id
- if the typeof sortOrder is undefined the method will assign sortOrder to it.