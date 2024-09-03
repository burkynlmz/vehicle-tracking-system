const { Sequelize } = require('sequelize');
const pg = require('pg');

const sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/vts',{
    dialectModule: pg
});

module.exports = sequelize;