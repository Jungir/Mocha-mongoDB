const mongoose = require('mongoose');
const User = require('../models/user');
// require assert from node
const assert = require('assert');
mongoose.set('useFindAndModify', false);

describe('Updating records', function () {
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

    it('update one record in the db', function (done) {
        User.findOneAndUpdate({username : 'Chun-li'}, {username : 'Bob'}).then(function () {
            User.findOne({_id: ChunLi._id}).then(function (findRecord) {
                assert(findRecord.username === 'Bob');
                done();
            }).catch(function (err) {console.log(err);
              })
        }).catch(function (err) {console.log(err);
          })
 
    });

    it('increment phone by 3', function (done) {
        User.updateMany({}, {$inc: {phone: 3}}).then(function (){
            User.findOne({_id: ChunLi._id}).then(function (data) {
                assert(data.phone > ChunLi.phone);
                done();
            }).catch(function (err) {console.log(err);
            })
        }).catch(function (err) {console.log(err);
        })

    })

});