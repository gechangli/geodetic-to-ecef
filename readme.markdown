# geodetic-to-ecef

convert [geodetic coordinates](https://en.wikipedia.org/wiki/World_Geodetic_System)
([lat,lon])
to [ecef](http://en.wikipedia.org/wiki/ECEF) (cartesian [x,y,z])

[![build status](https://secure.travis-ci.org/substack/geodetic-to-ecef.png)](http://travis-ci.org/substack/geodetic-to-ecef)

# example

``` js
var ecef = require('geodetic-to-ecef');
var xyz = ecef(37.8043722, -122.2708026);
console.log(xyz);
```

output:

```
$ node ecef.js
[ -2694044.4111565403, -4266368.805493665, 3888310.602276871 ]
```

# methods

``` js
var ecef = require('geodetic-to-ecef')
```

## var xyz = ecef(lat, lon, elevation=0)

Return an array `xyz` of `[x,y,z]` coordinates in meters from `lat` and `lon`.

Optionally supply an `elevation` in meters.

# usage

This package ships with a command-line tool.

```
geodetic-to-ecef LAT LON
geodetic-to-ecef LAT LON ELEV

  Print the ECEF (X Y Z) coordinates for LAT LON
  and optionally an elevation ELEV in meters (default: 0).

```

example output:

```
$ geodetic-to-ecef -36.867 174.767
-5087568.564323121 465959.663344287 -3805595.1124150762
```

# install

To get the library:

```
npm install geodetic-to-ecef
```

To get the command-line tool:

```
npm install -g geodetic-to-ecef
```

# license

MIT
