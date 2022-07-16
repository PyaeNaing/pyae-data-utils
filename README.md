# pyae-data-utils

---

I created this package so I can use it's function across my projects.
The package mostly contains array / object manipulation that I could not find on stack-overflow (I.E filtering array of objects by another object with unknown key). Feel free to use / "borrow" them.

---

### Util functions

`filterObjectArray`
This functions filter unwanted object data from array

`narrowObjectArray`
This function is to narrow down data from array to show the one you desires

`replaceNullWithValue`
This function takes in an object / array of object and replace the null property of object with the value you provide

`containsInObject`
This function will return objects that contains the string and filter out the rest

---

### Version update note

##### v1.0.3
`containsInObject` function added.
changed the babel plugin form commonjs to umd.

##### v1.0.2

`replaceNullWithValue` function will now accept either an object or an array of objects

##### v1.0.1

Initialized functions
