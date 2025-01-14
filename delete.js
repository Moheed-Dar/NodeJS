const dbConnect = require('./mongodb');
const deleteData =async ()=>{
    let data =await dbConnect();
    let result = await data.deleteMany({
        $or: [
            { name: 'asife' }
        ]
    });
    if(result.acknowledged){
        console.log("delete successfully")
    }
}
deleteData();