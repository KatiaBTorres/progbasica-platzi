document.addEventListener("keyup", moverCerdito);

var vp = document.getElementById("Villa Platzi");
var papel = vp.getContext("2d");

var xc = aleatorio(0, 420);
var yc = aleatorio(0, 420);

var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var fondo = {
  url: "tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};
var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var cantidad = aleatorio(0, 6);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if(vaca.cargaOK)
  {
    console.log(cantidad);
    for(var v=0; v < cantidad; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if(cerdo.cargaOK == true)
  {
    papel.drawImage(cerdo.imagen, xc, yc);
  }

  if(pollo.cargaOK)
  {
    console.log(cantidad);
    for(var p=0; p < cantidad; p++)
    {
      var x = aleatorio(0, 10);
      var y = aleatorio(0, 10);
      var x = x * 40;
      var y = y * 40;
      papel.drawImage(pollo.imagen, x, y);
    }
    }
}

function moverCerdito(evento)
 {
  var movimiento = 20;
  switch(evento.keyCode)
  {
    case teclas.DOWN:
    yc = yc + movimiento;
    cargarCerdos();
    break;
    case teclas.UP:
    yc = yc - movimiento;
    cargarCerdos();
    break;
    case teclas.LEFT:
    xc = xc - movimiento;
    cargarCerdos();
    break;
    case teclas.RIGHT:
    xc = xc + movimiento;
    cargarCerdos();
    break;
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
