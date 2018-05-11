const mysql = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'heaton1985',
  database : 'users'
});
db.connect(function(err){
  if(err) throw err;
});
module.exports = db;
