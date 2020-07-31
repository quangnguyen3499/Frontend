var mysql = require('mysql');

var cnn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_js_1"
});

cnn.connect(function select(err) {
    if (!err)
        cnn.query("create table customers(name varchar(255), address varchar(255))", function(err, result) {});
    console.log("Created!");
});