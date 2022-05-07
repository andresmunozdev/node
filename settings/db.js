const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost/db_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(data => console.log('DB is conected'))
    .then(err => console.error(err));

    