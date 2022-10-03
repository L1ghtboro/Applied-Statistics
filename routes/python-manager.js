var { PythonShell } = require('python-shell');

module.exports = function runMyPython(data = 0) {
    PythonShell.run("app.py", null, function (err, results) {
        console.log(results)
        console.log("Python Executed")
    })
}

