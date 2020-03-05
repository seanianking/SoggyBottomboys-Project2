module.exports = {
  development: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  test: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  },
  production: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: false
  }
};
