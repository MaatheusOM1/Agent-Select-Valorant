const astra = document.querySelector('.astra')
const breach = document.querySelector('.breach')
const brimstone = document.querySelector('.brimstone')
const chamber = document.querySelector('.chamber')
const cypher = document.querySelector('.cypher')
const deadlock = document.querySelector('.deadlock')
const fade = document.querySelector('.fade')
const geeko = document.querySelector('.geeko')
const harbor = document.querySelector('.harbor')
const jett = document.querySelector('.jett')
const kayo = document.querySelector('.kayo')
const killjoy = document.querySelector('.killjoy')
const neon = document.querySelector('.neon')
const omen = document.querySelector('.omen')
const phoenix = document.querySelector('.phoenix')
const raze = document.querySelector('.raze')
const reyna = document.querySelector('.reyna')
const sage = document.querySelector('.sage')
const skye = document.querySelector('.skye')
const sova = document.querySelector('.sova')
const viper = document.querySelector('.viper')
const yoru = document.querySelector('.yoru')



const tempoNaTela = document.querySelector('#timer')
let tempoDecorridoEmSegundos = 90
let intervaloId = null


//Função para a contagem regressiva do contador
const contagemRegressiva = () => { 
    if(tempoDecorridoEmSegundos <= 0){ //Se o contador chegar em 0, toca o som de alerta
        pararContagem()
        return //Return para acabar por aqui, e não popar o alerta infinitamente
    }
    tempoDecorridoEmSegundos -= 1 //Tira um segundo do contador por vez
    mostrarTempo()
}

//Função de Iniciar ou Pausar o cronômetro
function iniciarOuPausar() {
    intervaloId = setInterval(contagemRegressiva, 1000) //Inicia contagemRegressiva a cada 1000 milissegundose e armazena o ID do intervalo resultante na variável intervaloId
}

//Funcção de mostrar o tempo do cronômetro
function mostrarTempo(){
    tempoNaTela.innerHTML = tempoDecorridoEmSegundos //Para aparecer o contador
}

function pararContagem(){
    clearInterval(intervaloId) //Parar contagem iniciada na função iniciarOuPausar
    intervaloId = null //Quando "intervaloId" é null, isso significa que não há nenhuma contagem regressiva em andamento, e se define novamente pois a função iniciarOuPausar armazenou o ID do intervalo na variável intervaloId
}

mostrarTempo() //Puxa a função no escopo global para sempre aparecer o cronômetro na tela
iniciarOuPausar() //Puxa a função no escopo global para já começar o contador
