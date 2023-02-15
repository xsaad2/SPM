const environment = {
  production: true,
  port: 8080,
  defaultAdminPassword: "haha1020",
  db: {
    host: "iar-mongo.inf.h-brs.de",
    port: 27017,
    username: "gryffindor",
    password: "gryffindor!",
    authSource: "gryffindor",
    name: "gryffindor",
  },
  corsOrigins: ["http://iar-frontend.inf.h-brs.de"],
};

exports.default = environment;
