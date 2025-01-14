const dbConnect = require('./mongodb');

const updataData = async () => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: 'noman khan' }, // Use the correct field name as in the database
        { $set: {name:'noman khan durani',sec:'A' } } // Match the case of the field name
    );
    if (result.modifiedCount > 0) {
        console.log("Data updated successfully");
    } else {
        console.log("No matching document found or data already updated");
    }
};
updataData();
