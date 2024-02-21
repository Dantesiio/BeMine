var imagenes = ["img1", "img2"];
var indice = 0;

var contenedor = document.getElementById("container-imagen");

var boton = document.getElementById("no-button");

boton.addEventListener("click", function() {
  var imagen = document.createElement("img");
  imagen.src = "img/" + imagenes[indice];

  contenedor.innerHTML = "";
  contenedor.appendChild(imagen);
  indice++;
  if (indice == imagenes.length) {
    indice = 0;
  }
});
