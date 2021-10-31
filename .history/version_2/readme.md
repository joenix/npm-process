# NPM Process
> Easy Promise For Basic Process

``` javascript
// Require Package
const { exec, spawn, file } = require('npm-process')
```

``` javascript
/* !!
 * Process Exec
 * ===== ===== =====
 * @command: <String>
 * @options: <Object>
 * ===== ===== =====
 */
process.exec('node -v')
	.then( (data) => console.log( `message: ${data}` ) )
	.catch( (err) => console.error( `error: ${err}` ) )
```
