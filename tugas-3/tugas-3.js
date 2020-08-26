

// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

//jawaban soal 1


 console.log(kataPertama+" "+kataKedua+" "+kataKetiga+" "+kataKeempat);


// soal 2
var a = 1;
var b = 2;
var c = 4;
var d = 5;

//jawaban soal 2
console.log(a+b+c+d)



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
var nilai=10;
/*nilai >= 80 indeksnya A
nilai >= 70 dan nilai < 80 indeksnya B
nilai >= 60 dan nilai < 70 indeksnya c
nilai >= 50 dan nilai < 60 indeksnya D
nilai < 50 indeksnya E*/

// jawaban soal 4
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
var button = 5;
switch(button) {
  case 1:   { console.log(); break; }
  case 2:   { console.log(); break; }
  case 3:   { console.log(); break; }
  case 4:   { console.log(); break; }
  case 5:   {console.log(tanggal+" "+"mei"+" "+tahun); break;}
  default:  { console.log(); }}