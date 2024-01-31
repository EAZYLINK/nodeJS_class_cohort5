const fs = require('fs')

// TODO: Make a file directory
// fs.mkdir('folder', (err)=> {
//     if (err) console.log(err.message)
// })

// TODO: Write the content to a file
fs.writeFile('folder/test.txt', 'This is a test file', (err) =>{
    if (err) console.log(err.message)
})

// TODO: Write the content to a file
// fs.writeFile('folder/test.txt', 'This is the second test file', (err) =>{
//     if (err) console.log(err.message)
// })

// TODO: Append the content to a file
// fs.appendFile('folder/test.txt', '\n This is the second test file', (err) =>{
//     if (err) console.log(err.message)
// })

// TODO: Read and display the content of a file
// fs.readFile('folder/test.txt', (err, data) => {
//     if (err) console.log(err.message)
//     console.log(data.toString())
// })

// TODO: Check if file exist
// fs.exists('folder/test.txt', (err) => {
//     if (err) console.log(err.message)
//     console.log('file exist')
// })
// console.log(fs.existsSync('folder/test.txt'))

// fs.rename('folder/test.txt', 'folder/newTest.txt', (err) =>{
//     if (err) console.log(err.message)
//     console.log('File renamed successfully!')
// })

// TODO: delete a file
// fs.unlink('folder/newTest.txt', (err) => {
//     if (err) console.log(err.message)
//     console.log('File deleted successfully!')
// })

// TODO: copy file
// fs.copyFile('folder/test.txt', 'folder/testCopy.txt', (err) => {
//     if (err) console.log(err.message)
//     console.log('File copied successfully!')
// })