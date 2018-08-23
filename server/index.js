const express = require('express');
const cors = require('cors')
const {json} = require('body-parser')

const PORT = 1738;


const app = express();
app.use(json());
app.use(cors());



app.listen(PORT, console.log(`Listening on port ${PORT}`));