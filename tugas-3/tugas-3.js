

// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

//jawaban soal 1


 console.log(kataPertama+" "+kataKedua+" "+kataKetiga+" "+kataKeempat);


// soal 2
var kataPertama= "1";
var kataKedua =" 2";
var kataKetiga =" 4";
var kataKeempat= "5";

//jawaban soal 2
var kataPertama= parseInt("1") ;
var kataKedua =parseInt(" 2");
var kataKetiga =parseInt(" 4");
var kataKeempat= parseInt("5");

console.log(kataPertama+kataKedua+kataKetiga+kataKeempat);



//soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = "javascript";
var kataKetiga ="itu";
var kataKeempat = "keren"; 
var kataKelima="sekali";
// jawaban soal 3
console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);


//soal 4
/*

nilai >= 80 indeksnya A
nilai >= 70 dan nilai < 80 indeksnya B
nilai >= 60 dan nilai < 70 indeksnya c
nilai >= 50 dan nilai < 60 indeksnya D
nilai < 50 indeksnya E
*/
// jawaban soal 4
var nilai=10;
if (nilai >= 80  ) {
     
    console.log("a");
} else {

    if (nilai >= 70 && nilai < 80  ) {
        console.log("b");

    } else {
        
        if (nilai >= 60 && nilai < 70 ) {
            
            console.log("c");
        } else {
            if (nilai >= 50 && nilai < 60 ) {

                console.log("d");
            } else {
                if (nilai < 50 ) {

                    console.log("e");
                } else {
               
                    
                }
            }
        }
    }
    
}




//soal 5
var tanggal = 23;
var bulan = 5;
var tahun = 1997;

//jawaban soal 5
var bulan = 5;
switch(bulan) {
  case 1:   { console.log(tanggal+" "+"januari"+" "+tahun); break; }
  case 2:   { console.log(tanggal+" "+"febuari"+" "+tahun); break; }
  case 3:   { console.log(tanggal+" "+"maret"+" "+tahun); break; }
  case 4:   { console.log(tanggal+" "+"april"+" "+tahun); break; }
  case 5:   {console.log(tanggal+" "+"mei"+" "+tahun); break;}
  case 6:   {console.log(tanggal+" "+"juni"+" "+tahun); break;}
  case 7:   {console.log(tanggal+" "+"juli"+" "+tahun); break;}
  case 8:   {console.log(tanggal+" "+"agustus"+" "+tahun); break;}
  case 9:   {console.log(tanggal+" "+"september"+" "+tahun); break;}
  case 10:   {console.log(tanggal+" "+"oktober"+" "+tahun); break;}
  case 11:   {console.log(tanggal+" "+"november"+" "+tahun); break;}
  case 12:   {console.log(tanggal+" "+"desember"+" "+tahun); break;}
  default:  { console.log(); }}