const { MongoClient } = require('mongodb');
require('dotenv').config()
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

if(Db === undefined) throw new Error("ATLAS_URI undefined")

var _db;

module.exports = {
    connectToServer: (callback) => {
        client.connect((err, db) => {
            if (db) {
                _db = db.db('myFirstDatabase');
                console.log('Successfully connect to MongoDB.')
            }
            return callback(err);
        });
    },

    getDb: () => {
        return _db;
    },
};

