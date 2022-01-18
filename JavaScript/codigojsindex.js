/* Cuando el id 'header termine su animaciín, el estilo overflow obtendrá el valor visible */
document.getElementById('header').addEventListener('animationend', () => {
  document.body.style.overflow = 'visible';
})