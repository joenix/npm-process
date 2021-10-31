// Strict Mode
"use strict";

// Process
const process = require("child_process");

// Executer
function executer(callback) {
	// Use Promise
  return new Promise((resolve, reject) => {
		// Callback
    callback(pro => this.listen(pro, resolve, reject));
  });
}

//
class Process {
  constructor() {
    return (this.process = process), this;
  }

  executer(work) {
    return new Promise((resolve, reject) => {
      work(pro => {
        this.listen(pro, resolve, reject);
      });
    });
  }

  listen(pro, out, err) {
    pro.stdout.on("data", out), pro.stderr.on("data", err);
  }

  exec(command, options) {
    return this.executer(callback => callback(process.exec(command, options)));
  }

  spawn(command, argv, options) {
    return this.executer(callback =>
      callback(process.spawn(command, argv, options))
    );
  }

  file(file, argv, options) {
    return this.executer(callback =>
      callback(process.execFile(file, argv, options))
    );
  }
}

module.exports = new Process();
