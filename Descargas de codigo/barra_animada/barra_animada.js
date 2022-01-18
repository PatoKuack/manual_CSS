document.getElementById('animate').addEventListener('click', e => {
  document.body.classList.toggle('animate');
  e.target.textContent == "Animar" 
                       ? e.target.textContent = 'Detener'
                       : e.target.textContent = 'Animar';
});