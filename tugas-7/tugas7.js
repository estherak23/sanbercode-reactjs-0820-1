
//soal 1
//Release 0
class Animal {
    constructor(name) {
      this.animalname = name;
      this.legs = 4;
      this.darahdingin=false;
    }
    get Anam() {
      return this.animalname;
    }

    get Alegs(){
        return this.legs;
    }

    get Adarahdingin(){
        return this.darahdingin;
    }


    set Anam(x) {
      this.animalname = x;
    }

   

  }


  myanimal = new Animal("shaun");
  console.log(myanimal.Anam);
  console.log(myanimal.Alegs);
  console.log(myanimal.Adarahdingin);



  // Release 1

  class Ape extends Animal{

    constructor(name,yell){
super(name)
this.animalyell=yell;

    }

  
    yelling() {
        return  this.animalyell;
      }
    }

var sungokong = new Ape("kera sakti","auooo")
console.log(sungokong.Anam);
console.log(sungokong.yelling());


  
class Frog extends Animal{

    constructor(name,jump){
super(name)
this.animaljump=jump;

    }

  
    jumping() {
        return  this.animaljump;
      }
    }

    var kodok = new Frog("buduk","hop-hop")
console.log(kodok.Anam);
console.log(kodok.jumping());



//soal 2
/*
function Clock({ template }) {
  
    var timer;
  
    function render() {
      var date = new Date();
  
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      var output = template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    this.stop = function() {
      clearInterval(timer);
    };
  
    this.start = function() {
      render();
      timer = setInterval(render, 1000);
    };
  
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start(); */



class Clock {

    constructor(template){

this.template=template;
this.timer;


    }
    

        render  () {
            let date = new Date();

            let hours = date.getHours();
            if (hours < 10) hours = '0' + hours;
        
            let mins = date.getMinutes();
            if (mins < 10) mins = '0' + mins;
        
            let secs = date.getSeconds();
            if (secs < 10) secs = '0' + secs;
        
            let output = template
              .replace('h', hours)
              .replace('m', mins)
              .replace('s', secs);
        
            console.log(output);


            
            stop ()
            {
                clearInterval(this.timer);
              }
            
              start()
              {
               this.render();
              setInterval(this.render.bind(this), 1000);
              }
    }


   
   

}

var clock = new Clock({template: 'h:m:s'});
clock.start();  
