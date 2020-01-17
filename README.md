[![Build Status](https://travis-ci.org/genomejs/genoset-male.png?branch=master)](https://travis-ci.org/genomejs/genoset-male)

[![NPM version](https://badge.fury.io/js/genoset-male.png)](http://badge.fury.io/js/genoset-male)

## Information

<table>
<tr>
<td>Package</td><td>genoset-male</td>
</tr>
<tr>
<td>Description</td>
<td>Determines if a genome is male (GS144)</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.4</td>
</tr>
</table>

## Compatibility

This genoset is to be used with DNA-JSON. See the [dna2json](https://github.com/genomejs/dna2json) repository for more information.

## Usage

```javascript
const isMale = require('genoset-male');
const dna = require('./my-dna.json');

console.log(isMale(dna)); // true or false
```

## LICENSE

(MIT License)

Copyright (c) 2013 Fractal <contact@wearefractal.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
