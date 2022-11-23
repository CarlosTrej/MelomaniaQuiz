
let formQuestions = document.querySelector(".formTest");
let bodyPaint = document.querySelector(".testBody");
let nombre = document.getElementById("nametxt");
let edad = document.getElementById("edadtxt");
let btnH = document.getElementById("btnHamburguesa");
let score = 0;
let btnRadio = document.getElementsByClassName("inra");

let winImg =
{
    1:'https://media.giphy.com/media/l2Je1Jyuhxd3caP1C/giphy.gif',
    2:'https://media.giphy.com/media/1GTZA4flUzQI0/giphy.gif',
    3:'https://media.giphy.com/media/ddHhhUBn25cuQ/giphy.gif',
    4:'https://media.giphy.com/media/aWRWTF27ilPzy/giphy.gif',
    5:'https://media.giphy.com/media/9xhRHQBtG1C8EWiLyX/giphy.gif',
    6:'https://media.giphy.com/media/l0MYOZEYS7KEK4O64/giphy.gif',
    7:'https://media.giphy.com/media/KEG5UtvXUD7WPIhhuy/giphy.gif',
    8:'https://media.giphy.com/media/XE8iJs1sT7xTM5lafa/giphy.gif',
    9:'https://media.giphy.com/media/JKIgcdIuroVRdAOvVN/giphy.gif',
    10:'https://media.giphy.com/media/xT5LMVTPf4zIH3zYk0/giphy.gif',
    11:'https://media.giphy.com/media/4QFAH0qZ0LQnIwVYKT/giphy.gif',
    12:'https://media.giphy.com/media/iPTTjEt19igne/giphy.gif',
    13:'https://media.giphy.com/media/jd6TVgsph6w7e/giphy.gif',
    14:'https://media.giphy.com/media/cExMfdBEYMVg8Hjfgn/giphy.gif',
    15:'https://media.giphy.com/media/xUA7b2hY9CTq9jlr4Q/giphy.gif',
    16:'https://media.giphy.com/media/1dMNqVx9Kb12EBjFrc/giphy.gif'
}

let failImg =
{
    1:'https://media.giphy.com/media/li0dswKqIZNpm/giphy.gif',
    2:'https://media.giphy.com/media/3ohs4qw8hkPShGeanS/giphy.gif',
    3:'https://media.giphy.com/media/ddHhhUBn25cuQ/giphy.gif',
    4:'https://media.giphy.com/media/nVTa8D8zJUc2A/giphy.gif',
    5:'https://media.giphy.com/media/3osxY9kuM2NGUfvThe/giphy.gif',
    6:'https://media.giphy.com/media/JzUE4TFMICFpOl1847/giphy.gif',
    7:'https://media.giphy.com/media/3oKIPs1EVbbNZYq7EA/giphy.gif',
    8:'https://media.giphy.com/media/3og0ILv9Mvflt6tgxG/giphy.gif',
    9:'https://media.giphy.com/media/dBs5gMAbQJRUP2WX25/giphy.gif',
    10:'https://media.giphy.com/media/1zijzXzWn238OtLl6j/giphy.gif',
    11:'https://media.giphy.com/media/EeIX8IZvvGZ2CRCWSO/giphy.gif',
    12:'https://media.giphy.com/media/5ciuhhe0rQva8/giphy.gif',
    13:'https://media.giphy.com/media/AgPiUxdXWlSEig908v/giphy.gif',
    14:'https://media.giphy.com/media/3og0IV9poex1ZJXB1m/giphy.gif',
    15:'https://media.giphy.com/media/J4hTgF20u64mnQzg6x/giphy.gif',
    16:'https://media.giphy.com/media/jkZtSdwKOx05BOlapR/giphy.gif'
}

let helloImg = {
  1:'https://media.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif',
  2:'https://media.giphy.com/media/9HBduC3ZIgrG8/giphy.gif',
  3:'https://media.giphy.com/media/OL1E880Th9kZVs4I4h/giphy.gif',
  4:'https://media.giphy.com/media/UtzyBJ9trryNO4R3Ee/giphy.gif',
  5:'https://media.giphy.com/media/kZzY6eKKPdIjK/giphy.gif',
  6:'https://media.giphy.com/media/TIwRwwoxhW7yYTrfCS/giphy.gif',
  7:'https://media.giphy.com/media/CoBpcNr7nfBmOKJeac/giphy.gif'
}

function userInit(){
  let sesion = JSON.parse(localStorage.getItem('usuario'));
  if(sesion.init){
      
      Swal.fire({
          position: 'top',
          imageUrl: helloImg[genRandomNumber(7)],
          title: `¡Bienvenido ${sesion.name}!`,
          showConfirmButton: false,
          timer: 3500
        })
        sesion.init=false;
        window.localStorage.setItem("usuario", JSON.stringify(sesion));
  }
}/* userInit */


userInit();
function initGame(idBtn){
    let opc = document.querySelector('input[name="opc"]:checked').value;
    let chapterAnswer = questions(opc,idBtn);
    if(!chapterAnswer){
        
        answerError();
        console.log(" x error -->"+score);
    }else{
        winWay();
        console.log(" x ganar-->"+score);
    } 
}//initGame


function genRandomNumber(max) {
  return Math.floor(Math.random() * max);
}/*genRandomNumber */


function winWay(){
  score +=3;
  Swal.fire({
    position: 'top',
    imageUrl: winImg[genRandomNumber(16)],
    title: `¡Eso es todo crack!`,
    showConfirmButton: false,
    timer: 2000
  })
}/* winWay */


function answerError(){
  btnRadio.value = "";
  score--;
  
  Swal.fire({
      position: 'top',
      imageUrl: failImg[genRandomNumber(16)],
      title: 'Error',
      text: 'Vuelve a intertarlo!',
      showConfirmButton: false,
      timer: 2000
    })
}/* sesisonError */


function welcomeRules(){
  Swal.fire({
      title: 'Unas cuantas reglas y ya!',
      html:'<b>1- Lee con atención las preguntas<br><br>2- Ganas [3] puntos al ganar cada pregunta<br><br>3- Pierdes [1] punto al equivocarte<br><br>4- Puedes descargar la canción</b>',
      imageUrl: 'https://media.giphy.com/media/blSTtZehjAZ8I/giphy.gif',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    btnH.removeAttribute("onclick");
}/* welcomeRules */


function questions(x,id){
    let chapterAnswer = false;
    switch (id) {
        case "1":
            x == 2 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){ 
            template2();
            }
            return chapterAnswer; 
            break;
        case "2":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              
              template3();
            }
            return chapterAnswer; 
            break;
        case "3":
            x == 2 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
                
              template4();
            }
            return chapterAnswer; 
            break;
        case "4":
            x == 2 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              
              template5();
            }
            return chapterAnswer;  
            break;
        case "5":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              
              template6();
            }
            return chapterAnswer;  
            break;
        case "6":
            x == 1 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              
              template7();
            }
            return chapterAnswer;  
            break;
        case "7":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
                
              template8();
            }
            return chapterAnswer;  
            break;
        case "8":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
                
              template9();
            }
            return chapterAnswer;  
            break;
        case "9":
            x == 2 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
                
              template10();
            }
            return chapterAnswer;  
            break;
        case "10":
            x == 2 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
                
              template11();
            }
            return chapterAnswer;  
            break;
        case "11":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              
              template12();
            }
            return chapterAnswer;  
            break;
        case "12":
            x == 1 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
                
              template13();
            }
            return chapterAnswer;  
            break;
        case "13":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
                
              template14();
            }
            return chapterAnswer;  
            break;
        case "14":
            x == 2 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
                
              template15();
            }
            return chapterAnswer;  
            break;
        case "15":
          x == 2 ? chapterAnswer = true :chapterAnswer;
          if(chapterAnswer == true){
              
            template16();
          }
          return chapterAnswer;  
          break;
        case "16":
          x == 3 ? chapterAnswer = true :chapterAnswer;
          if(chapterAnswer == true){
              let puntos = {
                puntajeTotal:score
              }
              window.localStorage.setItem("puntos", JSON.stringify(puntos));
              location.href = "./../pages/win.html";
          }
          return chapterAnswer;  
          break;
        default:
          break;
    }

}/* questions */




function template2(){

    bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/coJ5R6MRIy64wtoKLb/giphy.gif')";          
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #2
      <br><br>
      <audio src="../sources/Running Up That Hill.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina la canción<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Run to the Hills.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Stranger Things.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Running up that hill.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="2" onclick="initGame(this.id)">
  </form>`;
  
} /* template2 */

function template3(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/KIPVubXUwkWTC/giphy.gif')"; 
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #3
      <br><br>
      <audio src="../sources/Black Dog.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina la canción<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Rock and roll.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Black dog.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Led Zeppelin.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="3" onclick="initGame(this.id)">
  </form>`;
} /* template3 */

function template4(){
    bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/ITaU0AJCGO9WtClM1V/giphy.gif')"; 
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #4
      <br><br>
      <audio src="../sources/And i love her.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina el álbum<br><br>
        <input class="inra" type="radio" name="opc" value="1" />The Beatles.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />A Hard Day's Night.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Help!.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="4" onclick="initGame(this.id)">
  </form>`;
} /* template4 */

function template5(){
    bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/l3Ucj3n3Z4vnImTOo/giphy.gif')"; 
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #5
      <br><br>
      <audio src="../sources/In da club.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina al intérprete<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Tupac Shakur.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Snoop Dogg.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />50 Cent.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="5" onclick="initGame(this.id)">
  </form>`;
} /* template5 */

function template6(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/26tnkyQiDdRwTdF2o/giphy.gif')"; 
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #6
      <br><br>
      <audio src="../sources/A dios le pido.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina al intérprete<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Juanes.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Jarabe de Palo.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Adiós le pido.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="6" onclick="initGame(this.id)">
  </form>`;
} /* template6 */

function template7(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/3o85xzIiW1c1hA22zK/giphy.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #7
      <br><br>
      <audio src="../sources/Insane in the brain.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina la canción<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Cypress Hill.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Black Sunday Loco.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Insane in the brain.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="7" onclick="initGame(this.id)">
  </form>`;
} /* template7 */

function template8(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/3oEduNcToejhNSdKQo/giphy.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #8
      <br><br>
      <audio src="../sources/One step beyon.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina la canción<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Madness.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />One Step Behind.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />One Stop Beyond.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="8" onclick="initGame(this.id)">
  </form>`;
} /* template8 */

function template9(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/1yjqMd5PNzP7tRgkvF/giphy.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #9
      <br><br>
      <audio src="../sources/King without a crown.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina la canción<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Matisyahu.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />King Without a Crown.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Shake Off the Dust.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="9" onclick="initGame(this.id)">
  </form>`;
} /* template9 */

function template10(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/u7zLWObToi5Z5B8jj1/giphy.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #10
      <br><br>
      <audio src="../sources/Stayin alive.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina al intérprete<br><br>
        <input class="inra" type="radio" name="opc" value="1" />ABBA.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Bee Gees.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />The Mammas and Papas.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="10" onclick="initGame(this.id)">
  </form>`;
} /* template10 */

function template11(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/GzY76dKiSWOu39WQqT/giphy.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #11
      <br><br>
      <audio src="../sources/Te para 3.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina la canción<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Un sorbo de distración.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Perdonar es divíno.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Té para tres.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="11" onclick="initGame(this.id)">
  </form>`;
} /* template11 */

function template12(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/9rj0RiZLmdzeFMh4P0/giphy.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #12
      <br><br>
      <audio src="../sources/No Surprise.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina la canción<br><br>
        <input class="inra" type="radio" name="opc" value="1" />No surprises.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Radiohead.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />No sunrises.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="12" onclick="initGame(this.id)">
  </form>`;
} /* template12 */

function template13(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/5swqZegl9xLwSbYl3V/giphy.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #13
      <br><br>
      <audio src="../sources/Smoke on the water.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina la canción<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Black Night.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Deep Purple.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Smoke on the Water.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="13" onclick="initGame(this.id)">
  </form>`;
} /* template13 */


function template14(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/hgWdCpuswSMhTUg7oa/giphy.gif')";
  formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
  <label for="">Pregunta #14
    <br><br>
    <audio src="../sources/Stronger than me.mp3" controls autoplay></audio>
    <br>
    <br>
      Adivina al intérprete<br><br>
      <input class="inra" type="radio" name="opc" value="1" />Rita Marley.<br><br>
      <input class="inra" type="radio" name="opc" value="2" />Amy Winehouse.<br><br>
      <input class="inra" type="radio" name="opc" value="3" />Lady Saw.<br><br>
  </label>
  <input class="btnAction" type="button" value="Aceptar" id="14" onclick="initGame(this.id)">
</form>`;
} /* template14 */

function template15(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/ZnjNpGbe5dMg3nJMTC/giphy.gif')";
  formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
  <label for="">Pregunta #15
    <br><br>
    <audio src="../sources/All Star.mp3" controls autoplay></audio>
    <br>
    <br>
      Adivina la canción<br><br>
      <input class="inra" type="radio" name="opc" value="1" />La del Shrek.<br><br>
      <input class="inra" type="radio" name="opc" value="2" />All Start.<br><br>
      <input class="inra" type="radio" name="opc" value="3" />Smash Mouth.<br><br>
  </label>
  <input class="btnAction" type="button" value="Aceptar" id="15" onclick="initGame(this.id)">
</form>`;
} /* template15 */

function template16(){
  bodyPaint.style.backgroundImage = "url('https://media.giphy.com/media/0FvVKcmTZsSC0m16sa/giphy.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #16
      <br><br>
      <audio src="../sources/Toxic.mp3" controls autoplay></audio>
      <br>
      <br>
        Adivina el álbum<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Toxic.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Britney Spears.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />In the Zone.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="16" onclick="initGame(this.id)">
  </form>`;
} /* template16 */


