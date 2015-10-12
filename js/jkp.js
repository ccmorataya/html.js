var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina = papel;

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

//alert ("Elegiste " + opcionUsuario);

if (opcionUsuario == piedra)
{
    alert("Elegiste piedra");

    if (opcionMaquina == piedra)
    {
        alert("Empate");
    }
    else if (opcionMaquina == papel)
    {
        alert("Perdiste");
    }
    else if (opcionMaquina == tijera)
    {
        alert("Ganaste");
    }
}
else if (opcionUsuario == papel)
{
    alert("Elegiste papel");

    if (opcionMaquina == piedra)
    {
        alert("Ganaste");
    }
    else if (opcionMaquina == papel)
    {
        alert("Empate");
    }
    else if (opcionMaquina == tijera)
    {
        alert("Perdiste");
    }
}
else if (opcionUsuario == tijera)
{
    alert("Elegiste tijera");

    if (opcionMaquina == piedra)
    {
        alert("Perdiste");
    }
    else if (opcionMaquina == papel)
    {
        alert("Ganaste");
    }
    else if (opcionMaquina == tijera)
    {
        alert("Empate");
    }
}
else
{
    alert("No elegiste opción");
}
