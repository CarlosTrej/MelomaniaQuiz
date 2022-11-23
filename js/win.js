

function pointFinal(){
    let puntaje = document.getElementById("puntaje");
    let jugador = document.getElementById("jugador");
    let sesion = JSON.parse(localStorage.getItem('usuario'));
    let puntos = JSON.parse(localStorage.getItem("puntos"));
    puntaje.innerHTML = `${puntos.puntajeTotal} puntos`;
    jugador.innerHTML = `Felicidades ${sesion.name}!!`
    
}
  
  pointFinal();
  alertWin();

  function alertWin(){
    Swal.fire({
           position: 'top',
           icon: 'success',
           title: `Para jugar de nuevo ve al menu`,
           showConfirmButton: false,
           timer: 3500
       })
   
 }/* userInit */



  