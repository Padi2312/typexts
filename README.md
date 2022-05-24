# Typexts
A library giving some types useful extensions. 

Simple example i bet you know:

*Check if the string is empty. -Well not complex but annoying:*

```ts
const test = "string"
if(test.length === 0){
    // ...
}
```

With **typexts**:

```ts
import '@patrand/typexts'
if(test.isEmpty()){
    // ...
}
```


# Getting started
## Usage
To get started include **typexts** in a top level file like `index.ts`, `main.ts` or just in the file where you want to use the extension.

## Examples
Example:
```ts
import '@patrand/typexts'

const test = "iAmString"
if(test.isEmpty()){
    console.log("string is empty")
}
else{
    console.log("string is not empty")
}
```

Example 2:
```ts
import '@patrand/typexts'

const test = ["i","am","string","array"]
test.print() // is equal to `console.log(test)`
```

Example 3:
```ts
import '@patrand/typexts'

const test = {
    any:"object",
    can:"be",
    easy:"printed"
}
test.print() // is equal to `console.log(test)`
```


# Includes
## Include everything
The following will include all extensions.

Example:
```ts
import '@patrand/typexts'
```

## Single includes
In order to minimize the imports you can just import the extensions you need.

You can import extensions for only some types.

StringExts:
```ts
import '@patrand/typexts/StringExts'
```

ArrayExts:
```ts
import '@patrand/typexts/ArrayExts'
```

ObjectExts:
```ts
import '@patrand/typexts/ObjectExts'
```

**CURRENTLY NOT WORKING!!!**
Or in case you only need a specifc extension like `isEmpty` for strings:
```ts
import '@patrand/typexts/string/IsEmpty' 
```
---

## List of features

#### Strings
- `isEmpty` 
- `isNotEmpty`
- `isNumber`
- `print`
- `reverse`
- `isUrl`

#### Array
- `isEmpty`
- `isNotEmpty`
- `print`
- `reverse`

#### Object
- `print`
- `printJson`



