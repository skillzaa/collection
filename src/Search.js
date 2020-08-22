"use strict";
import Delete from "./Delete.js";
export default class Search extends Delete {
    constructor(data = []) {
        super(data);
    }
    searchFirst(prop = "id", value = 0) {
        //only string or number vlaues are allowed no object vlaues
        if (this.shouldBeStringNumberOrBool(value).success !== true) {
            return this.response(1, "The value argument can just contain number or string values");
        }
        //--------------------------------------- 
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx][prop] == value) {
                return this.response(0, "Here is the first result found", true, this.data[idx]);
            }
        }
        return this.response(2, "No maching result found");
    } //
    search(prop = "id", value = 0) {
        //only string or number vlaues are allowed no object vlaues
        if (this.shouldBeStringNumberOrBool(value).success !== true) {
            return this.response(1, "The value argument can just contain number or string values");
        }
        const results = [];
        //--------------------------------------- 
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx][prop] == value) {
                results.push(this.data[idx]);
            }
        }
        const numberOfResults = results.length;
        if (numberOfResults === 0) {
            return this.response(2, "No maching result found");
        }
        else {
            const ret = this.response(0, `Here are ${results.length}  results found`, true, results);
            ret.numberOfResults = numberOfResults;
            return ret;
        }
    } //
    searchAnd(prop1, value1, prop2, value2) {
        if (this.shouldBeStringNumberOrBool(value1).success !== true) {
            return this.response(1, "The value argument can just contain number or string values");
        }
        if (this.shouldBeStringNumberOrBool(value2).success !== true) {
            return this.response(1, "The value argument can just contain number or string values");
        }
        const final = [];
        for (let idx = 0; idx < this.data.length; idx++) {
            const e = this.data[idx];
            if ((e[String(prop1)] == value1) && (e[String(prop2)] == value2)) {
                final.push(e);
            }
        }
        const numberOfSearches = final.length;
        return this.response(0, `There are a total of ${numberOfSearches} searches found`, true, final);
    } //   
    searchOr(prop1, value1, prop2, value2) {
        if (this.shouldBeStringNumberOrBool(value1).success !== true) {
            return this.response(1, "The value argument can just contain number string or boolean values");
        }
        if (this.shouldBeStringNumberOrBool(value2).success !== true) {
            return this.response(1, "The value argument can just contain number string or boolean values");
        }
        const final = [];
        for (let idx = 0; idx < this.data.length; idx++) {
            const e = this.data[idx];
            if ((e[String(prop1)] == value1) || (e[String(prop2)] == value2)) {
                final.push(e);
            }
        }
        const numberOfSearches = final.length;
        return this.response(0, `There are a total of ${numberOfSearches} searches found`, true, final);
    } //   
} //class end
