const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');
const cors = require('cors');

//Mongo db gratuita de atlas mongodb
const uri = 'mongodb+srv://db_user_garbarino:hdcMIyCTaTo6TJ1Y@cluster0-5j8w8.mongodb.net/products?retryWrites=true&w=majority';
const options = { useNewUrlParser: true,  useUnifiedTopology: true }
db.connect(uri,options);

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
router(app);

app.listen(9000);
console.log('Escuchando en el puerto 9000');