const express = require('express');
const cors = require('cors');

const emailRoute = require('./routes/record.js')

const app = express();

const PORT = process.env.PORT || 5002

require('dotenv').config()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/record'))
// app.use('/record', emailRoute);

const dbo = require('./db/conn');

// app.get('/', (req, res) => {
//     res.json({message: 'Hello there, it works....for now'})
// });

app.listen(PORT, () => {
    dbo.connectToServer((err) => {
        if (err) console.error(err)
    });
    console.log(`running on port ${PORT}`)
});
 