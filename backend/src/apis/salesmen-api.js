/**
 * inserts a new user into database & hashes its password
 * @param db target database
 * @param {SalesMan} salesMan new salesMan
 * @return {Promise<any>}
 */
const SalesMan = require("../models/SalesMan");
const salesmanService = require("../services/salesman-service");
const openhrmService = require("../services/openhrm-service.js");

exports.addSalesman = async function (req, res) {
  const db = req.app.get("db"); //get database

  const newSalesMan = new SalesMan(
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.evalRecord
  );
  await salesmanService.createSalesMan(db, newSalesMan);
  res.send("created successfully");
  console.log("created salesman");
};

exports.updateSalesMen = async function (req, res) {
  const db = req.app.get("db"); //get database

  const newSalesMan = new SalesMan(
    req.body.firstname,
    req.body.lastname,
    req.body.email,
    req.body.evalRecord
  );
  await salesmanService.updateSalesMan(db, req.params._id, newSalesMan);
  res.send("updated successfully");
  console.log("updated salesman");
};

exports.getSalesMen = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(await salesmanService.getAllSalesMen(db));
  //await openhrmService.getEmployeesFromOpenHRM(db);
};
exports.getProducts = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(await salesmanService.getProducts(db));
};
exports.getAccounts = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(await salesmanService.getAccounts(db));
  //await openhrmService.getEmployeesFromOpenHRM(db);
};
exports.getBonuses = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(await salesmanService.getBonuses(db));
  //await openhrmService.getEmployeesFromOpenHRM(db);
};
exports.getApprovedBonuses = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(await salesmanService.getApprovedBonusesfromDb(db));
  //await openhrmService.getEmployeesFromOpenHRM(db);
};

exports.addBonus = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(await salesmanService.addBonusToDb(db, req.body));
  //await openhrmService.getEmployeesFromOpenHRM(db);
};
exports.deletePendingbonus = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(await salesmanService.deletePendingBonusFromDb(db, req.body));
  //await openhrmService.getEmployeesFromOpenHRM(db);
};

exports.addApprovedBonus = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(await salesmanService.addApprovedBonusToDb(db, req.body));
  //await openhrmService.getEmployeesFromOpenHRM(db);
};

exports.getSalesManByEmail = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(await salesmanService.getSalesManByEmail(db, req.params.email));
};

exports.getSalesManById = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(await salesmanService.getSalesManById(db, req.params.code));
};

exports.getSalesManByFirstAndLastName = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(
    await salesmanService.getSalesManByFirstAndLastName(
      db,
      req.params.firstname,
      req.params.lastname
    )
  );
};

exports.deleteSalesManById = async function (req, res) {
  const db = req.app.get("db"); //get database
  res.send(await salesmanService.deleteSalesManById(db, req.params._id));
};
