let nombree = document.getElementById("nametxt");
let edadd = document.getElementById("edadtxt");

function init(){
    
    if(edadd.value.length == 0 || nombree.value.length == 0){
        sesisonError();
        clearField(nombree,edadd);

    }else if(edadd.value < 18 ){
        ageError();
        clearField(nombree,edadd);
    }else{
        location.href = "./../pages/test.html";
        let user = 
        {
            name: nombree.value,
            age: edadd.value,
            question: 1,
            init: true
        }
        let addLocalStorage =[];
        addLocalStorage.push(user);
        if(localStorage.getItem("usuario") == null)
        { 
            window.localStorage.setItem("usuario", JSON.stringify(user));
        }
    }
}

function sesisonError(){
    Swal.fire({
        imageUrl: 'https://media.giphy.com/media/4no7ul3pa571e/giphy.gif',
        title: 'Atención',
        text: 'Rellena correctamente los campos!',
      })
}/* sesisonError */

function ageError(){
    Swal.fire({
        imageUrl: 'https://media.giphy.com/media/pUeXcg80cO8I8/giphy.gif',
        title: 'Atención',
        text: 'Necesitas ser mayor de edad para jugar!',
      })
}/* sesisonError */

function clearField(nombre,edad){
    nombre.value = "";
    edad.value = "";
}/* clearField */
