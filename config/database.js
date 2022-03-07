const mysql = require('mysql');
const config = require("./config")
let DB
function getDB(){
   if(!DB){
       DB = mysql.createPool({
           host: process.env.MYSQL_HOST || config.database.host,
           user: process.env.MYSQL_USER || config.database.user,
           connectionLimit: process.env.MYSQL_CONNECTION_LIMIT || config.database.connectionLimit,
           database: config.database.database,
           debug: config.database.debug
       });
   }
   return DB
}
module.exports = getDB()
