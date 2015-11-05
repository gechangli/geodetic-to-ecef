#!/usr/bin/env node
var minimist = require('minimist')
var ecef = require('../')
var fs = require('fs')
var path = require('path')

var argv = minimist(process.argv.slice(2), { alias: { h: 'help' } })

if (argv.help) {
  usage(0)
} else if (process.argv.length < 4) {
  usage(1)
} else {
  var xyz = ecef(process.argv[2], process.argv[3], process.argv[4])
  console.log(xyz.join(' '))
}

function usage (code) {
  var r = fs.createReadStream(path.join(__dirname, 'usage.txt'))
  r.pipe(process.stdout)
  if (code) r.once('end', function () { process.exit(code) })
}
