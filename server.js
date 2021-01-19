const express = require("express"); 
require('dotenv').config()
require('./config/mongobd');
const app = express();
const routes = require('./routes')
const cors = require('cors')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3001; 

app.use(cors(
    {
        "origin": "*",
        "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
        "preflightContinue": false,
        "optionsSuccessStatus": 204
      }
))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes())

app.listen(port, () => {  
console.log(`Server running at http://localhost:${port}`);
});