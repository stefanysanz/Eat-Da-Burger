const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.JAWSDB_URL || 'mysql://root:Enzo@2016@localhost/burgers_db')

module.exports = connection
