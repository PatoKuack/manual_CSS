const rangoGrayscale = document.getElementById('rangograyscale');
const rangoSepia = document.getElementById('rangosepia');
const rangoInvert = document.getElementById('rangoinvert');
const rangoHuerotate = document.getElementById('rangohuerotate');
const rangoBrightness = document.getElementById('rangobrightness');
const rangoContrast = document.getElementById('rangocontrast');
const rangoSaturate = document.getElementById('rangosaturate');
const rangoBlur = document.getElementById('rangoblur');
const rangoOpacity = document.getElementById('rangoopacity');
const rangoDropshadowX = document.getElementById('rangodropshadowX');
const rangoDropshadowY = document.getElementById('rangodropshadowY');
const rangoDropshadowBlur = document.getElementById('rangodropshadowBlur');
const rangoDropshadowColor = document.getElementById('rangodropshadowColor');

const buttonFilter = document.getElementById('buttonfilter');

const imgGrayscale = document.getElementById('grayscale');
const imgSepia = document.getElementById('sepia');
const imgInvert = document.getElementById('invert');
const imgHuerotate = document.getElementById('huerotate');
const imgBrightness = document.getElementById('brightness');
const imgContrast = document.getElementById('contrast');
const imgSaturate = document.getElementById('saturate');
const imgBlur = document.getElementById('blur');
const imgOpacity = document.getElementById('opacity');
const imgDropshadow = document.getElementById('dropshadow');


function getRange( range ){
  let valorRango = range.value;
  const valorNumerico = parseInt(valorRango);
  return(valorNumerico);
}

function aplyFilter(afInput, afImage, afFilter, unidad){
  afInput.addEventListener('change', () => {
    let valorRango = getRange(afInput);
    let porcentual = (valorRango * 10);
    afImage.style.display=`block`;
    afImage.style.filter=`${afFilter}(${porcentual}${unidad})`;
  });
}

function aplyFilterAnimated(afInput, afImage, afFilter, division, unidad){
  afInput.addEventListener('change', () => {
    let valorRango = getRange(afInput);
    let porcentual = (valorRango / division) ;
    afImage.style.display=`block`;
    afImage.style.filter=`${afFilter}(${porcentual}${unidad})`;
  });
}

function aplyFilterDropShadow(){
  let valorRangoX = getRange(rangoDropshadowX);
  let valorRangoY = getRange(rangoDropshadowY);
  let valorRangoBlur = getRange(rangoDropshadowBlur);
  let valorRangoColor = rangoDropshadowColor.value;

  rangoDropshadowX.addEventListener('change', () => {
    valorRangoX = getRange(rangoDropshadowX);
  });
  rangoDropshadowY.addEventListener('change', () => {
    valorRangoY = getRange(rangoDropshadowY);
  });
  rangoDropshadowBlur.addEventListener('change', () => {
    valorRangoBlur = getRange(rangoDropshadowBlur);
  });
  rangoDropshadowColor.addEventListener('change', () => {
    valorRangoColor = rangoDropshadowColor.value;
  });
  buttonFilter.addEventListener('click', () => {
    imgDropshadow.style.display=`block`;
    imgDropshadow.style.filter=`drop-shadow(${valorRangoX}px ${valorRangoY}px ${valorRangoBlur}px ${valorRangoColor})`;
  });
}

aplyFilter(rangoGrayscale, imgGrayscale, "grayscale", "%");
aplyFilter(rangoSepia, imgSepia, "sepia", "%");
aplyFilter(rangoInvert, imgInvert, "invert", "%");
aplyFilter(rangoHuerotate, imgHuerotate, "hue-rotate", "deg");
aplyFilter(rangoBrightness, imgBrightness, "brightness", "%");
aplyFilter(rangoContrast, imgContrast, "contrast", "%");
aplyFilter(rangoSaturate, imgSaturate, "saturate", "%");
aplyFilterAnimated(rangoBlur, imgBlur, "blur", 5, "px");
aplyFilterAnimated(rangoOpacity, imgOpacity, "opacity", 10, "");
aplyFilterDropShadow();
