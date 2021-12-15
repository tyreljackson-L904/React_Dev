const express = require('express');

const recordRoutes = express.Router(); // router instance

const dbo = require('../db/conn');

const ObjectId = require("mongodb").ObjectId;

// get list of records from db
recordRoutes.route('/email-list').get((req, res) => {
    let db_connect = dbo.getDb('wait-list');
    db_connect
        .collection('records')
        .find({})
        .toArray((err, result) => {
            if (err) {
                throw err;
            }
            res.json(result);
        });
});

// This section will help you get a single record by id
recordRoutes.route("/email-list/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId( req.params.id )};
    db_connect
        .collection("records")
        .findOne(myquery, function (err, result) {
          if (err) throw err;
          res.json(result);
        });
  });
  
  // This section will help you create a new record.
  recordRoutes.route("/email-list/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
      fullName: req.body.full_name,
      email: req.body.email,
    };
    db_connect.collection("records").insertOne(myobj, function (err, res) {
      if (err) throw err;
      response.json(res);
    });
  });

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
let db_connect = dbo.getDb();
let myquery = { _id: ObjectId( req.params.id )};
let newvalues = {
    $set: {
    fullName: req.body.full_name,
    email: req.body.email,
    },
};
db_connect
    .collection("records")
    .updateOne(myquery, newvalues, function (err, res) {
    if (err) throw err;
    console.log("1 document updated");
    response.json(res);
    });
});
  
// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
let db_connect = dbo.getDb();
let myquery = { _id: ObjectId( req.params.id )};
db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.status(obj);
});
});

module.exports = recordRoutes;