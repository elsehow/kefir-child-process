var child_process = require('child_process')
  , Kefir = require('kefir')

function execute (command) {
  return Kefir.fromNodeCallback(function (cb) {
    child_process.exec(command, cb)
  })
}

function spawn (command, args, opts) {
  var proc = child_process.spawn(command, args, opts)
  return Kefir.stream(function (emitter) {
    proc.stdout.on('data', function (data) {
      emitter.emit(data.toString())
    })
    proc.stderr.on('data', function (err) {
      emitter.emit(err.toString())
    })
    proc.on('close', function (code) {
      emitter.end()
    })
  })
}

module.exports = {
  spawn: spawn
  , execute: execute
}
