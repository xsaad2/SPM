/**
 * inserts a new user into database & hashes its password
 * @param db target database
 * @param {SalesMan} salesMan new salesMan
 * @return {Promise<any>}
 */
const EvalRecord = require("../models/EvalRecord");
const evalRecordService = require("../services/evalrecord-service")


exports.addEvalRecord = async function (req, res){
    const db = req.app.get('db');//get database

    const newEvalRecord = new EvalRecord(
        req.body.desc,
        req.body.year,
        req.body.targetValue,
        req.body.actualValue
    )
    await evalRecordService.createEvalRecord(db, newEvalRecord);
    res.send('created successfully');
    console.log('created EvalRecord');
}

exports.updateEvalRecord = async function (req, res) {
    const db = req.app.get('db');//get database

    const newEvalRecord = new EvalRecord(
        req.body.desc,
        req.body.year,
        req.body.targetValue,
        req.body.actualValue
    )
    await evalRecordService.updateEvalRecord(db,req.params._id, newEvalRecord);
    res.send('updated successfully');
    console.log('updated EvalRecord');
}

exports.getEvalRecords = async function (req, res) {
    const db = req.app.get('db');//get database
    res.send(await evalRecordService.getAllEvalRecords(db));
}

exports.getEvalRecordByYear = async function (req, res) {
    const db = req.app.get('db');//get database
    res.send(await evalRecordService.getEvalRecordByYear(db, req.params.year));
}

exports.getEvalRecordById = async function (req, res) {
    const db = req.app.get('db');//get database
    res.send(await evalRecordService.getEvalRecordById(db, req.params._id));
}

exports.deleteEvalRecordById = async function (req, res) {
    const db = req.app.get('db');//get database
    res.send(await evalRecordService.deleteEvalRecordById(db, req.params._id));
}

