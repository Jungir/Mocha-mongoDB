const assert = require('assert');
const mongoose = require('mongoose');
const Author = require('../models/author');
mongoose.set('useFindAndModify', false);


describe('Nesting records', function () {
    

    //create test 
    it('creates an author with sub-docs', function(done){
        let Rowling = new Author({
            name: 'J.K. Rowling',
            age: 40,
            books : [{
                title: 'Harry Potter 1',
                pages: 400,
            }],
        })

        Rowling.save().then(function(){
            Author.findOne({name: 'J.K. Rowling'}).then(function (author) {
                assert(author.books.length === 1);
                done();
            }).catch(function (err) {console.log(err);
            })
        }).catch(function (err) {console.log(err);
        })
    })

    it('add a book to an author', function (done) {
        let Rowling = new Author({
            name: 'J.K. Rowling',
            age: 40,
            books : [{
                title: 'Harry Potter 1',
                pages: 400,
            }],
        });
        Rowling.save().then(function () {
            Author.findOne({name: 'J.K. Rowling'}).then(function (author) { 
                //add a book to the books array
                author.books.push({title: 'Harry Potter 2', pages: 500});
                author.save().then(function () {
                    Author.findOne({name: 'J.K. Rowling'}).then(function (authorNew) {
                        assert(authorNew.books.length > 1)
                        done(); 
                    }).catch(function (err) {console.log(err);
                    })
                }).catch(function (err) {console.log(err);
                })
            }).catch(function (err) {console.log(err);
            })
          }).catch(function (err) {console.log(err);
          })
    })
})