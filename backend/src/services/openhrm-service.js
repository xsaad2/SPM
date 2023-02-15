const axios = require("axios");
const qs = require("querystring");
const { getEmployees } = require("../apis/employee-api");
const Employee = require("../models/Employee");

const baseUrl = "https://sepp-hrm.inf.h-brs.de/symfony/web/index.php";
let accessToken = null;
let employees = null;

const body = qs.stringify({
  client_id: "api_oauth_id",
  client_secret: "oauth_secret",
  grant_type: "password",
  username: "belkhou",
  password: "*Safb02da42Demo$",
});

let config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  },
};

async function res() {
  try {
    const res = await axios.post(`${baseUrl}/oauth/issueToken`, body, config);
    accessToken = res.data["access_token"];
    console.log(accessToken);
  } catch (error) {
    console.error("Could not get Token because OpenHRm is not available;");
  }
}
res();
exports.getEmployeesFromOpenHRM = async function (db) {
  console.log("in getEmployeesFromOpenHRM");
  let contactDetails = null;
  try {
    contactDetails = await axios.get(`${baseUrl}/api/v1/employee/search`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });
    await addEmployeesToDb(db, contactDetails.data.data);
    return contactDetails.data.data;
  } catch (error) {
    console.error("OpenHRM is Not Available: " + error);
    res();
  }
};

async function addEmployeesToDb(db, employees) {
  employees.forEach(async (employee) => {
    if (await checkifexists(db, employee)) {
      return;
    }
    (await db.collection("sales-men").insertOne(employee)).insertedId;
    console.log("inserted" + employee.name + "in DB");
  });
}

async function checkifexists(db, employee) {
  const salesMenArray = await db
    .collection("sales-men")
    .find({ code: employee.code, employeeId: employee.employeeId })
    .toArray();
  return salesMenArray.length > 0;
}

exports.getBonusFromOpenHRM = async function (db, id) {
  console.log("in getBonusFromOpenHRM");
  let response = null;
  try {
    response = await axios.get(`${baseUrl}/api/v1/employee/${id}/bonussalary`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("OpenHRM is Not Available: " + error);
    res();
  }
};
exports.getBonusFromOpenHRM = async function (db, id) {
  console.log("in getBonusFromOpenHRM");
  let response = null;
  try {
    response = await axios.get(`${baseUrl}/api/v1/employee/${id}/bonussalary`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("OpenHRM is Not Available: " + error);
    res();
  }
};
exports.addBonusToOrangeHRM = async function (db, bonus) {
  newbonus = { year: bonus.yearOfPerf, value: bonus.totalBonus };
  const contactDetails = await axios.post(
    `${baseUrl}/api/v1/employee/3/bonussalary`,
    newbonus,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    }
  );
  const data = contactDetails;
  console.log(contactDetails.data.data);
};
