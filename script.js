const h1 =document.querySelector('h1');
const calculo1 = document.querySelector(".calculo1")
const calculo2 = document.querySelector(".calculo2")
const bntCalcular = document.querySelector(".bntCalcular")
const form = document.querySelector("#form")
const pResult = document.querySelector(".result")


form.addEventListener('submit', sumarInputsValues)

// se requieren dos argumentos el evento que queremos llamar y el codigo que quiero ejecutar

function sumarInputsValues(event) {
    //console.log(event);
    event.preventDefault();
    // previene que el boton del formulario reinicie la pagina y por el contrario ejecuta la función que se está llamando
    const sumaInputs = calculo1.value + calculo2.value;
    pResult.innerText = "resultado" + " " + sumaInputs;
}

// hay otra forma de hacer que el boton no se ejecute como submit por defecto, en el js debemos poner el addEventListener como click y en el HTML poner el type del input como "button"


// console.log(h1.value)

// console.log({
//     h1,
//     p,
//     parrafo2,
//     input,
// })
//cambiar el contenito del HTML con js
//h1.innerHTML = 'hola pacho <br> Como vas'
//h1.innerText = 'hola pacho <br> Como vas'

// agregar una clase
//leer alguno de los atributos
// h1.getAttribute("class")
// h1.setAttribute('class','rojo')
// h1.classList.add('rojo')
// h1.classList.remove("verde")
// h1.classList.toggle
// h1.classList.contains

//input.value//. value muestra el valor del elemento

//document.createElement('span')
//crea elementos de html

// trae los elementos del HTML tambien permite editar el contenido del html
// h1.append
// h1.appendChild