
//jawaban soal no 1
function halo() {
    console.log("Halo Sanbers");
  }
   
  halo(); 



  //jawaban no 2
  function kalikan(num1,num2){
  return num1*num2


  }

var num1 = 12
var num2 = 4
 
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) 



//jawaban soal no 3


function introduce(name,age,address,hobby){
return "nama saya"+" "+name+"umur saya"+" "+age+" "+"alamat saya di"+address+" "+"dan saya punya hobby"+" "+hobby

}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"



//jawaban no 4

var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]

var newDaftarPeserta = {
       
        nama: "Asep",
        jenisKelamin: "laki-laki",
        hobby: "baca buku",
        tahunLahir: 1992
      
    }





console.log(newDaftarPeserta)





 //jawaban no 5
/*
 1.nama: strawberry
 warna: merah
 ada bijinya: tidak
 harga: 9000 
2.nama: jeruk
 warna: oranye
 ada bijinya: ada
 harga: 8000
3.nama: Semangka
 warna: Hijau & Merah
 ada bijinya: ada
 harga: 10000
4.nama: Pisang
 warna: Kuning
 ada bijinya: tidak
 harga: 5000
*/
//uraikan data tersebut menjadi array of object dan munculkan data pertama



 var buah = [{nama: "strawberry", warna: "merah", adabijinya: "tidak",harga: "9000 " }, 
 {nama: "jeruk", warna: "oranye", adabijinya: "ada",harga: "8000" },
 {nama: "Semangka", warna: "Hijau & Merah", adabijinya: "ada",harga: "10000" },
 {nama: "Pisang", warna: "Kuning", adabijinya: "tidak",harga: "5000" }]

buah.forEach(function(item){
    console.log("nama : " + item.nama +" "+"warna : "+item.warna+" "+"ada bijinya:"+" "+item.adabijinya+" "+"harga:"+item.harga)
 })




//no 6
var dataFilm = []
dataFilm.push()


