var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise 

    readBooksPromise (10000,books[0])
    .then(function (resolved) {
        readBooksPromise (7000,books[1])
        .then(function (resolved) {
            readBooksPromise (5000,books[2])
           
        })
    })
   
    .catch(function (reject) {
    
    });
   