const express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv')

function dbConnection() {
   mongoose.connect(process.env.MONGODBURI)
      .then(() => console.log('Database Connected!'));
}

module.exports = dbConnection