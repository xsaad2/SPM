const axios = require("axios");

class Client {
  constructor(
    fullName,
    aliasName,
    jobRole,
    jobTitle,
    placeOfBirth,
    department,
    organization,
    accountRating
  ) {
    this.fullName = fullName;
    this.aliasName = aliasName;
    this.jobRole = jobRole;
    this.placeOfBirth = placeOfBirth;
    this.jobTitle = jobTitle;
    this.department = department;
    this.organization = organization;
    this.accountRating = accountRating;
  }
}

const baseUrl = "https://sepp-crm.inf.h-brs.de/opencrx-rest-CRX";
const credentials = {
  username: "guest",
  password: "guest",
};
const config = {
  headers: {
    Accept: "application/json",
  },
  auth: credentials,
};
exports.getAccounts = async function (db) {
  console.log("in getAccounts from openCrx");
  try {
    const data = await axios.get(
      `${baseUrl}/org.opencrx.kernel.account1/provider/CRX/segment/Standard/account`,
      config
    );
    const mappedClients = data.data.objects.map((client) => {
      return new Client(
        client.fullName,
        client.aliasName,
        client.jobRole,
        client.jobTitle,
        client.placeOfBirth,
        client.department,
        client.organization,
        client.accountRating
      );
    });
    await addAccountsToDb(db, mappedClients);
    console.log(mappedClients);
    return mappedClients;
  } catch (error) {
    console.error("OpenCrx is not available " + error);
  }

  //console.log(data.data.objects);
};
exports.getProducts = async function (db) {
  console.log("in getProducts from OpenCRX");
  try {
    const data = await axios.get(
      `${baseUrl}/org.opencrx.kernel.product1/provider/CRX/segment/Standard/product`,
      config
    );
    const mappedProducts = data.data.objects.map((product) => {
      return new Product(
        product.productNumber,
        product.name,
        product.description
      );
    });
    await addProductsToDb(db, mappedProducts);
    return mappedProducts;
  } catch (error) {
    console.error("OpenCrx is not available");
  }

  //console.log(data.data.objects);
};
async function addProductsToDb(db, products) {
  products.forEach(async (product) => {
    if (await checkIfProductexists(db, product)) {
      return;
    }
    (await db.collection("products").insertOne(product)).insertedId;
    console.log("inserted" + product.name + "in DB");
  });
}
async function checkIfProductexists(db, product) {
  const productsArray = await db
    .collection("products")
    .find({ productNumber: product.productNumber })
    .toArray();
  return productsArray.length > 0;
}
async function addAccountsToDb(db, accounts) {
  accounts.forEach(async (account) => {
    if (await checkIfAccountExists(db, account)) {
      return;
    }
    (await db.collection("accounts").insertOne(account)).insertedId;
    console.log("inserted" + account.name + "in DB");
  });
}
async function checkIfAccountExists(db, account) {
  const accountsArray = await db
    .collection("accounts")
    .find({ fullName: account.fullName })
    .toArray();
  return accountsArray.length > 0;
}
