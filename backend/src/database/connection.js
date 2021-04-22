const ibmdb = require("ibm_db");
require('dotenv/config');

const connection = process.env.CONNECTION_DB2_DBUFT

module.exports = connection;