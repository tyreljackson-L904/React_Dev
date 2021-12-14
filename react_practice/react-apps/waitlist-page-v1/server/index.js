const express = require('express');
const { urlencoded } = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5002

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello there, it works....for now')
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));
 