const Encuesta = require('../model/encuesta');
const admin = require('firebase-admin');
const serviceAccount = require('../config/service-account.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://test-react-native-198018.firebaseio.com'
});
const ref = admin.database().ref('encuestas');

exports.post = (req, res) => {
    return ref.set(new Encuesta(req.body))
        .then(enc => {
            return enc;
        })
        .catch(err => {
            res.status(500).send(err);
        });
};

exports.getAll = (req, res) => {
    // TODO hacer el get a Firebase
    return;
};