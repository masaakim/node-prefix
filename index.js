var path = require('path')

var prefix = module.exports.nodePrefix = function () {
    return path.resolve(process.execPath, '..', '..', 'lib')
}

module.exports.globalModulePath = function (moduleName) {
    return prefix() + '/node_modules/' + moduleName
}
