# validly
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![download](https://img.shields.io/npm/dt/@dumplings/validly.svg)](https://www.npmjs.com/package/@dumplings/validly) [![version](https://img.shields.io/npm/v/@dumplings/validly.svg)](https://www.npmjs.com/package/@dumplings/validly)

一个用于包装被调用对象，保证对象属性被正常调用的node模块。

# 下载

```bash
npm install @dumplings/validly
```

# 使用

```javascript 1.8
import { array, number, string } from '@dumplings/validly';

const arr = array(12312).map(x => x);
console.log(arr); // []

const calc = x => number(x, 20) + 1;

calc(); // 21
calc(2);  // 3
```

# TODO
