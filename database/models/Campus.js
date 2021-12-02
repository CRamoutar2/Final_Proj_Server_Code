const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:  {
      notEmpty: true
    }
  },

  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: '../campus_image.png',
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate:  {
      notEmpty: true
    }
  },

  description: {
    type: Sequelize.STRING,
  }

});

module.exports = Campus;