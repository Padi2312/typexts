# Typexts

[![Build and Publish](https://github.com/Padi2312/typexts/actions/workflows/build_publish.yml/badge.svg?branch=0.1.7)](https://github.com/Padi2312/typexts/actions/workflows/build_publish.yml) ![npm](https://img.shields.io/npm/v/@patrand/typexts)
![npm](https://img.shields.io/npm/dw/@patrand/typexts)

A library giving some types useful extensions.

Simple example i bet you know:

_Check if the string is empty. -Well not complex but annoying:_

```ts
const test = "string";
if (test.length === 0) {
  // ...
}
```

With **typexts**:

```ts
import "@patrand/typexts";
if (test.isEmpty()) {
  // ...
}
```

# Getting started

## Usage

To get started include **typexts** in a top level file like `index.ts`, `main.ts` or just in the file where you want to use the extension.

## Examples

Example:

```ts
import "@patrand/typexts";

const test = "iAmString";
if (test.isEmpty()) {
  console.log("string is empty");
} else {
  console.log("string is not empty");
}
```

Example 2:

```ts
import "@patrand/typexts";

const test = ["i", "am", "string", "array"];
test.print(); // is equal to `console.log(test)`
```

Example 3:

```ts
import "@patrand/typexts";

const test = {
  any: "object",
  can: "be",
  easy: "printed",
};
test.print(); // is equal to `console.log(test)`
```

# Includes

## Include everything

The following will include all extensions.

**Typscript:**

```ts
import "@patrand/typexts";
```

**Javascript:**

_In JavaScript you can use the same paths like for typescirpt just with require statement_

```js
const typexts = require("@patrand/typexts");
```

## Single includes

In order to minimize the imports you can just import the extensions you need.

You can import extensions for only some types.

*Example of only including StringExts:*

```ts
import "@patrand/typexts/StringExts";
```
 
Here's a list of typexts packs: 
1. `import "@patrand/typexts/StringExts"`
2. `import "@patrand/typexts/ArrayExts"`
3. `import "@patrand/typexts/BooleanExts"`
4. `import "@patrand/typexts/ObjectExts"`
5. `import "@patrand/typexts/NumberExts"`


Or in case you only need a specifc extension like `isEmpty` for strings:

```ts
import "@patrand/typexts/string/IsEmpty";

// Or import multiple extensions
import "@patrand/typexts/string/IsEmpty";
import "@patrand/typexts/string/IsNotEmpty";
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

#### Boolean

- `print`
- `on`
- `onFalse`
- `onTrue`

#### Number

- `isPositive`
- `isNegative`
- `isZero`


#### Object

- `print`
- `printJson`
