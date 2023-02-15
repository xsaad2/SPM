const { ObjectId } = require("mongodb");

const openhrmService = require("../services/openhrm-service.js");
const openCrxService = require("../services/opencrx-service.js");
const bonusCalculationService = require("../services/bonus-calculation-service.js");

exports.createSalesMan = async function (db, salesMan) {
  return (await db.collection("sales-men").insertOne(salesMan)).insertedId; //return unique ID
};
/*exports.updateSalesMan = async function (db, id, salesMan) {
  let o_id = new ObjectId(id);
  return await db.collection("sales-men").updateOne(
    { _id: o_id },
    {
      $set: {
        firstname: salesMan.firstname,
        lastname: salesMan.lastname,
        email: salesMan.email,
        evalRecord: salesMan.evalRecord,
      },
    }
  ); //return unique ID
};*/

exports.getAllSalesMen = async function (db) {
  await openhrmService.getEmployeesFromOpenHRM(db);
  return await db.collection("sales-men").find({}).toArray();
};
exports.getProducts = async function (db) {
  await openCrxService.getProducts(db);
  return await db.collection("products").find({}).toArray();
};
exports.getAccounts = async function (db) {
  await openCrxService.getAccounts(db);
  return await db.collection("accounts").find({}).toArray();
};

exports.getBonuses = async function (db) {
  //await openhrmService.getBonusFromOpenHRM(db, id);
  return await db.collection("pending-bonuses").find({}).toArray();
};
exports.getApprovedBonusesfromDb = async function (db) {
  //await openhrmService.getBonusFromOpenHRM(db, id);
  return await db.collection("approved-bonuses").find({}).toArray();
};

exports.addBonusToDb = async function (db, bonus) {
  //await openhrmService.getBonusFromOpenHRM(db,id);
  return await db
    .collection("pending-bonuses")
    .insertOne(await bonusCalculationService.calculateBonus(bonus)).insertedId;
};
exports.deletePendingBonusFromDb = async function (db, bonus) {
  //let o_id = new ObjectId(bonus._id);
  return await db
    .collection("pending-bonuses")
    .deleteOne({ _id: ObjectId(bonus._id) });
};

exports.addApprovedBonusToDb = async function (db, bonus) {
  //await openhrmService.getBonusFromOpenHRM(db,id);
  return await db.collection("approved-bonuses").insertOne(bonus).insertedId;
};

exports.getSalesManByEmail = async function (db, email) {
  return await db.collection("sales-men").findOne({ email: email });
};

exports.getSalesManById = async function (db, ecode) {
  //let o_id = new ObjectId(id);
  return await db.collection("sales-men").findOne({ code: ecode });
};
exports.getSalesManByFirstAndLastName = async function (
  db,
  firstname,
  lastname
) {
  return await db
    .collection("sales-men")
    .findOne({ firstname: firstname, lastname: lastname });
};

exports.deleteSalesManById = async function (db, id) {
  let o_id = new ObjectId(id);
  return await db.collection("sales-men").deleteOne({ _id: o_id });
};
