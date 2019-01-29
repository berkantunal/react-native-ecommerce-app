# babel-plugin-add-prefix

> Compile with prefix

## Installation

```sh
npm install --save-dev babel-plugin-transform-es2015-destructuring
```


## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-plugin-add-prefix"]
}
```
option:{
  {
      spec: "$",  //标识符，默认为"_"
      func: true, //函数是否添加标识符，默认为true
      var: true  //变量是否添加标识符，默认为true
  }
}

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["babel-plugin-add-prefix"]
});
```