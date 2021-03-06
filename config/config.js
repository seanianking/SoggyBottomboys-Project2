module.exports = {

  development: {
    username: "root",
    password: process.env.MYSQL_PASSWORD,
    database: "soggy_bottom_league",
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
    username: process.env.JAWSDB_USERNAME,
    password: process.env.JAWSDB_PASSWORD,
    database: process.env.JAWSDB_DATABASE,
    host: process.env.JAWSDB_HOST,
    dialect: "mysql",
    operatorsAliases: false
  }
};