const mongoose = require('mongoose');
const User = require('../models/user');
// require assert from node
const assert = require('assert');

//describe all tests 
describe('Saving records', function () {
    //create indive tests
    // pass done () as a first param to the second param of it()
    it('saves one record to db', function (done) {
        //what we want to expect
        const ChunLi = new User({
            username: 'Chun-li',
            phone: 111
        });
        ChunLi.save().then(function () {
            assert(ChunLi.isNew === false);
            done();
        }).catch(function (err) {console.log(err);
        });
    });

     


});