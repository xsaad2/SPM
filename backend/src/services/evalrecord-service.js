const {ObjectId} = require("mongodb");



exports.createEvalRecord = async function (db, evalRecord){
    return (await db.collection('evalRecord').insertOne(evalRecord)).insertedId; //return unique ID
}
exports.updateEvalRecord = async function (db,id, evalRecord){
    let o_id = new ObjectId(id)
    return (await db.collection('evalRecord').updateOne({_id:o_id},
        {$set:{desc:evalRecord.desc,
                year:evalRecord.year,
                targetValue:evalRecord.targetValue,
                actualValue: evalRecord.actualValue
            }}));
}

exports.getAllEvalRecords = async function(db){
    return (await db.collection('evalRecord').find({}).toArray());
}

exports.getEvalRecordByYear = async function(db, year){
    return (await db.collection('evalRecord').find({year: parseInt(year)}).toArray());
}

exports.getEvalRecordById = async function(db, id){
    let o_id = new ObjectId(id)
    return (await db.collection('evalRecord').findOne({_id:o_id}));
}

exports.deleteEvalRecordById = async function(db, id){
    let o_id = new ObjectId(id)
    return (await db.collection('evalRecord').deleteOne({_id:o_id}));
}