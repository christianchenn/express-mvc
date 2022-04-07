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
function Query(q){
    return new Promise((resolve, reject)=>{
        getDB().getConnection((err, conn)=>{
            if(err) {
                console.log(err)
                reject(null)
            }
            conn.query(q, (err, result)=>{
                conn.release()

                if(err){
                    console.log(err)
                    reject(null)
                }

                resolve(result)
            })
        })
    })
}
const QueryParam = async (query,param)=>{
    try{
        return new Promise( function(resolve,reject){
            getDB().query(query,param,function(err,result){
                err? reject(err) : resolve(result)
            })
        })
    }catch(err){
        console.log(err)
        return null
    }
}
module.exports = {getDB, Query, QueryParam}
