
**Add

    This functions adds a new item into the collection. By new collection we mean that a new id is created for it. If you want to insert an item with a predefined id use "insert"
    The only argument it takes it an optional parentId. The id of the item or its parent id both can just be of type string.    
    if no parent id is provided or the parent id provided is not of type string or incase of any other problem the parentId will be set as 0
    There can never be an item with id=0. The ids are string based. Iincase of useRandomIds=false we use "1", "2", "3" which is still string.
    parent id = 0 means orphan or has no parent.
    Along with parent id other properties inserted are sortOrder and createdAt.
</ul>
