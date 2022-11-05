const button = document.getElementById('toDarkMode');
const htmlId = document.getElementById('htmlId');

function defineTheme() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    htmlId.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    htmlId.classList.remove('dark');
    localStorage.theme = 'light';
  }
  // Cuando el usuario cambie el modo desde el sistema operativo
  // localStorage.removeItem('theme')
}

function changeTheme() {
  if('theme' in localStorage) {
    console.log("true");
    switch(localStorage.theme) {
      case 'light':
        htmlId.classList.add('dark');
        localStorage.theme = 'dark';
        break;
      case 'dark':
        htmlId.classList.remove('dark');
        localStorage.theme = 'light';
        break;
      default:
        htmlId.classList.remove('dark');
        localStorage.theme = 'light';
    }
  } else {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      htmlId.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      htmlId.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }
}

document.addEventListener('DOMContentloaded', defineTheme);
button.addEventListener('click', changeTheme);