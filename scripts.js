/*1. Evita el comportamiento por defecto al hacer click. Por ejemplo, 
si hago click sobre un enlace, este no me llevará a otra página.*/

console.log(document.querySelectorAll('a'));
let a = document.querySelectorAll('a');

for (let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', function (e) {
        e.preventDefault();
    });
}

/*2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
    
    2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***.
    2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
    2.3 Bloques de `article` o `section`: Cambia el color de fondo.*/


/*3.Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes,
    y devolver dicho elemento a su estado original cuando salga el cursor.
    3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.
    3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
    3.3 Bloques de `article` o `section`: Color de fondo distinto al de párrafo. */



/*2. Al hacer click sobre un elemento van a ocurrir varias cosas.
 Todo depende del tipo de elemento:*/

// 2.1 Imágenes: Cambia la imagen por uno de los `gif` que tienes en la carpeta **assets** con el nombre **magic-***. 
console.log(document.querySelectorAll('article, section'));

let images = document.querySelectorAll('img');
let parrafos = document.querySelectorAll('p');
let bloques = document.querySelectorAll('article, section');

for (let i = 0; i < images.length; i++) {
    let srcOriginal = images[i].src;

    images[i].addEventListener("click", (e) => {
        let numero = Math.floor(Math.random() * 6) + 1;
        srcOriginal = "assets/magic-" + numero + ".gif";
        e.target.src = srcOriginal;
    })

    /*3.Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes,
    y devolver dicho elemento a su estado original cuando salga el cursor.*/

    // 3.1 Imágenes: Cambia la imagen por el gif `abracadabra.gif`.
    images[i].addEventListener("mouseover", (e) => {
        e.target.src = "assets/abracadabra.gif"
    })

    images[i].addEventListener("mouseout", (e) => {
        e.target.src = srcOriginal;
    })
}

/*2. Al hacer click sobre un elemento van a ocurrir varias cosas. 
Todo depende del tipo de elemento:*/

// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
for (let i = 0; i < parrafos.length; i++) {

    let colorOriginalB = ""
    let colorOriginalP = ""
    
    parrafos[i].addEventListener("click", (e) => {
        colorOriginalB = "#062701";
        colorOriginalP = "#e6f3e4";
        e.currentTarget.style.backgroundColor = colorOriginalB;
        e.currentTarget.style.color = colorOriginalP;
    })

    /*3.Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes,
   y devolver dicho elemento a su estado original cuando salga el cursor.*/

    //3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
    parrafos[i].addEventListener("mouseover", (e) => {
        e.currentTarget.style.backgroundColor = "#eb70eb";
        e.currentTarget.style.color = "#1200b4";
    })
    parrafos[i].addEventListener("mouseout", (e) => {
        e.currentTarget.style.backgroundColor = colorOriginalB;
        e.currentTarget.style.color = colorOriginalP;
    })
}


/*2. Al hacer click sobre un elemento van a ocurrir varias cosas.
 Todo depende del tipo de elemento:*/

//2.3 Bloques de `article` o `section`: Cambia el color de fondo.*/
for (let i = 0; i < bloques.length; i++) {

    let colorOriginal = "";

    bloques[i].addEventListener("click", (e) => {
        colorOriginal = "#e6f3e4";
        e.currentTarget.style.backgroundColor = colorOriginal;
    })

    /*3.Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes,
   y devolver dicho elemento a su estado original cuando salga el cursor.*/

    //EJERCICIO 3 3.3 Bloques de `article` o `section`: Color de fondo distinto al de párrafo.
    bloques[i].addEventListener("mouseover", (e) => {
        e.currentTarget.style.backgroundColor = "#6a7200"
    })
    bloques[i].addEventListener("mouseout", (e) => {
        e.currentTarget.style.backgroundColor = colorOriginal;
    })
}




/*
~ El hover con el color que hemos agregado borra el clic. Como hacemos para que ese clic no desaparezca?
~ Pasa lo mismo cuando presionamos una imagen, se quita al quitar el raton. No deberia, ya que 
    en el ejercicio no nos dice que debria de volver a su estado original despues de hacer click
~ Lo mismo pasa con lo parrafos

    - Opciones 1: Guardar en una variable el que deberia de ser su estado original
        despues de hacer click

    - Al hacer click. Cual deberia de ser su estado original? 
        en las imagenes: deberian de ser los gifts
        en los parrafos: deberia de ser el cambio de fondo y parrafo
        en los bloques: debria de ser el cambio de fondo

    - Guardar en una variable el estado inicial de cada uno para despues reasignarla
        con la nueva que seria la de despues de hacer clic (creo que tiene sentido. Lol)

MI RAZONAMIENTO ESTABA EN LO CORRECTO :)

1) guardé en una variable el estado inicial 
2) reasigne el estado inicial con el estado que deberia de quedarse despues de hacer el clic
    aunque muevas el mouse  - eso lo reasigné en el Evento de (click) y la use ahi tambien
3) En el Evento de (mouseover) tambien la use.

EN LA REASIGNACION DE LA IMAGEN ME SALE ERROR
    En la reasignacion de imagen estoy usando el modo concatenar. Sera ese el problema?
    Por que lo uso? : porque uso los Math para que me den un numero entero random y las fotos vayan cambiando
    de acuerdo al numero que salga, so... en vez de poner un numero a mano lo concadeno con + numero +

    JAJAJJAJAJA El problema era porque estaba ejecutando eso antes del paso de los Math
    (carga eso antes del paso de los Math, no funciona)
*/