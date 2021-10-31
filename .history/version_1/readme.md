# NPM Process
> Easy Promise For Basic Process

``` javascript
// Require Package
const process = require('npm-process')
```

``` javascript
/* !!
 * Process Exec
 * ===== ===== =====
 * @command: <String>
 * @sync: <Boolean>
 * @options: <Object>
 * ===== ===== =====
 */
process.exec('node -v', true)
	.then( (data) => console.log( `message: ${data}` ) )
	.catch( (err) => console.error( `error: ${err}` ) )
```

``` javascript
/* !!
 * Process File
 * ===== ===== =====
 * @file: <String>
 * @args: <Array>
 * @sync: <Boolean>
 * @options: <Object>
 * ===== ===== =====
 */
process.file('node', ['-v'], false)
	.then( (data) => console.log( `message: ${data}` ) )
	.catch( (err) => console.error( `error: ${err}` ) )
```

``` javascript
/* !!
 * Process Spawn
 * ===== ===== =====
 * @command: <String>
 * @args: <Array>
 * @sync: <Boolean>
 * @options: <Object>
 * ===== ===== =====
 */
process.spawn('node', ['-v'], true)
	.then( (data) => console.log( `message: ${data}` ) )
	.catch( (err) => console.error( `error: ${err}` ) )
```

``` javascript
/* !!
 * Process Fork
 * ===== ===== =====
 * @path: <String>
 * @args: <Array>
 * @options: <Object>
 * ===== ===== =====
 * !tip: '.then' will run at 'child process' send message ...
 * ===== ===== =====
 */
process.fork('example-command.js')
	.then( (data) => console.log( `message: ${data}` ) )
	.catch( (err) => console.error( `error: ${err}` ) )
```
