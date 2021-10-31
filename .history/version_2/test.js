// Require Package
const { exec, spawn, file } = require("./index");

/* !!
 * Process Exec
 * ===== ===== =====
 * @command: <String>
 * @options: <Object>
 * ===== ===== =====
 */
exec("node -v")
  .then(data => console.log(`message: ${data}`))
  .catch(err => console.error(`error: ${err}`));
