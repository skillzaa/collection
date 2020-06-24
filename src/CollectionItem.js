///this collection item is node--waoooo
export default class CollectionItem {
    //---------------------------------------------
    constructor() {
        this.parentId = null;
        this.id = null;
        this.sortOrder = 0;
        this.title = "New Node";
        this.selected = false;
        this.highlighted = false;
        this.internalGap = 2;
        this.folded = false;
        this.titleCapitalization = "first";
        this.details = "";
        this.border = 2;
        this.borderRadius = 15;
        this.padding = 8;
        this.fontSize = 22;
        this.fontColor = "#343a40";
        this.width = null; //to be filled in later
        this.height = null; //to be filled in later
        this.minWidth = 50;
        this.minHeight = 50;
        this.fontFamily = "Impact";
        this.overWriteStyle = false;
        this.x = 0;
        this.y = 0;
        this.titleX = null; //to be filled in later
        this.titleY = null; ////to be filled in later
        this.childLess = null; ////to be filled in later
        this.ccw = null; ////to be filled in later--importantay
    } //const        
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
} //class ends    
