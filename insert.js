const dbConnect = require('./mongodb');
const insert = async ()=>{
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
insert();

// method 2

// const dbConnect = require('./mongodb');
// const insert = async () => {
//     const db = await dbConnect(); 
//     const result = await db.insertOne({ 
//         Name: 'hami',
//         sec: 'B',
//         dept: 'bsit',
//         session: 'new',
//     });
//     console.log(result);
// };
// insert();