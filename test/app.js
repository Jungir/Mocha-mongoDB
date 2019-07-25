const mongoose = require('mongoose');
const User = require('../models/user');

//global level before hook
//Connect to the db before tests run
before (function (done) {
    mongoose.connect('mongodb://localhost:27017/mochaTest', {useNewUrlParser: true}).then(function() {console.log('connected to db');
    done();
    }).catch(function (err) {console.log('there is an error:', err);
    });

});

//before each runs everytime before every single test
//drop the DB

//global level before each
beforeEach(function (done) {
    //drop the collection
    mongoose.connection.dropDatabase().then(function () {
        done();
    });
})


// User.create({username : 'Yoshi', phone: 123}, function (err, response) {
//     if(err) console.log(err);
//     else {console.log(response)};
// })

