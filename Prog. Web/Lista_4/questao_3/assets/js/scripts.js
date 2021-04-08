document.addEventListener('DOMContentLoaded', () => {
  let date = new Date();
  // let date = new Date('2021-12-25 00:00');
  
  const todayDOM = document.querySelector('.today');
  const remaingDays = document.querySelector('#remaining-days')
  const xmas = new Date(`${date.getFullYear()}-12-25 00:00`);
  
  // Internacinalização da data
  const today = new Intl.DateTimeFormat('pt-BR').format(date);

  // Pegando a diferença entre as datas e convertendo em dias
  const diff = xmas.getTime() - date.getTime();

  // Evitando números "mágicos" que possam complicar em uma manutenção

  const seg = 1000;
  const min = 60 * seg;
  const hour = 60 * min;
  const dayInMs = 24 * hour;
  
  // Convertendo de milissegundos para dias
  const diffDays = Math.ceil(diff / dayInMs)

  // Setando o texto da DOM
  todayDOM.textContent = today;
  remaingDays.innerHTML = getMessage(diffDays);
});

function getMessage(days) {
  if(days < 0) return "O Natal já passou"
  if(days === 0) return "É Natal"
  if(days === 1) return "É Véspera de Natal"

  return `Faltam <strong>${days}</strong> dias para o Natal!`
}
