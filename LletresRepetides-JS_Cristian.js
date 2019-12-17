console.log("--FASE1--")
console.log("")

var nombre = ['C', 'R', 'I', 'S', 'T', 'I', 'A', 'N'];

for (var i = 0; i < 8; i++);
console.log(nombre)

for (var i = 0; i < 8; i++) {
    console.log(nombre[i]);
};

console.log("")

console.log("--FASE2--")
console.log("")

var Lista = ' ';
var nombre2 = new Array();
nombre2.push('C');
nombre2.push('R');
nombre2.push('I');
nombre2.push('S');
nombre2.push('T');
nombre2.push('I');
nombre2.push('A');
nombre2.push('N');
nombre2.push(' ');
nombre2.push('V');
nombre2.push('1');
nombre2.push('L');
nombre2.push('L');
nombre2.push('E');
nombre2.push('G');
nombre2.push('A');
nombre2.push('S');

for (var i = 0; i < nombre2.length; i++) {
    var Lista = nombre2[i]
    if (Lista == 'A' || Lista == 'E' || Lista == 'I' || Lista == 'O' || Lista == 'U') {
        console.log(Lista + " = VOCAL")
    } else
        if (Lista == ' ') {
            console.log(Lista + " = Es un espacio")
        } else
            if (Lista == '0' || Lista == '1' || Lista == '2' || Lista == '3' || Lista == '4' || Lista == '5' || Lista == '6' || Lista == '7' || Lista == '8' || Lista == '9') {
                console.log(Lista + " = Los nombres no llevan numero")
            } else
                if (Lista != 'A' || Lista != 'E' || Lista != 'I' || Lista != 'O' || Lista != 'U') {
                    console.log(Lista + " = CONSONANT")
                }
};


console.log("")

console.log("--FASE3--")
console.log("")

var mapa = new Map();
var nombre3 = "Cristian Villegas";
var miNombre = nombre3.toUpperCase();

for (var i = 0; i < miNombre.length; i++) {
    var value = 1;
    if (!mapa.hasOwnProperty(miNombre[i])) {
        mapa.set(miNombre[i], value);
    }
    else {
        value = mapa.get(miNombre[i]);
        mapa.set(miNombre[i], value + 1);
    }
}
console.log(mapa)

// Solo me realiza la suma de 1, si se repiten no me los cuenta, me los agrupa por su mismo valor.


console.log("")

console.log("--FASE4--")
console.log("")

var nom = new Array;
nom.push("C");
nom.push("R");
nom.push("I");
nom.push("S");
nom.push("T");
nom.push("I");
nom.push("A");
nom.push("N");

var espacio = new Array;
espacio.push("  ");

var apelli = new Array;
apelli.push("V");
apelli.push("I");
apelli.push("L");
apelli.push("L");
apelli.push("E");
apelli.push("G");
apelli.push("A");
apelli.push("S");

myNombre = nom + espacio + apelli;

console.log("Mi nombre es: " + "[" + myNombre + "]")

//Sale como es pero he tenido que añadir a mano los '[]'.