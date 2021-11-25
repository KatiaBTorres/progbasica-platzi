class Billete
{
  constructor(v, c)
  {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
    this.imagen.src = imagenes[this.valor];
  }

  mostrar()
  {
    "<br />";
    document.body.appendChild(this.imagen)  + "<br />";
    "<br />";
    setTimeout("location.reload(true);",10000);
  }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bi.valor);

      if(div > bi.cantidad)
      {
        papeles = bi.cantidad;
      }
      else
      {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if(dinero > 0)
  {
    resultado.innerHTML = "Soy un cajero pobre y no puedo darte esa cantidad :C";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      {
        resultado.innerHTML += e.cantidad + "billetes de $ " + e.valor + "<br />";
        for(var i = 0; i < e.cantidad; i++)
        {
          "<br/>";
          e.mostrar();
          "<br/>"
        }
      }
    }
  }
}

var imagenes = [];
imagenes[500] = "500.png";
imagenes[200] = "200.png";
imagenes[100] = "100.png";
imagenes[50] = "50.png";
imagenes[20] = "20.png";


var caja = [];
var entregado = [];
caja.push(new Billete(500, 10));
caja.push(new Billete(200, 10));
caja.push(new Billete(100, 10));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 10));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
