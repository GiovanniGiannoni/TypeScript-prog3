'use strict';
console.log('Hola mundo mi primer programa TS');
// TIPOS DE DATOS
// STRING
// Comillas dobles:
const str1 = "Hola, soy una cadena con comillas dobles.";
// Comillas simples:
const str2 = 'Hola, soy una cadena con comillas simples.';
// Template literals (backticks):
const nombre = 'Giovanni';
const edad = 20;
const str3 = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
// NUMEROS
// Números enteros:
const num1 = 10;
// Notación exponencial:
const num3 = 2.5e3;
// Notación exponencial negativa:
const num4 = 1.5e-2;
// Hexadecimales (base 16) utilizando el prefijo "0x":
const num5 = 0xA;
// Octales (base 8) utilizando el prefijo "0o":
const num6 = 0o12;
// Binarios (base 2) utilizando el prefijo "0b":
const num7 = 0b1010;
// BOOLEANS
const bool1 = true;
const bool2 = false;
// UNDEFINED
let variableUndefined;
variableUndefined = undefined;
// NULL
let variablenull;
variablenull = null;
//Datos Primitivos
let estudiastejavascript = true;
if (estudiastejavascript) {
    console.log('puedes seguir viendo este curso de Typescript');
}
else {
    console.log('primero tesnes que ver el curso de Javascript');
}
let interMiami = 11;
let fcDallas = 11;
function jugar(equipo1, equipo2) {
    if (equipo1 > equipo2)
        console.log('Gana Inter Miami');
    if (equipo1 == equipo2)
        console.log('empatan');
    if (equipo1 < equipo2)
        console.log('gana FC Dallas');
}
jugar(interMiami, fcDallas);
let messi = 1;
let juegaMessi = true;
function jugar2(equipo1, equipo2, juegaMessi) {
    let motivo = '';
    if (juegaMessi) {
        equipo1 += messi;
        motivo = ' por que juega Messi';
    }
    if (equipo1 > equipo2)
        console.log(`Gana Inter Miami${motivo}`);
    if (equipo1 == equipo2)
        console.log('empatan');
    if (equipo1 < equipo2)
        console.log('gana FC Dallas');
}
jugar2(interMiami, fcDallas, juegaMessi);
//Any (cualquier dato)
//TODO: cambiar any por el tipado correspondiente
let disney;
disney = 'Star wars y marvel';
console.log(disney);
disney = 1500000000;
console.log(disney);
disney = true;
console.log(disney);
//Arrays
let arregloNumeros = [1, 2, 3, 4, 5, 6];
let arregloTexto = ['HTML', 'CSS', 'JS'];
let arreglo = [1, 'Ricardo', 3, 4];
arregloTexto[0].indexOf('HTML');
//Objetos literales
let programador = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomaMate: true,
};
let programador2 = {
    nombre: 'Ricardo Buenardo',
    tecnologias: ['C#'],
    tomaMate: false
};
let programador3 = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomarMate: true,
};
let programador4 = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    tomarMate: null
};
let dev = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomarMate: true,
};
let dev2 = {
    name: 'Federico',
    tech: ['HTML', 'Cobol'],
    lastName: "Buenardo"
};
function enviarCurriculum(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
enviarCurriculum(dev);
//Clases y POO
class Pelicula {
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre,
            this.protagonistas = protagonistas,
            this.actores = actores;
    }
    proyectarEnCine() {
        console.log(`La película ${this.nombre} está siendo proyectada.`);
    }
}
const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling']);
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr']);
pelicula.proyectarEnCine();
console.log(pelicula2);
// Encapsulamiento y genericos
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    getNombre() {
        return this.nombre;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo('Sergie Code');
sorteo.setTicket(7);
console.log(sorteo.sortear());
