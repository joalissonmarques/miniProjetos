let acao = document.getElementById('acao');
let pausa = document.getElementById('pausa');
let sessoes = document.getElementById('sessoes');
let segundos;
let fim = document.getElementById('timer-final');

let bell = new Audio('assets/audio/audio_bell.mp3');
let volta = new Audio('assets/audio/audio_volta.mp3');
let final = new Audio('assets/audio/audio_final.mp3');

let lofi = document.getElementById('lofi-music');
let play = document.getElementById('play');
let pause = document.getElementById('pause');

let timer = document.getElementById('timer-pomo');
let confPomo = document.getElementById('conf-pomo');

function pausar(){
  lofi.pause();
  play.style.setProperty('display','block')
  pause.style.setProperty('display','none')
}

function executar(){
  lofi.play();
  play.style.setProperty('display','none')
  pause.style.setProperty('display','block')
}


function iniciar() {
  if (acao.value == 0) {
    document.getElementById('erro_acao').innerHTML = 'Adicione os Minutos'
    acao.focus()
  } else if (pausa.value == 0) {
    document.getElementById('erro_pausa').innerHTML = 'Adicione as pausas'
    pausa.focus()
  } else if (sessoes.value == 0) {
    document.getElementById('erro_sessoes').innerHTML = 'Adicione as sessões'
    sessoes.focus()
  } else {
    /* Se todos os campos estiverem preenchidos, será dado play em uma musica, mas o usuario pode pausar ela */
    lofi.play()

    /* Setamos o icone de pausa no header */
    pause.style.setProperty('display', 'block')

    /* Estamos salvando na memoria as escolhas do usuario, localstore só aceita string. então vamos converter*/
    localStorage.setItem('acao', String(acao.value))
    localStorage.setItem('pausa', String(pausa.value))
    localStorage.setItem('sessoes', String(sessoes.value))

    /* Ao iniciar, vamos retirar as opções e iniciar o relogio */
    confPomo.style.setProperty('display', 'none')
    /* Aparecer o relogio */
    timer.style.setProperty('display', 'block')

    momentoAcao();
  }
}

function momentoAcao() {
  /* Variaveis */
  let sessoes_valor = localStorage.getItem('sessoes')
  let title_sessao = document.getElementById('title_sessao')
  let title = document.getElementById('title')
  let min_interval = setInterval(minTimer, 60000)
  let seg_interval = setInterval(segTimer, 1000)
  let minutos_timer = document.getElementById('minutos_timer')
  let segundos_timer = document.getElementById('segundos_timer')

  /* se local store for diferente de um, ele ta no plural > 1 */
  if (sessoes_valor != '1') {
    title_sessao.innerHTML = sessoes_valor + ' Sessões restantes'
  } else {
    title_sessao.innerHTML = sessoes_valor + ' Sessão restante'
  }

  /* Iniciando a contagem  */
  title.innerHTML = 'ação'
  title.style.setProperty('color', '#00DB7C')

  /* Number de minutos, se colocarmos um + na frente, ele converter para number*/

  min = +localStorage.getItem('acao')

  min = min - 1
  segundos = 59

  minutos_timer.innerHTML = min
  segundos_timer.innerHTML = segundos

  function minTimer() {
    min = min - 1
    minutos_timer.innerHTML = min
  }

  function segTimer() {
    segundos = segundos - 1
    segundos_timer.innerHTML = segundos

    /* Momento de ação */
    if (segundos <= 0) {
      if (min <= 0) {
        clearInterval(min_interval)
        clearInterval(seg_interval)

        bell.play()
        momentoPausa()
      }
      segundos = 60
    }
  }
}

function momentoPausa() {
  let title = document.getElementById('title')
  let min_pausa = localStorage.getItem('pausa')
  let minutos_ok = document.getElementById('minutos_timer')
  let segundos_ok = document.getElementById('segundos_timer')
  let min_interval = setInterval(minTimer, 60000)
  let seg_interval = setInterval(segTimer, 1000)

  title.innerHTML = 'pausa'
  title.style.setProperty('color', '#FFF')
  document.body.style.setProperty('background-color', '#457CA3')
  document.getElementById('header-nav').style.setProperty('background-color', '#457CA3');

  min_pausa = +localStorage.getItem('pausa')

  min_pausa = min_pausa - 1
  segundos = 59

  minutos_ok.innerHTML = min_pausa
  segundos_ok.innerHTML = segundos

  function minTimer() {
    min_pausa = min_pausa - 1
    minutos_timer.innerHTML = min_pausa
  }

  function segTimer() {
    segundos = segundos - 1
    segundos_timer.innerHTML = segundos

    /* Momento de ação */
    if (segundos <= 0) {
      if (min_pausa <= 0) {
        ses = +localStorage.getItem('sessoes')
        ses = ses - 1

        localStorage.setItem('sessoes', String(ses))

        clearInterval(min_interval)
        clearInterval(seg_interval)

        if (ses <= 0) {
          final.play()
          localStorage.clear()

          confPomo.style.setProperty('display', 'none');
          timer.style.setProperty('display', 'none');
          fim.style.setProperty('display', 'flex');
        }else {
          volta.play();
          momentoAcao();
        }
      }
      segundos = 60
    }
  }
}
