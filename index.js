// Required modules
require('dotenv').config();
const inquirer = require('inquirer');
const mysql = require('mysql2');
const util = require('util');
const questions = require('./assets/questions');
const queries = require('./assets/queries');