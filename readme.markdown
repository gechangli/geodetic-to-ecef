# geodetic-to-ecef

convert [geodetic coordinates](https://en.wikipedia.org/wiki/World_Geodetic_System)
([lat,lon])
to [ecef](http://en.wikipedia.org/wiki/ECEF) (cartesian [x,y,z])

# example

``` js
var ecef = require('geodetic-to-ecef');
var xyz = ecef(37.8043722, -122.2708026);
console.log(xyz);
```

# methods

``` js
var ecef = require('geodetic-to-ecef')
```

## var xyz = ecef(lat, lon, elevation=0)

Return an array `xyz` of `[x,y,z]` coordinates in meters from `lat` and `lon`.

Optionally supply an `elevation` in meters.

# install

With [npm](https://npmjs.org) do:

```
npm install geodetic-to-ecef
```

# license

MIT
