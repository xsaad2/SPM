const salesMenService = require("../services/salesman-service.js");

exports.getEmployees = async function (req, res) {
  const db = req.app.get("db"); //get database

  await salesMenService
    .getAllSalesMen(db)
    .then((employees) => {
      //openhrmService.addEmployeesToDb(db, employees);
      res.send(employees);
    })
    .catch((_) => {
      res.status(500).send();
    });
};

/*exports.getEmployees = async function (req, res) {
    const db = req.app.get('db');//get database
    res.send(await salesmanService.getAllSalesMen(db));
}*/
