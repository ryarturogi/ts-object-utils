export declare function deepClone(obj: any): any;
export declare function getPathValue(obj: any, path: string): any;
export declare function setPathValue(obj: any, path: string, value: any): any;
export declare function removePath(obj: any, path: string): any;
export declare function renameProperties(obj: any, renameMap: {
    [oldName: string]: string;
}): any;
export declare function renameProperty(obj: any, oldName: string, newName: string): any;
export declare function transformProperties(obj: any, transformFn: (value: any) => any): any;
export declare function transformProperty(obj: any, property: string, transformFn: (value: any) => any): any;
export declare function extractProperties(obj: any, properties: string[]): any;
export declare function extractProperty(obj: any, property: string): any;
export declare function defaults(obj: any, defaultValues: any): any;
export declare function cleanObject(obj: any): any;
export declare function transformKeys(obj: any, transformFn: (key: string) => string): any;
export declare function transformKey(obj: any, key: string, transformFn: (key: string) => string): any;
export declare function groupBy(obj: any, groupFn: (value: any) => any): any;
export declare function countBy(obj: any, countFn: (value: any) => any): any;
export declare function sumBy(obj: any, sumFn: (value: any) => number): number;
export declare function averageBy(obj: any, averageFn: (value: any) => number): number;
export declare function minBy(obj: any, minFn: (value: any) => number): number | undefined;
export declare function maxBy(obj: any, maxFn: (value: any) => number): number | undefined;
export declare function pluck(obj: any | any[], prop: string): any[];
export declare function pickBy(obj: any, pickFn: (value: any, key: string) => boolean): any;
export declare function omitBy(obj: any, omitFn: (value: any, key: string) => boolean): any;
export declare function mapKeys(obj: any, mapFn: (key: string) => string): any;
export declare function mapValues(obj: any, mapFn: (value: any) => any): any;
export declare function keyBy(obj: any, keyFn: (value: any, key: string) => string): any;
export declare function invert(obj: any): any;
export declare function pickDefined(obj: any): any;
export declare function pickFalsy(obj: any): any;
export declare function pickTruthy(obj: any): any;
export declare function mergeDeep(target?: any, ...sources: any[]): any;
export declare function mergeDeepWith(merger: (objValue: any, srcValue: any) => any, target?: any, ...sources: any[]): any;
export declare function mergeWith(merger: (objValue: any, srcValue: any) => any, target?: any, ...sources: any[]): any;
export declare function difference(obj: any, ...values: any[]): any;
export declare function intersection(obj: any, ...values: any[]): any;
export declare function isSubset(obj: any, subset?: any): boolean;
export declare function isEqual(obj1: any, obj2: any): boolean;
export declare function isEmpty(obj: any): boolean;
export declare function count(obj: any): number;
export declare function fromPairs(pairs: Array<[string, any]>): any;
export declare function toPairs(obj: any): Array<[string, any]>;
export declare function sliceObject(obj: any, start: number, end: number): any;
export declare function findKey(obj: any, predicate: (value: any, key: string) => boolean): string | undefined;
export declare function findValue(obj: any, predicate: (value: any, key: string) => boolean): any | undefined;
export declare function findEntry(obj: any, predicate: (value: any, key: string) => boolean): [string, any] | undefined;
export declare function some(obj: any, predicate: (value: any, key: string) => boolean): boolean;
export declare function every(obj: any, predicate: (value: any, key: string) => boolean): boolean;
export declare function filterObject(obj: any, predicate: (value: any, key: string) => boolean): any;
export declare function forEachObject(obj: any, iteratee: (value: any, key: string) => void): void;
export declare function flattenObject(obj: any, separator?: string): any;
export declare function getEnumKeys(obj: any): string[];
export declare function getEnumValues(obj: any): any[];
export declare function getNested(obj: any, path: any): any;
export declare function getNonEnumKeys(obj: any): string[];
export declare function getNonEnumValues(obj: any): any[];
export declare function getObjectBranch(obj: any, path: any): any;
export declare function getObjectChanges(obj1: any, obj2: any): any;
export declare function getObjectDifference(obj1: any, obj2: any): any;
export declare function getObjectEntries(obj: any): Array<[string, any]>;
export declare function getObjectInherited(obj: any): any;
export declare function getObjectKeys(obj: any): string[];
export declare function getObjectLeaves(obj: any): any[];
export declare function getObjectMatching(obj: any, fn: (val: any) => boolean): object;
export declare function getObjectMismatches(obj: any, fn: (val: any) => boolean): object;
export declare function getObjectNonInherited(obj: any): any;
export declare function getObjectPaths(obj: any, path?: string, cache?: any[]): string[];
export declare function getObjectPrototype(obj: any): any | null;
export declare function getObjectSize(obj: any): number;
export declare function getObjectValues(obj: any): any[];
export declare function removeObjectCircularReferences(obj: any, cache?: any[]): any;
export declare function setNested(obj: any, path: any, value: any): any;
export declare function setObjectPrototype(obj: any, proto: any): any;
