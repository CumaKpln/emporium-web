// models/index.js
const fs = require("fs");
const Sequelize = require("sequelize");
const path = require("path");
const dbConfig = require(path.join(__dirname, "..", "config", "config.json"));

const sequelize = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password,
  {
    host: dbConfig.development.host,
    dialect: dbConfig.development.dialect,
  }
);

module.exports = { Sequelize, sequelize };
