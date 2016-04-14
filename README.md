# @eagle/glob-loader

webpack loader to load files at once with glob

## Install

```
npm install --save-dev @eagle/glob-loader
```

## Repository

Change: export object instead of an array

https://github.com/Graf009/glob-loader.git

## Use

* Create a glob pattern file (example: `dir.pattern`)
* Write the pattern of the files that you want to require
* Require it with `glob-loader`

### `dir.pattern` file

Pattern is relative to the file directory.

```
./dir/**/*.js
```

### Require patterns

```js
var modules = require("glob-loader!./dir.pattern");
```

## TODO

* source map
