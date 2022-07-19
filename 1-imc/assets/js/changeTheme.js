const btnChangeTheme = document.querySelector('#change-theme');

/* Adiciona/remove a classe dark no body */
function changeModeTheme() {
  document.body.classList.toggle('dark')
}
/* Pego no local se ele tem o toggle ou não */
function saveTheme(){
  const darkMode = localStorage.getItem('dark');

  if(darkMode){
    changeModeTheme();
  }
}
/* Executo a função do localStorage */
saveTheme();

/* Evento no "botão" para executar a troca de tema. */
btnChangeTheme.addEventListener("change", function changeTheme(){
  changeModeTheme();
  localStorage.removeItem('dark');

  if(document.body.classList.contains('dark')){
    localStorage.setItem('dark', 1);
  }
});