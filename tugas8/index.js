// di index.js
var readBooks = require ('./callback');
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
readBooks(10000, books[0], function(check){
    readBooks(7000, books[1], function(check){
        readBooks(5000, books[2], function(check){
            readBooks(1000, books[3], function(check){

            })
        })
    }) 
}) 

