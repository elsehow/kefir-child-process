# kefir-child-process

`child_process.spawn` and `child_process.exec` as [kefir](https://rpominov.github.io/kefir/) streams 😎

## installation

`npm install kefir-child-process`

## usage

```javascript
var kefir_proc = require('kefir-child-process')

function spawnSolution (problem) {
  return kefir_proc.spawn(
    './runner.js'
    , ['verify', 'test/solutions/' + problem + '.js'])
}

var executions = spawnSolution(problem)
var d = executions.debounce(3000)
return executions.bufferBy(d).map(joinString).map(solutionIsCorrect)
```

## API

see the [node child_process docs](https://nodejs.org/api/child_process.html), which this API matches.

### kefir_proc.execute(command)

### kefir_proc.spawn(command, [args], [options])
