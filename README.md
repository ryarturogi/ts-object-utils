This library provides a set of functions for working with objects in TypeScript. The functions include:

- `deepClone`: creates a deep copy of an object, including all nested objects
- `getPathValue`: retrieves the value at a specific path in an object
- `setPathValue`: sets the value at a specific path in an object
- `removePath`: removes a specific path from an object
- `renameProperties`: renames the properties of an object
- `renameProperty`: renames a specific property of an object
- `transformProperties`: transforms the properties of an object using a provided function
- `transformProperty`: transforms a specific property of an object using a provided function
- `extractProperties`: creates a new object with a subset of an object's properties
- `extractProperty`: retrieves the value of a specific property in an object and removes it from the original object
- `defaults`: fills in any missing properties in an object with provided default values
- `cleanObject`: removes any properties with undefined or null values from an object
- `transformKeys`: transforms the keys of an object using a provided function
- `transformKey`: transforms a specific key of an object using a provided function
- `groupBy`: groups an object's properties by the result of a provided function
- `countBy`: counts an object's properties by the result of a provided function
- `sumBy`: sums an object's properties by the result of a provided function
- `averageBy`: calculates the average of an object's properties by the result of a provided function
- `minBy`: finds the minimum value of an object's properties by the result of a provided function
- `maxBy`: finds the maximum value of an object's properties by the result of a provided function
- `pluck`: retrieves the values of a specific property from an object or array of objects
- `pickBy`: selects properties from an object based on the result of a provided function
- `omitBy`: removes properties from an object based on the result of a provided function
- `mapKeys`: creates a new object with the keys transformed by a provided function
- `mapValues`: creates a new object with the values transformed by a provided function
- `keyBy`: creates an object grouped by the result of a provided function on the object's keys
- `invert`: creates a new object with the keys and values of the original object inverted
- `pickDefined`: removes properties with undefined values from the object
- `pickFalsy`: removes properties with falsy values from the object
- `pickTruthy`: removes properties with truthy values from the object
- `mergeDeep`: merges the properties of multiple objects recursively
- `mergeDeepWith`: merges the properties of multiple objects recursively with a provided function
- `mergeWith`: merges the properties of multiple objects with a provided function
- `difference`: returns the difference between two objects
- `intersection`: returns the intersection between two objects
- `isSubset`: check if an object is a subset of another object
- `isEqual`: compares two objects and returns a boolean indicating whether they have the same properties and values
- `isEmpty`: returns a boolean indicating whether an object has any properties
- `count`: returns the number of properties in an object
- `fromPairs`: creates an object from an array of key-value pairs
- `toPairs`: converts an object to an array of key-value pairs
- `sliceObject`: returns a new object with a subset of an object's properties, by providing the start and end index
- `findKey`: returns the first key that satisfies a provided predicate function
- `findValue`: returns the first value that satisfies a provided predicate function
- `findEntry`: returns the first key-value pair that satisfies a provided predicate function
- `some`: returns a boolean indicating whether at least one property in an object satisfies a provided predicate function
- `every`: returns a boolean indicating whether all properties in an object satisfy a provided predicate function
- `getNested`: retrieves a value from a nested object by providing a path of keys
- `setNested`: sets a value in a nested object by providing a path of keys and the value
- `getEnumValues`: returns an array of all enumerable property values of an object
- `getEnumKeys`: returns an array of all enumerable property keys of an object
- `getNonEnumValues`: returns an array of all non-enumerable property values of an object
- `getNonEnumKeys`: returns an array of all non-enumerable property keys of an object
- `getObjectPaths`: returns an array of all object paths in a nested object
- `getObjectDifference`: returns a new object with the properties that differ between two objects
- `removeObjectCircularReferences`: removes circular references from an object to prevent maximum call stack errors
- `getObjectLeaves`: returns an array of all leaf nodes (i.e. nodes with no children) in a nested object
- `getObjectBranch`: returns a new object that includes only the properties at a specific path in a nested object
- `getObjectSize`: returns the number of properties in an object, including those in nested objects
- `setObjectPrototype`: sets the prototype of an object and all nested objects to a provided prototype
- `getObjectPrototype`: returns the prototype of an object and all nested objects
- `getObjectKeys`: returns an array of all own and inherited property keys of an object
- `getObjectValues`: returns an array of all own and inherited property values of an object
- `getObjectEntries`: returns an array of all own and inherited key-value pairs of an object
- `flattenObject`: converts a nested object into a single-level object, with keys representing the full path to the original value
- `getObjectInherited`: returns an object containing all inherited properties and their values
- `getObjectNonInherited`: returns an object containing all non-inherited properties and their values
- `getObjectChanges`: returns an object containing all properties that have been added, removed, or modified between two objects
- `getObjectMatching`: returns an object containing all properties that match a specific value in an object
- `getObjectMismatches`: returns an object containing all properties that do not match a specific value in an object

These functions can be useful for performing various operations on objects in a concise and readable way.

#### `deepClone(obj: any)`

Creates a deep copy of an object, including all nested objects.

```
const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);
console.log(copy); // { a: 1, b: { c: 2 } }
```

#### `getPathValue(obj: any, path: string)`

Retrieves the value at a specific path in an object.

```
const obj = { a: { b: { c: 2 } } };
console.log(getPathValue(obj, 'a.b.c')); // 2
```

#### `setPathValue(obj: any, path: string, value: any)`

Sets the value at a specific path in an object.

```
const obj = { a: { b: { c: 2 } } };
setPathValue(obj, 'a.b.c', 3);
console.log(obj); // { a: { b: { c: 3 } } }
```

#### `removePath(obj: any, path: string)`

Removes a specific path from an object.

```
const obj = { a: { b: { c: 2 } } };
removePath(obj, 'a.b.c');
console.log(obj); // { a: { b: {} } }
```

#### `renameProperties(obj: any, renameMap: object)`

Renames the properties of an object.

```
const obj = { a: 1, b: 2 };
renameProperties(obj, { a: 'x', b: 'y' });
console.log(obj); // { x: 1, y: 2 }
```

#### `renameProperty(obj: any, oldName: string, newName: string)`

Renames a specific property of an object.

```
const obj = { a: 1, b: 2 };
renameProperty(obj, 'a', 'x');
console.log(obj); // { x: 1, b: 2 }
```

#### `transformProperties(obj: any, transformFn: (value: any, key: string, obj: any) => any)`

Transforms the properties of an object using a provided function.

```
const obj = { a: 1, b: 2 };
transformProperties(obj, (value) => value * 2);
console.log(obj); // { a: 2, b: 4 }
```

#### `transformProperty(obj: any, key: string, transformFn: (value: any, key: string, obj: any) => any)`

Transforms a specific property of an object using a provided function.

```
const obj = { a: 1, b: 2 };
transformProperty(obj, 'a', (value) => value * 2);
console.log(obj); // { a: 2, b: 2 }
```

#### `extractProperties(obj: any, keys: string[])`

Creates a new object with a subset of an object's properties.

```
const obj = { a: 1, b: 2, c: 3 };
const extracted = extractProperties(obj, ['a', 'c']);
console.log(extracted); // { a: 1, c: 3 }
```

#### `extractProperty(obj: any, key: string)`

Retrieves the value of a specific property in an object and removes it from the original object.

```
const obj = { a: 1, b: 2 };
const value = extractProperty(obj, 'a');
console.log(value); // 1
console.log(obj); // { b: 2 }
```

### `defaults(obj: any, defaults: object)`

Fills in any missing properties in an object with provided default values.

```
const obj = { a: 1 };
defaults(obj, { b: 2, c: 3 });
console.log(obj); // { a: 1, b: 2, c: 3 }
```

### `cleanObject(obj: any)`

Removes any properties with undefined or null values from an object.

```
const obj = { a: 1, b: undefined, c: null, d: 'hello' };
cleanObject(obj);
console.log(obj); // { a: 1, d: 'hello' }
```

### `transformKeys(obj: any, transformFn: (key: string) => any)`

Transforms the keys of an object using a provided function.

```
const obj = { a: 1, b: 2 };
transformKeys(obj, (key) => key.toUpperCase());
console.log(obj); // { A: 1, B: 2 }
```

### `transformKey(obj: any, key: string, transformFn: (key: string) => any)`

Transforms a specific key of an object using a provided function.

```
const obj = { a: 1, b: 2 };
transformKey(obj, 'a', (key) => key.toUpperCase());
console.log(obj); // { A: 1, b: 2 }
```

### `groupBy(obj: any, groupFn: (value: any, key: string, obj: any) => any)`

Groups an object's properties by the result of a provided function.

```
const obj = { a: 1, b: 2, c: 3 };
const grouped = groupBy(obj, (value) => value % 2 === 0);
console.log(grouped); // { true: [2], false: [1, 3] }
```

### `countBy(obj: any, countFn: (value: any, key: string, obj: any) => any)`

Counts an object's properties by the result of a provided function.

```
const obj = { a: 1, b: 2, c: 3 };
const counted = countBy(obj, (value) => value % 2 === 0);
console.log(counted); // { true: 1, false: 2
}
```

### `sumBy(obj: any, sumFn: (value: any, key: string, obj: any) => any)`

Sums an object's properties by the result of a provided function.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(sumBy(obj, (value) => value)); // 6
```

### `averageBy(obj: any, averageFn: (value: any, key: string, obj: any) => any)`

Calculates the average of an object's properties by the result of a provided function.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(averageBy(obj, (value) => value)); // 2
```

### `minBy(obj: any, minFn: (value: any, key: string, obj: any) => any)`

Finds the minimum value of an object's properties by the result of a provided function.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(minBy(obj, (value) => value)); // 1
```

### `maxBy(obj: any, maxFn: (value: any, key: string, obj: any) => any)`

Finds the maximum value of an object's properties by the result of a provided function.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(maxBy(obj, (value) => value)); // 3
```

### `pluck(obj: any | any[], key: string)`

Retrieves the values of a specific property from an object or array of objects.

```
const obj = { a: { x: 1 }, b: { x: 2 }, c: { x: 3 } };
console.log(pluck(obj, 'x')); // [1, 2, 3]
```

### `pickBy(obj: any, pickFn: (value: any, key: string, obj: any) => any)`

Selects properties from an object based on the result of a provided function.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(pickBy(obj, (value) => value > 1)); // { b: 2, c: 3 }
```

### `omitBy(obj: any, omitFn: (value: any, key: string, obj: any) => any)`

Removes properties from an object based on the result of a provided function.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(omitBy(obj, (value) => value > 1)); // { a: 1 }
```

### `mapKeys(obj: any, mapFn: (key: string) => any)`

Creates a new object with the keys transformed by a provided function.

```
const obj = { a: 1, b: 2 };
console.log(mapKeys(obj, (key) => key.toUpperCase())); // { A: 1, B: 2 }
```

### `mapValues(obj: any, mapFn: (value: any, key: string, obj: any) => any)`

Creates a new object with the values transformed by a provided function.

```
const obj = { a: 1, b: 2 };
console.log(mapValues(obj, (value) => value * 2)); // { a: 2, b: 4 }
```

### `keyBy(obj: any | any[], keyFn: (value: any, key: string, obj: any) => any)`

Creates an object grouped by the result of a provided function on the object's keys.

```
const arr = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }];
console.log(keyBy(arr, 'id')); // { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' }, 3: { id: 3, name: 'Charlie' } }
```

### `invert(obj: any)`

Creates a new object with the keys and values of the original object inverted.

```
const obj = { a: 1, b: 2 };
console.log(invert(obj)); // { 1: 'a', 2: 'b' }
```

### `pickDefined(obj: any)`

Removes properties with undefined values from the object.

```
const obj = { a: 1, b: undefined, c: 3 };
pickDefined(obj);
console.log(obj); // { a: 1, c: 3 }
```

### `pickFalsy(obj: any)`

Removes properties with falsy values from the object.

```
const obj = { a: 0, b: false, c: 3 };
pickFalsy(obj);
console.log(obj); // { c: 3 }
```

### `pickTruthy(obj: any)`

Removes properties with truthy values from the object.

```
const obj = { a: 0, b: true, c: 3 };
pickTruthy(obj);
console.log(obj); // { b: true }
```

### `mergeDeep(obj1: any, obj2: any, ...objs: any[])`

Merges the properties of multiple objects recursively.

```
const obj1 = { a: { b: 1 } };
const obj2 = { a: { c: 2 } };
console.log(mergeDeep(obj1, obj2)); // { a: { b: 1, c: 2 } }
```

### `mergeDeepWith(obj1: any, obj2: any, mergeFn: (objValue: any, srcValue: any, key: string, obj: any, src: any) => any, ...objs: any[])`

Merges the properties of multiple objects recursively with a provided function.

```
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 3, b : 4 };
const mergeFn = (objVal, srcVal) => objVal + srcVal;
console.log(mergeDeepWith(obj1, obj2, mergeFn)); // { a: 4, b: 6 }
```

#### `mergeWith(obj1: any, obj2: any, mergeFn: (objValue: any, srcValue: any, key: string, obj: any, src: any) => any, ...objs: any[])`

Merges the properties of multiple objects with a provided function.

```
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 3, b: 4 };
const mergeFn = (objVal, srcVal) => objVal + srcVal;
console.log(mergeWith(obj1, obj2, mergeFn)); // { a: 4, b: 6 }
```

#### `difference(obj1: any, obj2: any)`

Returns the difference between two objects.

```
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 4, d: 5 };
console.log(difference(obj1, obj2)); // { a: 1 }
```

#### `intersection(obj1: any, obj2: any)`

Returns the intersection between two objects.

```
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 4, d: 5 };
console.log(intersection(obj1, obj2)); // { b: 2 }
```

#### `isSubset(obj: any, subset: any)`

Check if an object is a subset of another object.

```
const obj = { a: 1, b: 2, c: 3 };
const subset = { b: 2, c: 3 };
console.log(isSubset(obj, subset)); // true
```

#### `isEqual(obj1: any, obj2: any)`

Compares two objects and returns a boolean indicating whether they have the same properties and values.

```
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 2, a: 1 };
console.log(isEqual(obj1, obj2)); // true
```

#### `isEmpty(obj: any)`

Returns a boolean indicating whether an object has any properties.

```
const obj = {};
console.log(isEmpty(obj)); // true
```

#### `count(obj: any)`

Returns the number of properties in an object.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(count(obj)); // 3
```

#### `fromPairs(pairs: [string, any][])`

Creates an object from an array of key-value pairs.

```
const pairs = [['a', 1], ['b', 2], ['c', 3]];
console.log(fromPairs(pairs)); // { a: 1, b: 2, c: 3 }
```

### `toPairs(obj: any)`

Converts an object to an array of key-value pairs.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(toPairs(obj)); // [['a', 1], ['b', 2], ['c', 3]]
```

### `sliceObject(obj: any, start: number, end: number)`

Returns a new object with a subset of an object's properties, by providing the start and end index.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(sliceObject(obj, 0, 2)); // { a: 1, b: 2 }
```

### `findKey(obj: any, predicateFn: (value: any, key: string, obj: any) => boolean)`

Returns the first key that satisfies a provided predicate function.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(findKey(obj, (value) => value > 1)); // 'b'
```

### `findValue(obj: any, predicateFn: (value: any, key: string, obj: any) => boolean)`

Returns the first value that satisfies a provided predicate function.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(findValue(obj, (value) => value > 1)); // 2
```

### `findEntry(obj: any, predicateFn: (value: any, key: string, obj: any) => boolean)`

Returns the first key-value pair that satisfies a provided predicate function.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(findEntry(obj, (value) => value > 1)); // ['b', 2]
```

### `some(obj: any, predicateFn: (value: any, key: string, obj: any) => boolean)`

Returns a boolean indicating whether at least one property in an object satisfies a provided predicate function.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(some(obj, (value) => value > 2)); // true
```

### `every(obj: any, predicateFn: (value: any, key: string, obj: any) => boolean)`

Returns a boolean indicating whether all properties in an object satisfies a provided predicate function.

```
const obj = { a: 1, b: 2, c: 3 };
console.log(every(obj, (value) => value > 0)); // true
```
