const mysql = require('mysql2');
const dbConnection = mysql.createPool({
    host     : 'us-cdbr-east-04.cleardb.com', 
    user     : 'b19f3080487e41',        
    password : '90771c04',    
    database : 'heroku_233085447a473b7'      
}).promise();
module.exports = dbConnection;