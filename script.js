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









astra.addEventListener('click', () => {
    alterarContexto('astra')
})

breach.addEventListener('click', () => {
    alterarContexto('breach')
})

brimstone.addEventListener('click', () => {
    alterarContexto('brimstone')
})

chamber.addEventListener('click', () => {
    alterarContexto('chamber')
})

cypher.addEventListener('click', () => {
    alterarContexto('cypher')
})



function alterarContexto(contexto) {
    agentePickado.setAttribute('src', `./images/${contexto}.png`)//Trocar a foto de acordo com a página
    switch (contexto) { //Trocar o texto de acordo com a página
        case "astra":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
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
            break;
        case "breach":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">BREACH</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/breach c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/breach q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/breach e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/breach x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.</p>
                <b class="role__agente">Iniciador</b>
                <p class="info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            break;
        case "brimstone":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Controlador</h3>
                <h1 class="nome__agente">BRIMSTONE</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/controlador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/brimstone c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/brimstone q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/brimstone e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/brimstone x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Vindo diretamente dos EUA, o arsenal orbital do Brimstone garante que o esquadrão dele sempre esteja em vantagem. Sua capacidade de oferecer utilitários com precisão e segurança faz dele um comandante inigualável na linha de frente.</p>
                <b class="role__agente">Controlador</b>
                <p class="info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>
            </div>
            `
            break;
        case "chamber":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Sentinela</h3>
                <h1 class="nome__agente">CHAMBER</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/sentinela.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/chamber c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/chamber q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/chamber e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/chamber x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Bem-vestido e armado até os dentes, o criador de armas francês Chamber coloca os inimigos para correr com precisão mortal. Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe, criando a defesa perfeita para qualquer plano.</p>
                <b class="role__agente">Sentinela</b>
                <p class="info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>
            </div>
            `
            break;
        case "cypher":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Sentinela</h3>
                <h1 class="nome__agente">CHYPER</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/sentinela.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/cypher c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/cypher q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/cypher e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/cypher x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.</p>
                <b class="role__agente">Sentinela</b>
                <p class="info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>
            </div>
            `
            break;

            
        default:
            break;
    }
}