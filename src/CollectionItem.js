export default class CollectionItem {
    constructor() {
        this.id = "";
        this.parentId = null;
        this.title = "";
        this.sortOrder = 0;
        this.createdAt = 0;
    }
    setProperty(prop, value) {
        if (typeof prop !== "string") {
            return false;
        }
        this[prop] = value;
        return true;
    }
    getProperty(prop) {
        return this[prop];
    }
}
