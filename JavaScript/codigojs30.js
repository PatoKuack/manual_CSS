function applyScroll(idScroll, idEjemplo, propertyscroll, typestyle){
  let ejemplo = document.getElementById(`${idEjemplo}`);
  document.getElementById(`${idScroll}`).addEventListener('click', () => {
    switch(propertyscroll){
      case "overflow":
        ejemplo.style.overflow=`${typestyle}`;
        console.log("hola1");
        break;
      case "overflowX":
        ejemplo.style.overflowX=`${typestyle}`;
        console.log("hola2");
        break;
      case "overflowY":
        ejemplo.style.overflowY=`${typestyle}`;
        console.log("hola3");
        break;
    }
  });
}

applyScroll("ovisible", "desbordamiento", "overflow", "visible");
applyScroll("ohidden", "desbordamiento", "overflow", "hidden");
applyScroll("oscroll", "desbordamiento", "overflow", "scroll");
applyScroll("oauto", "desbordamiento", "overflow", "auto");
applyScroll("ox", "desbordamiento", "overflowX", "scroll");
applyScroll("oy", "desbordamiento", "overflowY", "scroll");