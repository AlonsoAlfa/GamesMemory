let cartasDestapadas = 0;
let temporizador = false;
let pares = 0;
let timerInicial = 40;
let timer = 1000;
let puntaje = 0;
let movimientos = 0;
let mostrarTiempo = document.getElementById('restante');
let mostrarPuntaje = document.getElementById('puntaje');
let mostrarMovimientos = document.getElementById('movimientos');

function giro(id){

    if (temporizador == false){
      contarTiempo();
      temporizador = true;
    }
    
    if (cartasDestapadas == 0){
      //Mostrar número
      let card1 = document.getElementById(id);   
      primeraEleccion = numeros[id]; 
      card1.innerHTML = `<img src="./images/${primeraEleccion}.png" alt="">`;  // ----------------------------------IMG
      //Deshabilitar botón
      card1.disabled = true;
      cartasDestapadas++;
  
      
      primerId = id;
  
    }else if (cartasDestapadas == 1){
      //Mostrar número
      let card2 = document.getElementById(id);
      segundaEleccion = numeros[id];
      card2.innerHTML = `<img src="./images/${segundaEleccion}.png" alt="">`;  // ----------------------------------IMG
      //Deshabilitar botón
      card2.disabled = true;
      cartasDestapadas++;
  
      
      segundoId = id;
      
      
      movimientos++;
      mostrarMovimientos.innerHTML = `Intentos: ${movimientos}`;
  
  
      if(primeraEleccion == segundaEleccion){
        cartasDestapadas = 0;
        pares++;
        puntaje++;
        mostrarPuntaje.innerHTML = `Puntaje: ${puntaje}`;
      }else{
        setTimeout(()=>{
          card1 = document.getElementById(primerId);
          card2 = document.getElementById(segundoId);
          card1.innerHTML = ' ';
          card2.innerHTML = ' ';
          card1.disabled = false;
          card2.disabled = false; 
          cartasDestapadas = 0;
        },500)
        
      }
    }
    
    if (pares == 8){
      winAudio.play() //Audio insertado
      clearInterval(tiempoRegresivo);
      mostrarTiempo.innerHTML = `Fantastico! 🎉 Sólo demoraste ${timerInicial - timer - 1} segundos`;
      mostrarMovimientos.innerHTML = `Intentos: ${movimientos} 🤟‍‍😎`;
    }
  }

  function contarTiempo(){
    tiempoRegresivo = setInterval(() => {
      mostrarTiempo.innerHTML = `Tiempo : ${timer}`;
      timer--;
      if(timer < 0){
        clearInterval(tiempoRegresivo);
        bloquearTarjetas(numeros);
        loseAudio.play(); //Audio insertado
      }
    }, 1000, timer); 
  }
  
  function bloquearTarjetas(numeros){
    for(let i = 0; i<=31; i++){
      let tarjetaBloqueada = document.getElementById(i);
      tarjetaBloqueada.innerHTML = `<img src="./images/${numeros[i]}.png" alt="">` ;  // ----------------------------------IMG
      tarjetaBloqueada.disabled = true;
    }
}

let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,30,30,31,31,32,32];
numeros = numeros.sort(function(){return Math.random() - 0.9})