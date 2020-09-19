require('./config/config');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));


// mongoose.connect('mongodb://localhost:27017/cafe', (err, res) => {
//     if (err) throw error;

//     console.log('BD Online');
// });

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err;
    console.log('BD Online');
});

app.listen(process.env.PORT, () => {
    console.log("Escucando puerto 3000");
});