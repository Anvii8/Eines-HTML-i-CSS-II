/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

const urlCompleta = document.URL;
const info = document.getElementById('info');
const actividades = document.getElementById('actividades');
const galeria = document.getElementById('galeria');

const partesURL = urlCompleta.split('/');
const nombreArchivo = partesURL[partesURL.length - 1];

indicarPagina(nombreArchivo);

function indicarPagina(nombreArchivo) {
  if (nombreArchivo.includes("index") || nombreArchivo === ""){
    info.style.color = "rgb(254, 105, 106)";
  }
  else if (nombreArchivo.includes("actividades")){
    actividades.style.color = "rgb(254, 105, 106)";
  }
  else if (nombreArchivo.includes("galeria")){
    galeria.style.color = "rgb(254, 105, 106)";
  }
}
