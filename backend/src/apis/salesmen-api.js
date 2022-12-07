/**
 * inserts a new user into database & hashes its password
 * @param db target database
 * @param {SalesMan} salesMan new salesMan
 * @return {Promise<any>}
 */
const SalesMan = require("../models/SalesMan");
const salesmanService = require("../services/salesman-service")


exports.addSalesman = async function (req, res){
    const db = req.app.get('db');//get database

    const newSalesMan = new SalesMan(
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.evalRecord
    )
    await salesmanService.createSalesMan(db, newSalesMan);
    res.send('created successfully');
    console.log('created salesman');
}

exports.updateSalesMen = async function (req, res) {
    const db = req.app.get('db');//get database

    const newSalesMan = new SalesMan(
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.evalRecord
    )
    await salesmanService.updateSalesMan(db,req.params._id, newSalesMan);
    res.send('updated successfully');
    console.log('updated salesman');
}

exports.getSalesMen = async function (req, res) {
    const db = req.app.get('db');//get database
    res.send(await salesmanService.getAllSalesMen(db));
}

exports.getSalesManByEmail = async function (req, res) {
    const db = req.app.get('db');//get database
    res.send(await salesmanService.getSalesManByEmail(db, req.params.email));
}

exports.getSalesManById = async function (req, res) {
    const db = req.app.get('db');//get database
    res.send(await salesmanService.getSalesManById(db, req.params._id));
}

exports.getSalesManByFirstAndLastName = async function (req, res) {
    const db = req.app.get('db');//get database
    res.send(await salesmanService.getSalesManByFirstAndLastName(db, req.params.firstname,req.params.lastname));
}

exports.deleteSalesManById = async function (req, res) {
    const db = req.app.get('db');//get database
    res.send(await salesmanService.deleteSalesManById(db, req.params._id));
}

