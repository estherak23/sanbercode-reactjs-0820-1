

//jawaban soal nomer 1

var angka = 1;
 while (angka < 21 )
 
 {if(angka%2==0)
    {
        console.log(angka+"-"+"i love coding" );
    } else
    {
       
    }
  
    angka++; // Mengubah nilai flag dengan menambahkan 1
  };



  for(var deret = 20; deret > 0; deret -= 2) {
    console.log(deret +'-'+"I will become a frontend developer");
  } 




//jawaban soal nomer 2
for(var deret = 1; deret <= 20; deret  ++) {
if (deret  %2==0) {
    
    console.log(deret+"-"+"Berkualitas");
} else {
   
   if (deret %3==0 ) {
    
    console.log(deret+"-"+"Berkualitasi love coding")

    } else{

   
    console.log(deret+"-"+"santai")

   }
   }
  
}


    //jawab soal nomer 3



    for (var i=1;i<=7;i++){
        for (var j=1;j<=i;j++){
            document.write("*");
        }
        document.write("<br>");
    }



    //jawaban nomer 4

    var kalimat=["saya", "sangat", "senang", "belajar", "javascript"]
    console.log(kalimat)




 // jawaban 5
 var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];

 for(let i = 0; i < daftarBuah.length; i++){ 
     daftarBuah.sort();
    console.log(daftarBuah[i]);
    
    }