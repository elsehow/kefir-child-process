var child_process = require('child_process')
  , Kefir = require('kefir')

function execute (command, options) {
  return Kefir.fromNodeCallback(function (cb) {
    child_process.exec(command, options, cb)
  })
}

function spawn (command, args, opts) {
  return Kefir.stream(function (emitter) {
    var proc = child_process.spawn(command, args, opts)
    proc.stdout.on('data', function (data) {
      emitter.emit(data.toString())
    })
    proc.stderr.on('data', function (err) {
      emitter.emit(err.toString())
    })
    proc.on('close', function (code) {
      proc = null
      emitter.end()
    })
    return function () {
      if (proc) {
        proc.kill()
        proc = null
      }
    }
  })
}

module.exports = {
  spawn: spawn
  , execute: execute
}
