function Carrousel(type) {
  this.type = type;

  this.clearList = () => {
//para que el this haga referencia al contexto en el que se encuentra, tiene que estar dentro de una
//arrow function
    this.active.bandeja.style.display = "none";
    this.active.btn.style.backgroundColor = "transparent";
  }

  this.addList = () => {
    this.active.bandeja.style.display = "block";
    this.active.btn.style.backgroundColor = "#D16C1A";
  }

  this.whatIsThis = (temp) => {
    this.clearList();
    this.active = temp;
    this.addList();
  }

  this.temps = [
    new Temp(2018,this.type,this.whatIsThis),
    new Temp(2019,this.type,this.whatIsThis),
    new Temp(2020,this.type,this.whatIsThis),
  ]
  
  this.active = this.temps[0];
}

function Temp (year,type,callback){
  this.btn = document.getElementById(`temp-${year}-${type}`);
  this.bandeja = document.getElementById(`bandeja-${year}-${type}`);
  this.btn.addEventListener("click", () => {
    callback(this);
  });
}


campe = new Carrousel("camperas");
zapa = new Carrousel("zapatillas");





// function Temps(season, carrousel) {
//     this.season = season;
//     this.carrousel = carrousel;
//     this.season = "foo";
//     this.loggedIn = function(){
//       console.log(this.season);
//     }
// }

// // console.log(Temps);
// season2018 = new Temps("season2018", "carrousel1");
// // console.log(season2018);
// season2018.loggedIn();

// ------------------------------------------------------------------------------------

// const seasons = Array.prototype.slice.call(document.querySelectorAll(".btn--temp"))
// const carrousels = Array.prototype.slice.call(document.querySelectorAll(".contenedor-carrousel__bandeja"))

// for(let i = 0; i < seasons.length; i++){
//   seasons[i].addEventListener("click", function(e) {
//     for (i = 0; i < seasons.length ; i++) {
//       if (e.target == seasons[i]) {
//         carrousels[i].style.display = 'block'
//         carrousels[i].classList.add('contenedor-carrousel__bandeja')
//       }
//       else {
//         carrousels[i].classList.remove("contenedor-carrousel__bandeja");
//         carrousels[i].style.display = "none";  
//       }
//     }
//   })
// }


// ------------------------------------------------------------------------------------

  //   if(e.target === temp18) {
  //     bandeja1.classList.add("contenedor-carrousel__bandeja");
  //     bandeja1.style.display = "block";
  //     bandeja2.classList.remove("contenedor-carrousel__bandeja");
  //     bandeja2.style.display = "none";
  //     bandeja3.classList.remove("contenedor-carrousel__bandeja");
  //     bandeja3.style.display = "none";  
  //   }
    
  //   if(e.target === temp19) {
  //     bandeja1.classList.remove("contenedor-carrousel__bandeja");
  //     bandeja3.classList.remove("contenedor-carrousel__bandeja");
  //     bandeja2.classList.add("contenedor-carrousel__bandeja");
  //     bandeja2.style.display = "block";
  //     bandeja1.style.display = "none";
  //     bandeja3.style.display = "none";
  //   }
    
  //   if(e.target === temp20) {
  //     bandeja3.classList.add("contenedor-carrousel__bandeja");
  //     bandeja3.style.display = "block";
  //     bandeja2.classList.remove("contenedor-carrousel__bandeja");
  //     bandeja1.classList.remove("contenedor-carrousel__bandeja");
  //     bandeja1.style.display = "none";
  //     bandeja2.style.display = "none";
  //   }

// ------------------------------------------------------------------------------------



// const temp18Two = document.getElementById("temp18-2");
// const temp19Two = document.getElementById("temp19-2");
// const temp20Two = document.getElementById("temp20-2");

// const bandeja1Two = document.getElementById("bandeja1-2");
// const bandeja2Two= document.getElementById("bandeja2-2");
// const bandeja3Two = document.getElementById("bandeja3-2");
// const tempsTwo = [ temp18Two, temp19Two, temp20Two];

// for( let i = 0; i < temps.length; i++){
//   addEventListener("click", function(e){
//     if(e.target === temp18Two){
//       bandeja1Two.classList.add("contenedor-carrousel__bandeja");
//       bandeja1Two.style.display = "block";
//       bandeja2Two.classList.remove("contenedor-carrousel__bandeja");
//       bandeja2Two.style.display = "none";
//       bandeja3Two.classList.remove("contenedor-carrousel__bandeja");
//       bandeja3Two.style.display = "none";  
//     }
    
//     if(e.target === temp19Two){
//       bandeja1Two.classList.remove("contenedor-carrousel__bandeja");
//       bandeja3Two.classList.remove("contenedor-carrousel__bandeja");
//       bandeja2Two.classList.add("contenedor-carrousel__bandeja");
//       bandeja2Two.style.display = "block";
//       bandeja1Two.style.display = "none";
//       bandeja3Two.style.display = "none";
//     }
    
//     if(e.target === temp20Two){
//       bandeja3Two.classList.add("contenedor-carrousel__bandeja");
//       bandeja3Two.style.display = "block";
//       bandeja2Two.classList.remove("contenedor-carrousel__bandeja");
//       bandeja1Two.classList.remove("contenedor-carrousel__bandeja");
//       bandeja1Two.style.display = "none";
//       bandeja2Two.style.display = "none";
//     }
//   });
// }