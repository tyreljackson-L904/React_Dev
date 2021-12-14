const express = require('express');
const { urlencoded } = require('express');
const cors = requier('cors');

const app = express();

const PORT = process.env.PORT || 3002

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`running on port ${PORT}`))
 