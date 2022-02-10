const androides = document.getElementById("androides");

function aplyBBlend(idBlend, blend){
  document.getElementById(`${idBlend}`).addEventListener('click', () => {
    androides.style.backgroundBlendMode=`${blend}`;
  });
}
function aplyMBlend(idBlend, blend){
  document.getElementById(`${idBlend}`).addEventListener('click', () => {
    androides.style.mixBlendMode=`${blend}`;
  });
}

aplyBBlend("bbm-multiply", "multiply");
aplyBBlend("bbm-screen", "screen");
aplyBBlend("bbm-overlay", "overlay");
aplyBBlend("bbm-hardlight", "hard-light");
aplyBBlend("bbm-softlight", "soft-light");
aplyBBlend("bbm-colordodge", "color-dodge");
aplyBBlend("bbm-colorburn", "color-burn");
aplyBBlend("bbm-darken", "darken");
aplyBBlend("bbm-lighten", "lighten");
aplyMBlend("mbm-difference", "difference");
aplyMBlend("mbm-exclusion", "exclusion");
aplyMBlend("mbm-hue", "hue");
aplyMBlend("mbm-color", "color");
aplyMBlend("mbm-saturation", "saturation");
aplyMBlend("mbm-luminosity", "luminosity");