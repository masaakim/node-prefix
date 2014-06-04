# node-prefix [![Build Status](https://travis-ci.org/morishitter/node-prefix.svg)](https://travis-ci.org/morishitter/node-prefix)

Refer to nodejs configuration prefix and global module install path

## Installation

```shell
$ npm install node-prefix
```

## Example

```javascript
var prefix = require('node-prefix').nodePrefix()
// '/usr/local/lib'

var globalModPath = require('node-prefix').globalmodulePath('moduleName')
// '/usr/local/lib/node_modules/moduleName'
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
