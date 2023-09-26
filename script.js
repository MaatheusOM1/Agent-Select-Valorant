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

const infoAgentes = document.querySelector('.container__wrap')
const agentePickado = document.querySelector('#agente__pickado')


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





astra.addEventListener('click', () =>{
    infoAgentes.innerHTML = `
    <div class="container__informacoes-agentes">
    <h3 class="role__agente">Controlador</h3>
    <h1 class="nome__agente">ASTRA</h1>
    <div class="container__skills">
        <div class="role__agente-icone skills">
            <p>INFO</p>
            <img src="/images/controlador.png" alt="" class="skills__logo">
        </div>
        <div class="skill-c skills">
            <p>C</p>
            <img src="/images/astra c.png" alt="" class="skills__logo">
        </div>
        <div class="skill-q skills">
            <p>Q</p>
            <img src="/images/astra q.png" alt="" class="skills__logo">
        </div>
        <div class="skill-e skills">
            <p>E</p>
            <img src="/images/astra e.png" alt="" class="skills__logo">
        </div>
        <div class="skill-x skills">
            <p>X</p>
            <img src="/images/astra x.png" alt="" class="skills__logo">
        </div>
    </div>
    <p class="info__agente">Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.</p>
    <b class="role__agente">Controlador</b>
    <p class="info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>
</div>
    `
    agentePickado.setAttribute('src', `./images/astra.png`)//Trocar a foto de acordo com a página
})