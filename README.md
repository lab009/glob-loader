# @lab009/glob-loader

Forked from [seanchas116/glob-loader](https://github.com/seanchas116/glob-loader), changed:
 - use fileName for object key

webpack loader to load files at once with glob

## Install

```
npm install --save-dev @lab009/glob-loader
```

## Repository

https://github.com/lab009/glob-loader.git

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
