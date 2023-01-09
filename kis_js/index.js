const express = require("express");


var http = require('http');
var fs = require('fs');

const app = express();
const router = express.Router()
const mysql = require('mysql')


const connection = mysql. createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'bummy1996731!',
  database: 'fsdata'
})




connection.connect()


app.get('/financialdata', function(req, res){
  let responseData = {};

  /*res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*"
  })*/

  let corpName = req.query.corpname;
  console.log(corpName)


  var sql_cash = "select * from cash where corpname = " + connection.escape(corpName);


//SQL Injection 방어
  const query_cash = connection.query(sql_cash, function(err, rows){
      console.log(Object.values(JSON.parse(JSON.stringify(rows))))
      if (err) throw err;
      if (rows.length) {
          responseData.result = 1;
          responseData.data1 = Object.values(JSON.parse(JSON.stringify(rows)));
          //console.log(typeof(rows))
      } else {
          responseData.result = 0
      }
      //console.log(responseData.data)
      //res.json(responseData)
  })

  var sql_noncash = "select * from noncash where corpname = " + connection.escape(corpName);

  const query_noncash = connection.query(sql_noncash, function(err, rows){
      if (err) throw err;
      if (rows.length) {
          responseData.result = 1;
          responseData.data2 = Object.values(JSON.parse(JSON.stringify(rows)));

          //res.status(200).json(responseData)
      } else {
          responseData.result = 0
          //res.status(200).json(responseData)
      }
      //console.log(responseData.data)

      //return res.status(200).json(responseData)
  })

  var sql_total_asset = "select * from totalasset where corpname = " + connection.escape(corpName);

  const query_total_asset = connection.query(sql_total_asset, function(err, rows){
      if (err) throw err;
      if (rows.length) {
          responseData.result = 1;
          responseData.data3 = Object.values(JSON.parse(JSON.stringify(rows)));

          //res.status(200).json(responseData)
      } else {
          responseData.result = 0
          //res.status(200).json(responseData)
      }
      //console.log(responseData.data)

      //return res.status(200).json(responseData)
  })

  var sql_fixed_asset = "select * from fixedasset where corpname = " + connection.escape(corpName);

  const query_fixed_asset = connection.query(sql_fixed_asset, function(err, rows){
      if (err) throw err;
      if (rows.length) {
          responseData.result = 1;
          responseData.data4 = Object.values(JSON.parse(JSON.stringify(rows)));

          /*res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "*"
          })*/

      } else {
          responseData.result = 0
          //res.status(200).json(responseData)
      }
      //console.log(responseData.data)

      //return res.status(200).json(responseData)
  })

  var sql_gp = "select * from gp where corpname = " + connection.escape(corpName);

  const query_gp = connection.query(sql_gp, function(err, rows){
      if (err) throw err;
      if (rows.length) {
          responseData.result = 1;
          responseData.data5 = Object.values(JSON.parse(JSON.stringify(rows)));

          /*res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "*"
          })*/

      } else {
          responseData.result = 0
          //res.status(200).json(responseData)
      }
      //console.log(responseData.data)

      //return res.status(200).json(responseData)
  })

  var sql_op = "select * from op where corpname = " + connection.escape(corpName);

  const query_op = connection.query(sql_op, function(err, rows){
      if (err) throw err;
      if (rows.length) {
          responseData.result = 1;
          responseData.data6 = Object.values(JSON.parse(JSON.stringify(rows)));

          /*res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "*"
          })*/

      } else {
          responseData.result = 0
          //res.status(200).json(responseData)
      }
      //console.log(responseData.data)

      //return res.status(200).json(responseData)
  })

  var sql_np = "select * from np where corpname = " + connection.escape(corpName);

  const query_np = connection.query(sql_np, function(err, rows){
      if (err) throw err;
      if (rows.length) {
          responseData.result = 1;
          responseData.data7 = Object.values(JSON.parse(JSON.stringify(rows)));

          /*res.writeHead(200, {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "*"
          })*/
          res.header({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': "*"
          }).send(responseData)
      } else {
          responseData.result = 0
          //res.status(200).json(responseData)
      }
      //console.log(responseData.data)

      //return res.status(200).json(responseData)
  })
})

app.get('/corpoutline', function(req, res){
  let responseData = {};

  /*res.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': "*"
  })*/

  let corpName = req.query.corpname;
  console.log(corpName)


  var sql_outline = "select * from outline where corpname = " + connection.escape(corpName);


//SQL Injection 방어
  const query_outline = connection.query(sql_outline, function(err, rows){
      console.log(Object.values(JSON.parse(JSON.stringify(rows))))
      if (err) throw err;
      if (rows.length) {
          responseData.result = 1;
          responseData.data = Object.values(JSON.parse(JSON.stringify(rows)));
          //console.log(typeof(rows))
      } else {
          responseData.result = 0
      }
      //console.log(responseData.data)
      res.header({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': "*"
      }).send(responseData)
  })

      //console.log(responseData.data)

      //return res.status(200).json(responseData)
  })

/*app.post('/financialdata', function(req, res){

  console.log("Yeah it works : ",req)

  let responseData = {};

  let corpName = req.query.corpname;
  console.log(corpName)


  var sql_cash = "select * from cash where corpname = " + connection.escape(corpName);


//SQL Injection 방어
  const query_cash = connection.query(sql_cash, function(err, rows){
      if (err) throw err;
      if (rows.length) {
          responseData.result = 1;
          responseData.data += rows;
          //console.log(typeof(rows))
      } else {
          responseData.result = 0
      }
      console.log(responseData.data)
      //res.json(responseData)
  })

  var sql_noncash = "select * from noncash where corpname = " + connection.escape(corpName);

  const query_noncash = connection.query(sql_noncash, function(err, rows){
      if (err) throw err;
      if (rows.length) {
          responseData.result = 1;
          responseData.data += rows;
      } else {
          responseData.result = 0
      }
      console.log(responseData.data)
      res.json(responseData)
  })
})*/
/*app.get('/noncash', function(req, res){
  let responseData = {};

  let corpName = req.query.corpname;

  var sql = "select * from noncash where corpname = " + connection.escape(corpName);

  const query = connection.query(sql, function(err, rows){
      if (err) throw err;
      if (rows.length) {
          responseData.result = 1;
          responseData.data = rows;
      } else {
          responseData.result = 0
      }
      res.json(responseData)
  })
}) */

app.get('/', function (req, res) {
res.sendFile(__dirname + '/public/index.html');
})

app.get('/index.html', function (req, res) {
res.sendFile(__dirname + '/public/index.html');
})


app.use("/assets",express.static(__dirname + "/public/assets"))

const port = 5000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
