  const input1 = document.getElementById('input-1');
  const input2 = document.getElementById('input-2');
  const input3 = document.getElementById('input-3');
  const input4 = document.getElementById('input-4');
  const input5 = document.getElementById('input-5');
  function desapear( layer, input ) {
    if(input.checked === true) {
      layer.style.zIndex = '-1';
    }
  }
  input1.addEventListener('change', () => {
    desapear(document.getElementById('layer-1'), input1);
  })
  input2.addEventListener('change', () => {
    desapear(document.getElementById('layer-2'), input2);
  })
  input3.addEventListener('change', () => {
    desapear(document.getElementById('layer-3'), input3);
  })
  input4.addEventListener('change', () => {
    desapear(document.getElementById('layer-4'), input4);
  })
  input5.addEventListener('change', () => {
    desapear(document.getElementById('layer-5'), input5);
  })


  


const gameContainer = document.getElementById('game-container');
const kaboom = document.getElementById('kaboom');
  function fireIn(eventX, eventY, bodyWidth) {
    kaboom.style.display = 'block';
    // event.pageX - (borderContent/2)=5px - (widthKaboom/2)=25px - (widthBody/2) + (widthContent/2)=150px
    kaboom.style.left = `${eventX + 120 - (bodyWidth / 2)}px`;
    // event.pageY - (borderContent/2)=5px - (paddingBody/2)=32px - (heightKaboom/2)=25px
    kaboom.style.top = `${eventY - 62}px`;
    setTimeout( fireOut, 500 )
  }
  function fireOut() {
    kaboom.style.display = 'none';
    if(input1.checked && input2.checked && input3.checked && input4.checked && input5.checked) {
      document.getElementById('win').style.display = 'grid';
    }
  }
  gameContainer.addEventListener('click', () => {
    gameContainer.append(kaboom);
    let bodyWidth = getComputedStyle(document.body).width;
    // bodtWidth obtiene un string (como '1500px') así que al pasarlo como argumento, se transforma en número cortandole el 'px' del string y usando Number() para transformarlo a número
    fireIn(event.pageX, event.pageY, Number(bodyWidth.slice(0, -2)));
  });