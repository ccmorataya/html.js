var peso;
var pesoEnMarte;

alert("Quieres saber tu peso en marte");
peso = prompt("Cual es tu peso", "70");

peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert("Tu peso en marte " + pesoEnMarte + " Kg");
