var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina = piedra;

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);


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
