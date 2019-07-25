const mongoose = require('mongoose');
const User = require('../models/user');
// require assert from node
const assert = require('assert');
mongoose.set('useFindAndModify', false);

describe('Deleting records', function () {
    this.timeout(5000);
    let ChunLi;
    //runs before each test in this particular describe blog (deleting people);
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

    it('deletes one record from db', function (done) {
       User.findOneAndRemove({username : 'Chun-li'}).then(function () {
           User.findOne({username: 'Chun-li'}).then(function (data){
               assert(data === null);
               done();
           }).catch(function (err){
               console.log();
           });
       }).catch(function (err) {
           console.log(err);
       });
 
    });

});