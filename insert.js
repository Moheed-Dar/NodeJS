const dbConnect = require('./mongodb');
const insertData = async ()=>{
    const db= await dbConnect();
    const result = await db.insertMany([
        {Name:'hami',sec:'B',dept:'bsit',session:'new'},
        {Name:'max',sec:'B',dept:'bsit',session:'old'},
        {Name:'max',sec:'B',dept:'bsit',session:'old'}
]);
    if(result.acknowledged){
        console.log("data inserted")
    }
}
insertData();
