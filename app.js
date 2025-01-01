const fs =require ('fs')
const path =require ('path');
const dirPath = path.join(__dirname,'files');
//it is used for creating multiples files
for(i=0;i<5;i++){
fs.writeFileSync(dirPath+"/sonu"+i+".txt","a simple text files")
// fs.writeFileSync(dirPath+`/data${i}.txt`,"a simple text files")
}
//it is used for  read files 
fs.readdir(dirPath,(err,item)=>{
  item.forEach((atom)=>{
    console.log(atom)
  })
})