const {ObjectId} = require("mongodb");



exports.createSalesMan = async function (db, salesMan){
    return (await db.collection('sales-men').insertOne(salesMan)).insertedId; //return unique ID
}
exports.updateSalesMan = async function (db,id, salesMan){
    let o_id = new ObjectId(id)
    return (await db.collection('sales-men').updateOne({_id:o_id},
        {$set:{firstname:salesMan.firstname,
                lastname:salesMan.lastname,
                email:salesMan.email,
                evalRecord: salesMan.evalRecord
    }})); //return unique ID
}

exports.getAllSalesMen = async function(db){
    return (await db.collection('sales-men').find({}).toArray());
}

exports.getSalesManByEmail = async function(db, email){
    return (await db.collection('sales-men').findOne({email : email}));
}

exports.getSalesManById = async function(db, id){
    let o_id = new ObjectId(id)
    return (await db.collection('sales-men').findOne({_id:o_id}));
}
exports.getSalesManByFirstAndLastName = async function(db, firstname,lastname){
    return (await db.collection('sales-men').findOne({firstname: firstname , lastname: lastname}));
}


exports.deleteSalesManById = async function(db, id){
    let o_id = new ObjectId(id)
    return (await db.collection('sales-men').deleteOne({_id:o_id}));
}