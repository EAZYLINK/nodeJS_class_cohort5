const path = require('path')

const basename = path.basename('operator.js')
const basename2 = path.basename('path/operator.js')

// console.log(basename)
// console.log(basename2)


const extname = path.extname('operator.js')
// console.log(extname)

const newPath = path.join('base', 'name', 'file.js')
// console.log(newPath)

const absPath = path.resolve(newPath)
// console.log(absPath)
const dirname = path.dirname(absPath)
// console.log(dirname)

const isAbsolute = path.isAbsolute(absPath)
// console.log(isAbsolute)

const parsePath = path.parse(absPath)
console.log(parsePath)