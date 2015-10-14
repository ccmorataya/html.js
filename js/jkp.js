
function aleatorio(min, max)
{
    var numero = Math.floor(Math.random() * (max - min +1) + min);
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = aleatorio(0, 2);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("JanKenPon.JS eligió " + opciones[opcionMaquina]);

    if (opcionUsuario == opcionMaquina)
    {
        alert("Empate");
    }
    else if(opcionUsuario != opcionMaquina)
    {
        if (opcionUsuario == piedra && opcionMaquina == papel ||
                opcionUsuario == papel && opcionMaquina == tijera ||
                opcionUsuario == tijera && opcionMaquina == piedra)
        {
            alert("Perdiste");
        }
        else if (opcionUsuario == piedra && opcionMaquina == tijera ||
                opcionUsuario == papel && opcionMaquina == piedra ||
                opcionUsuario == tijera && opcionMaquina == papel) 
        {
            alert("Ganaste");
        }
        else
        {
            alert("No elegiste ni piedra, ni papel, ni tijera intenta de nuevo");
        }
    }
