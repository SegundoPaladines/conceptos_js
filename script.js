console.log("hola mundo");

//AMBITO DE LAS VARIABLES
var kilometros = 100;
console.log(kilometros);

var kilometros = 200;
console.log(200);

//se puede declarar la variable multiples veces

/*if(1 == 1){
    var kilometros = 300;
    console.log(kilometros);
}*/

const arreglo = [10, 20, 30];
console.log(arreglo);

arreglo.push(40);

console.log(arreglo);

//tipos
const persona = {
    nombre:'juan',
    apellido:'garcia',
    edad:40
}

console.log(persona);

persona['nombre'] = 'daniel';

console.log(persona);

//CLASES
class Animal {
    constructor(patas, tamano){
        this.patas = patas;
        this.tamano = tamano;
    }
}

//HERENCIA
class Gato extends Animal{
    constructor(patas, tamano, pelaje){
        super(patas, tamano);
        this.pelaje = pelaje;
    }
}

const perro = new Animal(4 , "Mediano");
console.log(perro);

const gato = new Gato(4, "pequeño", "liso");
console.log(gato);


//FUNCIONES

function mensaje(mensaje){
    console.log(mensaje);
}

mensaje("ana es una niña");

//FUNCIONES LAMDA

const mensajeFlecha = (mensaje) => {
    console.log(mensaje);
}

mensajeFlecha("holaaaaa");

//TEMPLATE STRING
const templateString=`hola ${console.log(gato)} ${1+2} ${persona['nombre']}

dsadsads
dsasdas
sad



dsadsd
ds

a
ds

`;

console.log(templateString);

//DESESTRUCTURACION DE OBJETOS
const web = {
    nombre:'udenar',
    links:{
        sitio:"www.udenar.edu.co",
    },
    redesSociales:{
        youtube:{
            enlace:"www.youtube/udenar",
            nombre:"youtube udenar",
        },
        facebook:{
            enlace:"www.facebook/udenar",
            nombre:"facebook udenar",
        },
        instagram:{
            enlace:"www.instagram/udenar",
            nombre:"insta udenar",
        },
    },
}

console.log(web);

const redes = web.redesSociales;

console.log(redes);

const redInta = web.redesSociales.instagram;

console.log(redInta);

//con la desestructuracion del objeto

const {redesSociales} = web;

console.log(redesSociales);

const { instagram } = web.redesSociales;

console.log(instagram);

//si se quiere con nombres diferentes

const { facebook:face } = web.redesSociales;

console.log(face);

//OPERADOR DE PROPAGACION
const frutas = ["peras", "manzanas", "mangos", "papayas"];
const dulces = ["Mermelada", "Manjar", "Helado"]

//sin propagar
const postres = [frutas, dulces];

console.log(postres);

//propagando
const postres2 = [...frutas, ...dulces];
console.log(postres2);

const postres3 = [...frutas, ...dulces]

console.log(postres3);


//TIPO MÓDULO

import {PI, suma} from './modulo.js'

console.log(PI);

suma(5,10);
