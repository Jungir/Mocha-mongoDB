const mongoose = require('mongoose');
const User = require('../models/user');
// require assert from node
const assert = require('assert');

describe('Finding records', function () {
    let ChunLi;
    //runs before each test in theis particular describe blog (finding people);
    beforeEach(function (done) {
        ChunLi = new User({
            username: 'Chun-li',
            phone: 111
        });
        ChunLi.save().then(function () {
            done();
        }).catch(function (err) {console.log(err);
        });
    
    });

    it('finds one record', function (done) {
        User.findOne({username:'Chun-li'}).then(function (foundUser) {
            assert(foundUser.username === 'Chun-li');
            done();
        }).catch(function (err) {console.log(err);}
        )
 
    });

    it('finds by id', function (done) {
        User.findById( {_id: ChunLi._id}).then(function (foundUser) {
            assert(foundUser._id.toString() === ChunLi._id.toString());
            done();
        }).catch(function (err) {console.log(err);}
        )
 
    });
});