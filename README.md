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

This genoset is to be used with genomejs JSON. See the [dna2json](https://github.com/genomejs/dna2json) repository for more information.

## Usage

This module simply exports a GQL query. Check out the [GQL page for more information](https://github.com/genomejs/gql)


This sample is just using the GQL streaming interface to figure out if a genome is a male or not.

```javascript
var male = require('genoset-male');
var fs = require('fs');
var path = require('path');
var es = require('event-stream');
var JSONStream = require('JSONStream');

var jsonStream = fs.createReadStream(path.join(__dirname, "dna.json"));

var query = male();
var genoStream = query.stream();

jsonStream
  .pipe(JSONStream.parse('*'))
  .pipe(genoStream);

var count = 0;
genoStream.on('data', function(snp){
  console.log('Analyzed', ++count, 'SNPs');
});

genoStream.on('end', function(){
  console.log("There are", query.matches().length, "matches for genoset 144");
  console.log("There is a", query.percentage(), "percent chance that genoset matches");
});
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
