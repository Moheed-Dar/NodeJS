const fs =require ('fs')
const path = require('path');
const dirPath=path.join(__dirname,'crud')
const filePath = `${dirPath}/apple.txt`
fs.writeFileSync(filePath,'this is the simple text file')
// 2nd method for creating the file
// fs.writeFileSync(`${dirPath}/index.txt`,"this is index file text")

