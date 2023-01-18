"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenObject = exports.forEachObject = exports.filterObject = exports.every = exports.some = exports.findEntry = exports.findValue = exports.findKey = exports.sliceObject = exports.toPairs = exports.fromPairs = exports.count = exports.isEmpty = exports.isEqual = exports.isSubset = exports.intersection = exports.difference = exports.mergeWith = exports.mergeDeepWith = exports.mergeDeep = exports.pickTruthy = exports.pickFalsy = exports.pickDefined = exports.invert = exports.keyBy = exports.mapValues = exports.mapKeys = exports.omitBy = exports.pickBy = exports.pluck = exports.maxBy = exports.minBy = exports.averageBy = exports.sumBy = exports.countBy = exports.groupBy = exports.transformKey = exports.transformKeys = exports.cleanObject = exports.defaults = exports.extractProperty = exports.extractProperties = exports.transformProperty = exports.transformProperties = exports.renameProperty = exports.renameProperties = exports.removePath = exports.setPathValue = exports.getPathValue = exports.deepClone = void 0;
exports.setObjectPrototype = exports.setNested = exports.removeObjectCircularReferences = exports.getObjectValues = exports.getObjectSize = exports.getObjectPrototype = exports.getObjectPaths = exports.getObjectNonInherited = exports.getObjectMismatches = exports.getObjectMatching = exports.getObjectLeaves = exports.getObjectKeys = exports.getObjectInherited = exports.getObjectEntries = exports.getObjectDifference = exports.getObjectChanges = exports.getObjectBranch = exports.getNonEnumValues = exports.getNonEnumKeys = exports.getNested = exports.getEnumValues = exports.getEnumKeys = void 0;
const helpers_1 = require("./helpers");
function deepClone(obj) {
    let copy;
    // Handle the 3 simple types, and null or undefined
    if (obj === null || typeof obj !== 'object')
        return obj;
    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }
    // Handle Function
    if (typeof obj === 'function') {
        copy = obj.bind({});
        return copy;
    }
    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (let i = 0, len = obj.length; i < len; i++) {
            copy[i] = deepClone(obj[i]);
        }
        return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (let attr in obj) {
            if (obj.hasOwnProperty(attr))
                copy[attr] = deepClone(obj[attr]);
        }
        return copy;
    }
}
exports.deepClone = deepClone;
function getPathValue(obj, path) {
    if (!obj) {
        return undefined;
    }
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length; i++) {
        if (!current.hasOwnProperty(parts[i])) {
            return undefined;
        }
        current = current[parts[i]];
    }
    return current;
}
exports.getPathValue = getPathValue;
function setPathValue(obj, path, value) {
    if (!obj)
        return undefined;
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        if (!current.hasOwnProperty(parts[i])) {
            current[parts[i]] = {};
        }
        current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;
    return obj;
}
exports.setPathValue = setPathValue;
function removePath(obj, path) {
    if (!obj) {
        return undefined;
    }
    const parts = path.split('.');
    let current = obj;
    for (let i = 0; i < parts.length - 1; i++) {
        if (!current.hasOwnProperty(parts[i])) {
            return obj;
        }
        current = current[parts[i]];
    }
    delete current[parts[parts.length - 1]];
    return obj;
}
exports.removePath = removePath;
function renameProperties(obj, renameMap) {
    if (obj === undefined ||
        obj === null ||
        typeof obj !== 'object' ||
        Object.prototype.toString.call(obj) !== '[object Object]') {
        return obj;
    }
    const newObj = Object.assign({}, obj);
    for (const oldName in renameMap) {
        if (renameMap.hasOwnProperty(oldName) &&
            newObj.hasOwnProperty(oldName) &&
            oldName !== renameMap[oldName]) {
            newObj[renameMap[oldName]] = newObj[oldName];
            delete newObj[oldName];
        }
    }
    return newObj;
}
exports.renameProperties = renameProperties;
function renameProperty(obj, oldName, newName) {
    if (obj === undefined ||
        obj === null ||
        typeof obj !== 'object' ||
        Object.prototype.toString.call(obj) !== '[object Object]') {
        return obj;
    }
    if (obj.hasOwnProperty(oldName) && oldName !== newName) {
        obj[newName] = obj[oldName];
        delete obj[oldName];
    }
    return obj;
}
exports.renameProperty = renameProperty;
function transformProperties(obj, transformFn) {
    if (obj === undefined ||
        obj === null ||
        typeof obj !== 'object' ||
        Object.prototype.toString.call(obj) !== '[object Object]') {
        return obj;
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            obj[key] = transformFn(obj[key]);
        }
    }
    return obj;
}
exports.transformProperties = transformProperties;
function transformProperty(obj, property, transformFn) {
    if (obj === undefined ||
        obj === null ||
        typeof obj !== 'object' ||
        Object.prototype.toString.call(obj) !== '[object Object]') {
        return obj;
    }
    if (obj.hasOwnProperty(property)) {
        obj[property] = transformFn(obj[property]);
    }
    return obj;
}
exports.transformProperty = transformProperty;
function extractProperties(obj, properties) {
    if (obj === undefined ||
        obj === null ||
        typeof obj !== 'object' ||
        Object.prototype.toString.call(obj) !== '[object Object]') {
        return obj;
    }
    const extracted = {};
    properties.forEach((property) => {
        if (obj.hasOwnProperty(property)) {
            extracted[property] = obj[property];
        }
    });
    return extracted;
}
exports.extractProperties = extractProperties;
function extractProperty(obj, property) {
    if (obj === undefined ||
        obj === null ||
        typeof obj !== 'object' ||
        Object.prototype.toString.call(obj) !== '[object Object]') {
        return obj;
    }
    if (obj.hasOwnProperty(property)) {
        const extracted = obj[property];
        delete obj[property];
        return extracted;
    }
    return undefined;
}
exports.extractProperty = extractProperty;
function defaults(obj, defaultValues) {
    if (obj === undefined ||
        obj === null ||
        typeof obj !== 'object' ||
        Object.prototype.toString.call(obj) !== '[object Object]') {
        return obj;
    }
    for (const key in defaultValues) {
        if (defaultValues.hasOwnProperty(key) && !obj.hasOwnProperty(key)) {
            obj[key] = defaultValues[key];
        }
    }
    return obj;
}
exports.defaults = defaults;
function cleanObject(obj) {
    if (obj === undefined) {
        return undefined;
    }
    if (obj === null ||
        typeof obj !== 'object' ||
        Object.prototype.toString.call(obj) !== '[object Object]') {
        return {};
    }
    for (const key in obj) {
        if (obj.hasOwnProperty(key) &&
            (obj[key] === undefined || obj[key] === null)) {
            delete obj[key];
        }
    }
    if (Object.keys(obj).length === 0) {
        return {};
    }
    return obj;
}
exports.cleanObject = cleanObject;
function transformKeys(obj, transformFn) {
    if (!obj)
        return obj;
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[transformFn(key)] = obj[key];
        }
    }
    return newObj;
}
exports.transformKeys = transformKeys;
function transformKey(obj, key, transformFn) {
    if (!obj)
        return obj;
    if (obj.hasOwnProperty(key)) {
        const newKey = transformFn(key);
        const result = Object.assign({}, obj);
        result[newKey] = obj[key];
        delete result[key];
        return result;
    }
    return obj;
}
exports.transformKey = transformKey;
function groupBy(obj, groupFn) {
    if (!obj)
        return obj;
    const grouped = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const group = groupFn(obj[key]);
            if (!grouped[group]) {
                grouped[group] = [];
            }
            grouped[group].push(obj[key]);
        }
    }
    return grouped;
}
exports.groupBy = groupBy;
function countBy(obj, countFn) {
    if (!obj) {
        return obj;
    }
    const counted = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const count = countFn(obj[key]);
            if (!counted[count]) {
                counted[count] = 0;
            }
            counted[count]++;
        }
    }
    return counted;
}
exports.countBy = countBy;
function sumBy(obj, sumFn) {
    let sum = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            sum += sumFn(obj[key]);
        }
    }
    return sum;
}
exports.sumBy = sumBy;
function averageBy(obj, averageFn) {
    if (!obj || Object.keys(obj).length === 0)
        return 0;
    let sum = 0;
    let count = 0;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            sum += averageFn(obj[key]);
            count++;
        }
    }
    return sum / count;
}
exports.averageBy = averageBy;
function minBy(obj, minFn) {
    if (!obj || isEmpty(obj)) {
        return undefined;
    }
    let minValue = Infinity;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = minFn(obj[key]);
            if (value < minValue) {
                minValue = value;
            }
        }
    }
    return minValue;
}
exports.minBy = minBy;
function maxBy(obj, maxFn) {
    if (!obj || Object.keys(obj).length === 0) {
        return undefined;
    }
    let maxValue = -Infinity;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = maxFn(obj[key]);
            if (value > maxValue) {
                maxValue = value;
            }
        }
    }
    return maxValue;
}
exports.maxBy = maxBy;
function pluck(obj, prop) {
    const values = [];
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].hasOwnProperty(prop)) {
                values.push(obj[i][prop]);
            }
        }
    }
    else {
        for (const key in obj) {
            if (obj.hasOwnProperty(key) && obj[key].hasOwnProperty(prop)) {
                values.push(obj[key][prop]);
            }
        }
    }
    return values;
}
exports.pluck = pluck;
function pickBy(obj, pickFn) {
    const picked = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && pickFn(obj[key], key)) {
            picked[key] = obj[key];
        }
    }
    return picked;
}
exports.pickBy = pickBy;
function omitBy(obj, omitFn) {
    const omitted = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !omitFn(obj[key], key)) {
            omitted[key] = obj[key];
        }
    }
    return omitted;
}
exports.omitBy = omitBy;
function mapKeys(obj, mapFn) {
    const mapped = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = mapFn(key);
            mapped[newKey] = obj[key];
        }
    }
    return mapped;
}
exports.mapKeys = mapKeys;
function mapValues(obj, mapFn) {
    const mapped = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            mapped[key] = mapFn(obj[key]);
        }
    }
    return mapped;
}
exports.mapValues = mapValues;
function keyBy(obj, keyFn) {
    const keyed = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = keyFn(obj[key], key);
            keyed[newKey] = obj[key];
        }
    }
    return keyed;
}
exports.keyBy = keyBy;
function invert(obj) {
    const inverted = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            inverted[obj[key]] = key;
        }
    }
    return inverted;
}
exports.invert = invert;
function pickDefined(obj) {
    return pickBy(obj, (value) => value !== undefined);
}
exports.pickDefined = pickDefined;
function pickFalsy(obj) {
    return omitBy(obj, (value) => !value);
}
exports.pickFalsy = pickFalsy;
function pickTruthy(obj) {
    return omitBy(obj, (value) => !!value);
}
exports.pickTruthy = pickTruthy;
function mergeDeep(target, ...sources) {
    if (!sources.length && !target)
        return {};
    if (!sources.length)
        return target;
    const source = sources.shift();
    if ((0, helpers_1.isObject)(target) && (0, helpers_1.isObject)(source)) {
        for (const key in source) {
            if ((0, helpers_1.isObject)(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return mergeDeep(target, ...sources);
}
exports.mergeDeep = mergeDeep;
function mergeDeepWith(merger, target, ...sources) {
    if (!target && !sources.length)
        return {};
    if (!sources.length)
        return target;
    const source = sources.shift();
    if ((0, helpers_1.isObject)(target) && (0, helpers_1.isObject)(source)) {
        for (const key in source) {
            if ((0, helpers_1.isObject)(source[key])) {
                if (!target[key])
                    Object.assign(target, { [key]: {} });
                mergeDeepWith(merger, target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: merger(target[key], source[key]) });
            }
        }
    }
    return mergeDeepWith(merger, target, ...sources);
}
exports.mergeDeepWith = mergeDeepWith;
function mergeWith(merger, target, ...sources) {
    if (!sources.length && !target)
        return {};
    if (!sources.length)
        return target;
    const source = sources.shift();
    if ((0, helpers_1.isObject)(target) && (0, helpers_1.isObject)(source)) {
        for (const key in source) {
            Object.assign(target, { [key]: merger(target[key], source[key]) });
        }
    }
    return mergeWith(merger, target, ...sources);
}
exports.mergeWith = mergeWith;
function difference(obj, ...values) {
    if (values.length === 0)
        return obj;
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (!values.some((val) => val.hasOwnProperty(key))) {
                result[key] = obj[key];
            }
        }
    }
    return result;
}
exports.difference = difference;
function intersection(obj, ...values) {
    if (values.length === 0)
        return {};
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (values.every((val) => val[key] === obj[key])) {
                result[key] = obj[key];
            }
        }
    }
    return result;
}
exports.intersection = intersection;
function isSubset(obj, subset) {
    if (!subset)
        return false;
    for (const key in subset) {
        if (subset.hasOwnProperty(key) && obj[key] !== subset[key]) {
            return false;
        }
    }
    return true;
}
exports.isSubset = isSubset;
function isEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length)
        return false;
    for (let i = 0; i < keys1.length; i++) {
        const key = keys1[i];
        if (obj1[key] !== obj2[key])
            return false;
    }
    return true;
}
exports.isEqual = isEqual;
function isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key]) {
            return false;
        }
    }
    return true;
}
exports.isEmpty = isEmpty;
function count(obj) {
    if (typeof obj !== 'object')
        return 0;
    return Object.keys(obj).length;
}
exports.count = count;
function fromPairs(pairs) {
    const obj = {};
    for (let i = 0; i < pairs.length; i++) {
        obj[pairs[i][0]] = pairs[i][1];
    }
    return obj;
}
exports.fromPairs = fromPairs;
function toPairs(obj) {
    const pairs = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            pairs.push([key, obj[key]]);
        }
    }
    return pairs;
}
exports.toPairs = toPairs;
function sliceObject(obj, start, end) {
    const keys = Object.keys(obj);
    if (start === keys.length && end === keys.length) {
        return obj;
    }
    const sliced = {};
    for (let i = start; i < end; i++) {
        sliced[keys[i]] = obj[keys[i]];
    }
    return sliced;
}
exports.sliceObject = sliceObject;
function findKey(obj, predicate) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && predicate(obj[key], key)) {
            return key;
        }
    }
    return undefined;
}
exports.findKey = findKey;
function findValue(obj, predicate) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && predicate(obj[key], key)) {
            return obj[key];
        }
    }
    return undefined;
}
exports.findValue = findValue;
function findEntry(obj, predicate) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && predicate(obj[key], key)) {
            return [key, obj[key]];
        }
    }
    return undefined;
}
exports.findEntry = findEntry;
function some(obj, predicate) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && predicate(obj[key], key)) {
            return true;
        }
    }
    return false;
}
exports.some = some;
function every(obj, predicate) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !predicate(obj[key], key)) {
            return false;
        }
    }
    return true;
}
exports.every = every;
function filterObject(obj, predicate) {
    const filtered = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && predicate(obj[key], key)) {
            filtered[key] = obj[key];
        }
    }
    return filtered;
}
exports.filterObject = filterObject;
function forEachObject(obj, iteratee) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            iteratee(obj[key], key);
        }
    }
}
exports.forEachObject = forEachObject;
function flattenObject(obj, separator = '.') {
    if (typeof obj !== 'object')
        return {};
    const flattened = {};
    function step(currentObject, currentKey) {
        for (const key in currentObject) {
            if (currentObject.hasOwnProperty(key)) {
                const newKey = currentKey ? `${currentKey}${separator}${key}` : key;
                if (typeof currentObject[key] === 'object') {
                    step(currentObject[key], newKey);
                }
                else {
                    flattened[newKey] = currentObject[key];
                }
            }
        }
    }
    step(obj, '');
    return flattened;
}
exports.flattenObject = flattenObject;
function getEnumKeys(obj) {
    if (typeof obj !== 'object')
        return [];
    const keys = Object.keys(obj);
    return keys.filter((key) => obj.propertyIsEnumerable(key));
}
exports.getEnumKeys = getEnumKeys;
function getEnumValues(obj) {
    if (typeof obj !== 'object')
        return [];
    return getEnumKeys(obj).map((key) => obj[key]);
}
exports.getEnumValues = getEnumValues;
function getNested(obj, path) {
    const keys = path.split('.');
    let value = obj;
    for (let i = 0; i < keys.length; i++) {
        value = value[keys[i]];
        if (value === undefined) {
            break;
        }
    }
    return value;
}
exports.getNested = getNested;
function getNonEnumKeys(obj) {
    if (typeof obj !== 'object')
        return [];
    const allKeys = Object.getOwnPropertyNames(obj);
    const enumKeys = Object.keys(obj);
    return allKeys.filter((key) => !enumKeys.includes(key));
}
exports.getNonEnumKeys = getNonEnumKeys;
function getNonEnumValues(obj) {
    if (typeof obj !== 'object')
        return [];
    return Object.getOwnPropertyNames(obj)
        .filter((key) => !obj.propertyIsEnumerable(key))
        .map((key) => obj[key]);
}
exports.getNonEnumValues = getNonEnumValues;
function getObjectBranch(obj, path) {
    const keys = path.split('.');
    let branch = obj;
    for (let i = 0; i < keys.length; i++) {
        if (branch.hasOwnProperty(keys[i])) {
            branch = branch[keys[i]];
        }
        else {
            return {};
        }
    }
    return branch;
}
exports.getObjectBranch = getObjectBranch;
function getObjectChanges(obj1, obj2) {
    if (obj1 === null ||
        obj1 === undefined ||
        obj2 === null ||
        obj2 === undefined)
        return {};
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object')
        return {};
    const result = {};
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    keys1.forEach((key) => {
        if (!keys2.includes(key)) {
            result[key] = obj1[key];
        }
        else if (obj1[key] !== obj2[key]) {
            result[key] = obj2[key];
        }
    });
    keys2.forEach((key) => {
        if (!keys1.includes(key) && obj2[key] !== undefined) {
            result[key] = obj2[key];
        }
    });
    return result;
}
exports.getObjectChanges = getObjectChanges;
function getObjectDifference(obj1, obj2) {
    const difference = {};
    for (const key in obj1) {
        if (obj1.hasOwnProperty(key) && !obj2.hasOwnProperty(key)) {
            difference[key] = obj1[key];
        }
    }
    return difference;
}
exports.getObjectDifference = getObjectDifference;
function getObjectEntries(obj) {
    if (typeof obj !== 'object' || obj === null)
        return [];
    return Object.entries(obj);
}
exports.getObjectEntries = getObjectEntries;
function getObjectInherited(obj) {
    const inherited = {};
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) {
            inherited[key] = obj[key];
        }
    }
    return inherited;
}
exports.getObjectInherited = getObjectInherited;
function getObjectKeys(obj) {
    if (typeof obj !== 'object' || obj === null)
        return [];
    return Object.keys(obj);
}
exports.getObjectKeys = getObjectKeys;
function getObjectLeaves(obj) {
    const leaves = [];
    if (typeof obj !== 'object' || obj === null)
        return leaves;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                leaves.push(...getObjectLeaves(obj[key]));
            }
            else {
                leaves.push(obj[key]);
            }
        }
    }
    return leaves;
}
exports.getObjectLeaves = getObjectLeaves;
function getObjectMatching(obj, fn) {
    if (typeof obj !== 'object' || obj === null)
        return {};
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && fn(obj[key])) {
            result[key] = obj[key];
        }
    }
    return result;
}
exports.getObjectMatching = getObjectMatching;
function getObjectMismatches(obj, fn) {
    if (typeof obj !== 'object' || obj === null)
        return {};
    const mismatches = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !fn(obj[key])) {
            mismatches[key] = obj[key];
        }
    }
    return mismatches;
}
exports.getObjectMismatches = getObjectMismatches;
function getObjectNonInherited(obj) {
    if (typeof obj !== 'object' || obj === null)
        return {};
    const nonInherited = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            nonInherited[key] = obj[key];
        }
    }
    return nonInherited;
}
exports.getObjectNonInherited = getObjectNonInherited;
function getObjectPaths(obj, path = '', cache = []) {
    if (typeof obj !== 'object' || obj === null)
        return [];
    const paths = [];
    if (cache.includes(obj))
        return paths;
    cache.push(obj);
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const currentPath = path ? `${path}.${key}` : key;
            if (typeof obj[key] === 'object') {
                paths.push(...getObjectPaths(obj[key], currentPath, cache));
            }
            else {
                paths.push(currentPath);
            }
        }
    }
    return paths;
}
exports.getObjectPaths = getObjectPaths;
function getObjectPrototype(obj) {
    if (typeof obj !== 'object') {
        return null;
    }
    return Object.getPrototypeOf(obj);
}
exports.getObjectPrototype = getObjectPrototype;
function getObjectSize(obj) {
    return typeof obj === 'object' && obj !== null ? Object.keys(obj).length : 0;
}
exports.getObjectSize = getObjectSize;
function getObjectValues(obj) {
    return Object.values(obj);
}
exports.getObjectValues = getObjectValues;
function removeObjectCircularReferences(obj, cache = []) {
    if (obj && typeof obj === 'object') {
        if (cache.includes(obj)) {
            return undefined;
        }
        cache.push(obj);
        Object.keys(obj).forEach((key) => {
            obj[key] = removeObjectCircularReferences(obj[key], cache);
        });
    }
    return obj;
}
exports.removeObjectCircularReferences = removeObjectCircularReferences;
function setNested(obj, path, value) {
    const pathArray = path.split('.');
    let current = obj;
    for (let i = 0; i < pathArray.length - 1; i++) {
        if (!Object.prototype.hasOwnProperty.call(current, pathArray[i])) {
            current[pathArray[i]] = {};
        }
        current = current[pathArray[i]];
    }
    current[pathArray[pathArray.length - 1]] = value;
    return obj;
}
exports.setNested = setNested;
function setObjectPrototype(obj, proto) {
    return Object.setPrototypeOf(obj, proto);
}
exports.setObjectPrototype = setObjectPrototype;
