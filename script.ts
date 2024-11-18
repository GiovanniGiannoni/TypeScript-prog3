'use strict'
console.log('Hola mundo mi primer programa TS');

// TIPOS DE DATOS
// STRING

// Comillas dobles:
const str1: string = "Hola, soy una cadena con comillas dobles.";
// Comillas simples:
const str2: string = 'Hola, soy una cadena con comillas simples.';

// Template literals (backticks):
const nombre: string = 'Giovanni';
const edad: number = 20;

const str3: string = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

// NUMEROS

// Números enteros:
const num1: number = 10;

// Notación exponencial:
const num3: number = 2.5e3; 

// Notación exponencial negativa:
const num4: number = 1.5e-2; 

// Hexadecimales (base 16) utilizando el prefijo "0x":
const num5: number = 0xA; 

// Octales (base 8) utilizando el prefijo "0o":
const num6: number = 0o12; 

// Binarios (base 2) utilizando el prefijo "0b":
const num7: number = 0b1010; 

// BOOLEANS

const bool1: boolean = true;
const bool2: boolean = false;

// UNDEFINED

let variableUndefined: undefined;
variableUndefined = undefined;

// NULL

let variablenull: null;
variablenull = null;

//Datos Primitivos
let estudiastejavascript: boolean = true

if(estudiastejavascript){
    console.log('puedes seguir viendo este curso de Typescript')
}else{
    console.log('primero tesnes que ver el curso de Javascript')
}

let interMiami: number = 11
let fcDallas: number = 11

function jugar(equipo1: number, equipo2:number): void{
    if(equipo1 > equipo2) console.log ('Gana Inter Miami')
    if(equipo1 == equipo2) console.log ('empatan')
    if(equipo1 < equipo2) console.log ('gana FC Dallas')
}

jugar(interMiami, fcDallas)

let messi: number = 1
let juegaMessi: boolean = true

function jugar2(equipo1: number, equipo2:number, juegaMessi:boolean): void{
    let motivo: string= ''
    if(juegaMessi) { 
        equipo1 += messi
        motivo = ' por que juega Messi'
    }
    if(equipo1 > equipo2) console.log (`Gana Inter Miami${motivo}`)
    if(equipo1 == equipo2) console.log ('empatan')
    if(equipo1 < equipo2) console.log ('gana FC Dallas')
}

jugar2(interMiami, fcDallas, juegaMessi)

//Any (cualquier dato)
//TODO: cambiar any por el tipado correspondiente

let disney:any;

disney = 'Star wars y marvel'
console.log(disney)

disney = 1500000000
console.log(disney)

disney = true
console.log(disney)

//Arrays
let arregloNumeros: number[] = [1,2,3,4,5,6]
let arregloTexto: string[] = ['HTML','CSS','JS']
let arreglo: any[]= [1,'Ricardo',3,4]

arregloTexto[0].indexOf('HTML')

//Objetos literales
let programador = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomaMate: true,
}
let programador2 = {
    nombre: 'Ricardo Buenardo',
    tecnologias: ['C#'],
    tomaMate: false
}

// Type personalizado
type Programador = {
    nombre: string
    tecnologias: string[]
    tomarMate: boolean | null
}

let programador3: Programador = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomarMate: true,
}

let programador4: Programador = {
    nombre: 'Federico',
    tecnologias: ['HTML', 'Cobol'],
    tomarMate: null
}

// Interface
interface Programador_I {
    nombre: string,
    tecnologias: string[],
    tomarMate?: boolean | null
}

let dev: Programador = {
    nombre: 'Sergie Code',
    tecnologias: ['React', 'Angular', 'Svelte'],
    tomarMate: true,
}

let dev2 = {
    name: 'Federico',
    tech: ['HTML', 'Cobol'],
    lastName: "Buenardo"
}

function enviarCurriculum(programador: Programador) {
    console.log(`Este curriculum es de ${programador.nombre}`)
}

enviarCurriculum(dev)

//Clases y POO

class Pelicula {
    nombre?: string
    protagonistas?: string[]
    actores?: string[]

    proyectarEnCine(){
        console.log(`La película ${this.nombre} está siendo proyectada.`)
    }

    constructor(nombre:string, protagonistas:string[], actores:string[]){
        this.nombre= nombre,
        this.protagonistas = protagonistas,
        this.actores = actores
    }
}

const pelicula = new Pelicula('Barbie', ['Barbie', 'Ken'], ['Margot Robbie', 'Ryan Gosling'])
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'Strauss'], ['Cillian Murphy', 'Robert Downey Jr'])

pelicula.proyectarEnCine()
console.log(pelicula2)

// Encapsulamiento y genericos

class Sorteo<T> {
    private ticket?: T
    constructor(
        private nombre: string
    ) {}
    setTicket(ticket: T) {
        this.ticket = ticket
    }
    getTicket() {
        return this.ticket
    }
    getNombre() {
        return this.nombre
    }
    public sortear(): string {
        return `Para ${this.nombre} el ticket es ${this.ticket}`
    }
}
let sorteo = new Sorteo<number>('Sergie Code')
sorteo.setTicket(7)
console.log(sorteo.sortear())