document.addEventListener('DOMContentLoaded', () => {
  const btnUpdate = document.querySelector('#btn-update');
  updateScreen();
  
  btnUpdate.addEventListener('click', () => {
    updateScreen();
  });
});

function updateScreen() {
  const time = document.querySelector('.time');
  const greetings = document.querySelector('.greetings');
  const date = new Date();
  const hour = date.getHours();

  time.textContent = getTime(date);
  greetings.textContent = getGreeting(hour);
  changeImage(hour);
}

function getTime(date) {
  // Caso o número tenha apenas uma casa decimal, 
  // será adicionado um zero à esquerda

  const hour = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');
  
  const time = `${hour}:${min}:${sec}`
  return time;
}

function changeImage(time) {
  const img = document.querySelector('.img');
  const baseURL = `./assets/img`

  if (time >= 18 || time < 6) {
    img.setAttribute('src', `${baseURL}/lua.png`);
  } else {
    img.setAttribute('src', `${baseURL}/sol.png`);
  }
}

function getGreeting(hour) {
  if(hour >= 6 && hour < 12) {
    return 'Bom dia';
  }

  if(hour >= 12 && hour < 18) {
    return 'Boa Tarde'
  }

  return 'Boa Noite'
}
