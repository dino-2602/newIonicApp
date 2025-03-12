const express = require('express');
const cors = require('cors');
const loginRouter = require('./routes/login')
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();


app.use(cors());
app.use(bodyParser.json()); //ohne wird kein Body übergeben
app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({ secret: 'myOwnSecret123', resave: true, saveUninitialized: true }));

app.use('/login', loginRouter);

//console.log(process.env.JWT_SECRET);


app.listen(8102,() => {console.log('Server gestartet... warten auf API-Aufrufe')})