//nomer 1
let pi= 3.14;
let luasLingkaran = (jari) => pi*jari*jari;
console.log(luasLingkaran(80));

let keliling = (jari) => 2*pi*jari;
console.log(keliling(20));



// nomer 2

let kalimat = ""

const tambahNama = (kalimat) => 
  kalimat+="";
  console.log(tambahNama("saya adalah seorang frontend developer"));





// nomer 3
let firstName="";
let lastName="";
let fullName="";
const newFunction = (firstName,lastName)=>
fullName=firstName+" "+lastName;
   
  

console.log(fullName=newFunction("William","Imoh"));


  


// nomer 4

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

  const {firstName, lastName,destination, occupation} = newObject
  console.log(newObject)



  

// nomer 5

  const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

let combined= [...west,...east]
console.log(combined);



