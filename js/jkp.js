var piedra = 0;
var papel = 1;
var tijera = 2;

var opcionUsuario;
var opcionMaquina;

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);

//alert ("Elegiste " + opcionUsuario);

if (opcionUsuario == piedra)
{
    alert("Elegiste piedra");
}
else if (opcionUsuario == papel)
{
    alert("Elegiste papel");
}
else if (opcionUsuario == tijera)
{
    alert("Elegiste tijera");
}
