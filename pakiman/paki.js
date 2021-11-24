var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 50));
coleccion.push(new Pakiman("Pokacho", 50, 75));
coleccion.push(new Pakiman("Tocinauro", 75, 80));

for(var pakiman of coleccion)
{
  pakiman.mostrar();
}

for(var x in coleccion[0])
{
  console.log(x);
}
