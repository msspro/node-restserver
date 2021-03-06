//Puerto
process.env.PORT = process.env.PORT || 3000;

// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Vencimiento token
process.env.SEED = process.env.SEED || 'SEEDDev';

// SEED -Semilla de autenticacion
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//BD
let urlDB;
if (process.env.NODE_ENV == 'dev')
    urlDB = 'mongodb://localhost:27017/cafe';
else
    urlDB = process.env.MONGO_URI; //'mongodb+srv://cafe-user:123456..@cluster0.q3ejl.mongodb.net/cafe';

process.env.URLDB = urlDB;