
let formQuestions = document.querySelector(".formTest");
let bodyPaint = document.querySelector(".testBody");
let nombre = document.getElementById("nametxt");
let edad = document.getElementById("edadtxt");
let btnH = document.getElementById("btnHamburguesa");
let score = 0;
let btnRadio = document.getElementsByClassName("inra");


let winImg =
{
  1:'../img/win/1Jy6.gif',
  2:'../img/win/1OYf.gif',
  3:'../img/win/1rRk.gif',
  4:'../img/win/2LO5.gif',
  5:'../img/win/3Gjl.gif',
  6:'../img/win/3kbp.gif',
  7:'../img/win/5lu.gif',
  8:'../img/win/5lx.gif',
  9:'../img/win/7yTy.gif',
  10:'../img/win/CfVn.gif',
  11:'../img/win/g0hC.gif',
  12:'../img/win/HMWr.gif',
  13:'../img/win/QIh1.gif'
}

let failImg =
{
  1:'../img/fail/1oaj.gif',
  2:'../img/fail/2lz9.gif',
  3:'../img/fail/3QD0.gif',
  4:'../img/fail/5nP.gif',
  5:'../img/fail/7Io.gif',
  6:'../img/fail/8jSa.gif',
  7:'../img/fail/O9tZ.gif',
  8:'../img/fail/QS0.gif',
  9:'../img/fail/RV2W.gif',
  10:'../img/fail/WXb4.gif',
  11:'../img/fail/WZ8Q.gif',
  12:'../img/fail/XHNf.gif',
  13:'../img/fail/y7.gif',
  14:'../img/fail/zsm.gif'
}

let helloImg = {
  1:'../img/welcome/21z.gif',
  2:'../img/welcome/3W3.gif',
  3:'../img/welcome/9m6i.gif',
  4:'../img/welcome/QXuj.gif',
  5:'../img/welcome/qYt.gif',
  6:'../img/welcome/tp5.gif',
  7:'../img/welcome/WCSQ.gif',
  8:'../img/welcome/YXV.gif'
  
}

function userInit(){
  let sesion = JSON.parse(localStorage.getItem('usuario'));
  if(sesion.init){
      
      Swal.fire({
          position: 'top',
          imageUrl: helloImg[genRandomNumber(8)],
          title: `¡Bienvenido ${sesion.name}!`,
          showConfirmButton: false,
          timer: 3500
        })
    sesion.init=false;
    window.localStorage.setItem("usuario", JSON.stringify(sesion));
  }
  if(sesion.question !=1 && sesion.question !=20){
    window.location.href = `../index.html`;
  }
}/* userInit */

function changeQuestion(){
  let sesion = JSON.parse(localStorage.getItem('usuario'));
  sesion.question ++;
  window.localStorage.setItem("usuario", JSON.stringify(sesion));
}/* changeQuestion */

function selectQuestion(){
  let sesion = JSON.parse(localStorage.getItem('usuario'));
  let x = sesion.question;
  return x;
}/* selectQuestion */

userInit();
function initGame(idBtn){
    let opc = document.querySelector('input[name="opc"]:checked').value;
    let chapterAnswer = questions(opc,idBtn);
    if(!chapterAnswer){
        answerError();
    }else{
        winWay();
    } 
}//initGame


function genRandomNumber(max) {
  return Math.floor(Math.random() * max);
}/*genRandomNumber */


function winWay(){
  score +=3;
  Swal.fire({
    position: 'top',
    imageUrl: winImg[genRandomNumber(13)],
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
      imageUrl: failImg[genRandomNumber(4)],
      title: 'Error',
      text: 'Vuelve a intertarlo!',
      showConfirmButton: false,
      timer: 2000
    })
}/* sesisonError */


function welcomeRules(){
  Swal.fire({
      title: 'Unas cuantas reglas y ya!',
      html:'<b>1- Lee con atención las preguntas<br><br>2- Ganas [3] puntos al ganar cada pregunta<br><br>3- Pierdes [1] punto al equivocarte<br><br>4- Puedes descargar la canción que quieras :)</b>',
      imageUrl: '../img/ICU.gif',
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
          /* event.preventDefault() */
            x == 2 ? chapterAnswer = true :chapterAnswer;
            
            if(chapterAnswer == true){ 
              changeQuestion();
              template2();
            }
            return chapterAnswer; 
            break;
        case "2":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            
            if(chapterAnswer == true){
              changeQuestion();
              template3();
            }
            return chapterAnswer; 
            break;
        case "3":
            x == 2 ? chapterAnswer = true :chapterAnswer;
            
            if(chapterAnswer == true){
              changeQuestion();
              template4();
            }
            return chapterAnswer; 
            break;
        case "4":
            x == 2 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              changeQuestion();
              template5();
            }
            return chapterAnswer;  
            break;
        case "5":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              changeQuestion();
              template6();
            }
            return chapterAnswer;  
            break;
        case "6":
            x == 1 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              changeQuestion();
              template7();
            }
            return chapterAnswer;  
            break;
        case "7":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              changeQuestion();
              template8();
            }
            return chapterAnswer;  
            break;
        case "8":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              changeQuestion();
              template9();
            }
            return chapterAnswer;  
            break;
        case "9":
            x == 2 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              changeQuestion();
              template10();
            }
            return chapterAnswer;  
            break;
        case "10":
            x == 2 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              changeQuestion();
              template11();
            }
            return chapterAnswer;  
            break;
        case "11":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              changeQuestion();
              template12();
            }
            return chapterAnswer;  
            break;
        case "12":
            x == 1 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              changeQuestion();
              template13();
            }
            return chapterAnswer;  
            break;
        case "13":
            x == 3 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              changeQuestion();
              template14();
            }
            return chapterAnswer;  
            break;
        case "14":
            x == 2 ? chapterAnswer = true :chapterAnswer;
            if(chapterAnswer == true){
              changeQuestion();
              template15();
            }
            return chapterAnswer;  
            break;
        case "15":
          x == 2 ? chapterAnswer = true :chapterAnswer;
          if(chapterAnswer == true){
            changeQuestion();
            template16();
          }
          return chapterAnswer;  
          break;
        case "16":
          x == 3 ? chapterAnswer = true :chapterAnswer;
          if(chapterAnswer == true){
            changeQuestion();
            template17();
          }
          return chapterAnswer;  
          break;
          case "17":
          x == 2 ? chapterAnswer = true :chapterAnswer;
          if(chapterAnswer == true){
            changeQuestion();
            template18();
          }
          return chapterAnswer;  
          break;
          case "18":
          x == 1 ? chapterAnswer = true :chapterAnswer;
          if(chapterAnswer == true){
            changeQuestion();
            template19();
          }
          return chapterAnswer;  
          break;
          case "19":
          x == 3 ? chapterAnswer = true :chapterAnswer;
          if(chapterAnswer == true){
            changeQuestion();
            template20();
          }
          return chapterAnswer;  
          break;
          case "20":
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
  
    bodyPaint.style.backgroundImage = "url('../img/4RNn.gif')";          
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #2
      <br><br>
      <audio src="../sources/Running Up That Hill.mp3" controls  preload=""></audio>
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
  bodyPaint.style.backgroundImage = "url('../img/1RW2.gif')"; 
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #3
      <br><br>
      <audio src="../sources/Black Dog.mp3" controls  preload=""></audio>
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
    bodyPaint.style.backgroundImage = "url('../img/Xsju.gif')"; 
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #4
      <br><br>
      <audio src="../sources/And i love her.mp3" controls  preload=""></audio>
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
    bodyPaint.style.backgroundImage = "url('../img/Cad.gif')"; 
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #5
      <br><br>
      <audio src="../sources/In da club.mp3" controls  preload=""></audio>
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
  bodyPaint.style.backgroundImage = "url('../img/Z23b.gif')"; 
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #6
      <br><br>
      <audio src="../sources/A dios le pido.mp3" controls  preload=""></audio>
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
  bodyPaint.style.backgroundImage = "url('../img/fxyE.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #7
      <br><br>
      <audio src="../sources/Insane in the brain.mp3" controls  preload=""></audio>
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
  bodyPaint.style.backgroundImage = "url('../img/2zFo.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #8
      <br><br>
      <audio src="../sources/One step beyon.mp3" controls  preload=""></audio>
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
  bodyPaint.style.backgroundImage = "url('../img/3o7G.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #9
      <br><br>
      <audio src="../sources/King without a crown.mp3" controls  preload=""></audio>
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
  bodyPaint.style.backgroundImage = "url('../img/75He.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #10
      <br><br>
      <audio src="../sources/Stayin alive.mp3" controls  preload=""></audio>
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
  bodyPaint.style.backgroundImage = "url('../img/9viJ.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #11
      <br><br>
      <audio src="../sources/Te para 3.mp3" controls  preload=""></audio>
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
  bodyPaint.style.backgroundImage = "url('../img/1pX9.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #12
      <br><br>
      <audio src="../sources/No Surprise.mp3" controls  preload=""></audio>
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
  bodyPaint.style.backgroundImage = "url('../img/CTM.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #13
      <br><br>
      <audio src="../sources/Smoke on the water.mp3" controls  preload=""></audio>
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
  bodyPaint.style.backgroundImage = "url('../img/fxVE.gif')";
  formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
  <label for="">Pregunta #14
    <br><br>
    <audio src="../sources/Stronger than me.mp3" controls  preload=""></audio>
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
  bodyPaint.style.backgroundImage = "url('../img/1pX9.gif')";
  formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
  <label for="">Pregunta #15
    <br><br>
    <audio src="../sources/All Star.mp3" controls  preload=""></audio>
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
  
  bodyPaint.style.backgroundImage = "url('../img/T0fK.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #16
      <br><br>
      <audio src="../sources/Toxic.mp3" controls  preload=""></audio>
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

function template17(){
  
  bodyPaint.style.backgroundImage = "url('../img/B9vg.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #17
      <br><br>
      <audio src="../sources/Rie Y Llora.mp3" controls  preload=""></audio>
      <br>
      <br>
        Adivina la canción<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Yerberito.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Rie y llora.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Celia Cruz.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="17" onclick="initGame(this.id)">
  </form>`;
} /* template17 */

function template18(){
  
  bodyPaint.style.backgroundImage = "url('../img/34TC.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #18
      <br><br>
      <audio src="../sources/Blitzkrieg Bop.mp3" controls  preload=""></audio>
      <br>
      <br>
        Adivina el intérprete<br><br>
        <input class="inra" type="radio" name="opc" value="1" />The Ramones.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />The Police.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Sex Pistols.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="18" onclick="initGame(this.id)">
  </form>`;
} /* template18 */

function template19(){
  
  bodyPaint.style.backgroundImage = "url('../img/1d5g.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #19
      <br><br>
      <audio src="../sources/Monstruo verde.mp3" controls  preload=""></audio>
      <br>
      <br>
        Adivina la canción<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Ultrasónica.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Qué grosero.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Monstruo verde.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="19" onclick="initGame(this.id)">
  </form>`;
} /* template19 */

function template20(){
  
  bodyPaint.style.backgroundImage = "url('../img/5F8F.gif')";
    formQuestions.innerHTML = `<form action="" method="post" class="formTest" >
    <label for="">Pregunta #20
      <br><br>
      <audio src="../sources/A Little Less Conversation.mp3" controls  preload=""></audio>
      <br>
      <br>
        Adivina el autor<br><br>
        <input class="inra" type="radio" name="opc" value="1" />Richie Valens.<br><br>
        <input class="inra" type="radio" name="opc" value="2" />Frank Sinátra.<br><br>
        <input class="inra" type="radio" name="opc" value="3" />Elvis Presley.<br><br>
    </label>
    <input class="btnAction" type="button" value="Aceptar" id="20" onclick="initGame(this.id)">
  </form>`;
} /* template20 */



