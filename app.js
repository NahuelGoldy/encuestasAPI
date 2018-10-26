
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const encuestasRoutes = require('./routes/encuestaRoutes');

// const ref = admin.database().ref('encuestas');
// ref.push({
//     'data': 'this is data'
// });

// Allow CORS
app.use(cors({origin: '*'}));
app.use(bodyParser.json());

// custom Routes
app.use('/encuestas', encuestasRoutes);

app.use('/hola', (req, res) => {
    res.json('Hola mundo!');
});

// if got to this point, means route error
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500 );
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;