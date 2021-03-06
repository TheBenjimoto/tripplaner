'use strict';

const Sequelize = require('sequelize');

const db = require('./db');



var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.FLOAT
  },
  amenities: {
    type: Sequelize.STRING
}
})

module.exports = Hotel;
