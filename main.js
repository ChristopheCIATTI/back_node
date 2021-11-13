const mysql = require('mysql2');
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const ExempleService = require("./services/user")

const app = express()
app.use(bodyParser.urlencoded({ extended: false })) // URLEncoded form data
app.use(bodyParser.json()) // application/json
app.use(cors())
app.use(morgan('dev')); // toutes les requêtes HTTP dans le log du serveur

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    database : 'esimed_rattrapage_novembre_2021'
});

connection.connect();

const exempleService = new ExempleService(connection)
require('./api/exemple')(app, exempleService)

require('./datamodel/seeder')(exempleService)
   .then(app.listen(3333))


/*


const ExempleService = require("./services/exemple")

const app = express()
app.use(bodyParser.urlencoded({ extended: false })) // URLEncoded form data
app.use(bodyParser.json()) // application/json
app.use(cors())
app.use(morgan('dev')); // toutes les requêtes HTTP dans le log du serveur

//const connectionString = "postgres://user:password@192.168.56.101/instance"
const connectionString = "postgres://user1:default@192.168.56.101/base1"
const db = new pg.Pool({ connectionString: connectionString })
const exempleService = new ExempleService(db)
require('./api/exemple')(app, exempleService)
require('./datamodel/seeder')(exempleService)
    .then(app.listen(3333))


