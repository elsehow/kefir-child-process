# kefir-child-process

`child_process.spawn` and `child_process.exec` as [kefir](https://rpominov.github.io/kefir/) streams 😎

## installation

`npm install kefir-child-process`

## usage

```javascript
var kefir_proc = require('kefir-child-process')

var executions = kefir_proc.spawn('tail', ['-f', 'debug.log'])
var d = executions.debounce(3000)
executions.filter(500error).throttle(500).log()
```

## API

see the [node child_process docs](https://nodejs.org/api/child_process.html), which this API matches.

### kefir_proc.execute(command, [options])

### kefir_proc.spawn(command, [args], [options])
