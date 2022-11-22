/**
 * inserts a new user into database & hashes its password
 * @param db target database
 * @param {SalesMan} salesMan new salesMan
 * @return {Promise<any>}
 */
createSalesMan = async function (db, salesMan){
    return (await db.collection('sales-men').insertOne(salesMan)).insertedId; //return unique ID
}


exports.addSalesman = async function (req, res){
    const db = req.app.get('db');//get database

    const SalesMan = require("../models/SalesMan");

    const newSalesMan = new SalesMan(
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.evalRecord
    )
    this.createSalesMan(db, newSalesMan);
    res.send('created successfully');
    console.log('created salesman');
}

getAllSalesMen = async function(db){
    return (await db.collection('sales-men').find({}));
}

exports.getSalesMen = function (req, res) {

    const db = req.app.get('db');//get database
    res.send(this.getAllSalesMen(db));

}
