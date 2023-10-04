//Declaração das variáveis de cada agente
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

//Declaração das variáveis para o timer
const tempoNaTela = document.querySelector('#timer')
let tempoDecorridoEmSegundos = 90

const infoAgentes = document.querySelector('.container__wrap') //Variável para manipulação de DOM
const agentePickado = document.querySelector('#agente__pickado') //Variável para mudar a foto de acordo com o agente
const Picking = document.querySelector('.picking') //Variável para trocar o nome de acordo com o pick

const btnConfirmar = document.querySelector('.btn__confirmar') //Variável do botão "CONFIRMAR"
const textoConfirmar = document.querySelector('.texto__confirmar')//Variável do texto do botão "CONFIRMAR"
const agentes = document.querySelectorAll('.agente'); //Variável de todos os agentes

//Variável para o agente selecionado
let agenteSelecionado = null

//Variável para o botao confirmar se ainda nao estiver clicado
let btnConfirmarNaoClicado = true

//Variáveis dos sons
const selecionarAgente = new Audio('./sounds/selecionar-agente.mp3')
const passarMouseAgente = new Audio('./sounds/passar-mouse-em-agentes.mp3')
const cliqueSkills = new Audio('./sounds/clique-nas-skills.mp3')
const cliqueConfirmar = new Audio('./sounds/passar-mouse-em-confirmar.mp3')
const selecioneUmAgente = new Audio('./sounds/selecione-um-agente.mp3')
//Sons dos agentes quando os confirma
const lockAstra = new Audio('./sounds/lock-in-astra.mp3')
const lockBreach = new Audio('./sounds/lock-in-breach.mp3')
const lockBrimstone= new Audio('./sounds/lock-in-brimstone.mp3')
const lockChamber = new Audio('./sounds/lock-in-chamber.mp3')
const lockCypher = new Audio('./sounds/lock-in-cypher.mp3')
const lockDeadlock = new Audio('./sounds/lock-in-deadlock.mp3')
const lockFade= new Audio('./sounds/lock-in-fade.mp3')
const lockGeeko = new Audio('./sounds/lock-in-geeko.mp3')
const lockHarbor = new Audio('./sounds/lock-in-harbor.mp3')
const lockJett = new Audio('./sounds/lock-in-jett.mp3')
const lockKayo = new Audio('./sounds/lock-in-kayo.mp3')
const lockKilljoy = new Audio('./sounds/lock-in-killjoy.mp3')
const lockNeon = new Audio('./sounds/lock-in-neon.mp3')
const lockOmen = new Audio('./sounds/lock-in-omen.mp3')
const lockPhoenix = new Audio('./sounds/lock-in-phoenix.mp3')
const lockRaze = new Audio('./sounds/lock-in-raze.mp3')
const lockReyna = new Audio('./sounds/lock-in-reyna.mp3')
const lockSage = new Audio('./sounds/lock-in-sage.mp3')
const lockSkye = new Audio('./sounds/lock-in-skye.mp3')
const lockSova = new Audio('./sounds/lock-in-sova.mp3')
const lockViper = new Audio('./sounds/lock-in-viper.mp3')
const lockYoru = new Audio('./sounds/lock-in-yoru.mp3')


//Funções para o Contador
//Função para a contagem regressiva do contador
const contagemRegressiva = () => { 
    if(tempoDecorridoEmSegundos <= 0){
        return //Return para parar no 0
    }
    tempoDecorridoEmSegundos -= 1 //Tira um segundo do contador por vez
    mostrarTempo()
    somSelecioneUmAgente()
    piscarCronometro()
}

//Função de Iniciar ou Pausar o cronômetro
function iniciarCronometro() {
    setInterval(contagemRegressiva, 1000) //Inicia contagemRegressiva a cada 1000 milissegundos
}

//Função de mostrar o tempo do cronômetro
function mostrarTempo(){
    tempoNaTela.innerHTML = tempoDecorridoEmSegundos //Para aparecer o contador
}

//Função para tocar o som se selecione um agente, apenas se o botao confirmar ainda nao tiver sido clicado e o tempo for igual ou menor que 11
function somSelecioneUmAgente(){
    if(btnConfirmarNaoClicado && tempoDecorridoEmSegundos == 11){
        selecioneUmAgente.play()
    }
}

 //Função para piscar o cronometro em vermelho quando o tempo tiver acabando a menos que o botao confirmar nao tenha sido clicado
function piscarCronometro() {
    if (tempoDecorridoEmSegundos <= 10 && btnConfirmarNaoClicado) {
        if (tempoNaTela.style.color === 'red') {
            tempoNaTela.style.color = 'white';
        } else {
            tempoNaTela.style.color = 'red';
        }
    }
}
mostrarTempo() //Puxa a função no escopo global para sempre aparecer o cronômetro na tela
iniciarCronometro() //Puxa a função no escopo global para já começar o contador


//Mudar o contexto para cada agente
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

deadlock.addEventListener('click', () => {
    alterarContexto('deadlock')
})

fade.addEventListener('click', () => {
    alterarContexto('fade')
})

geeko.addEventListener('click', () => {
    alterarContexto('geeko')
})

harbor.addEventListener('click', () => {
    alterarContexto('harbor')
})

jett.addEventListener('click', () => {
    alterarContexto('jett')
})

kayo.addEventListener('click', () => {
    alterarContexto('kayo')
})

killjoy.addEventListener('click', () => {
    alterarContexto('killjoy')
})

neon.addEventListener('click', () => {
    alterarContexto('neon')
})

omen.addEventListener('click', () => {
    alterarContexto('omen')
})

phoenix.addEventListener('click', () => {
    alterarContexto('phoenix')
})

raze.addEventListener('click', () => {
    alterarContexto('raze')
})

reyna.addEventListener('click', () => {
    alterarContexto('reyna')
})

sage.addEventListener('click', () => {
    alterarContexto('sage')
})

skye.addEventListener('click', () => {
    alterarContexto('skye')
})

sova.addEventListener('click', () => {
    alterarContexto('sova')
})

viper.addEventListener('click', () => {
    alterarContexto('viper')
})

yoru.addEventListener('click', () => {
    alterarContexto('yoru')
})

//Função para alterar o texto de acordo com o agente clicado
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
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/controlador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/astra c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/astra q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/astra e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/astra x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.</p>
                <b class="role__agente" id="atualizar-role__agente" id="testeroleagente">Controlador</b>
                <p class="info__role" id="atualizar-info__role" id="testeinforole">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>
            </div>
            `
            Picking.innerHTML = `Astra`
            break;
        case "breach":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">BREACH</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/breach c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/breach q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/breach e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/breach x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.</p>
                <b class="role__agente" id="atualizar-role__agente">Iniciador</b>
                <p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            Picking.innerHTML = `Breach`
            break;
        case "brimstone":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Controlador</h3>
                <h1 class="nome__agente">BRIMSTONE</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/controlador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/brimstone c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/brimstone q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/brimstone e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/brimstone x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Vindo diretamente dos EUA, o arsenal orbital do Brimstone garante que o esquadrão dele sempre esteja em vantagem. Sua capacidade de oferecer utilitários com precisão e segurança faz dele um comandante inigualável na linha de frente.</p>
                <b class="role__agente" id="atualizar-role__agente">Controlador</b>
                <p class="info__role" id="atualizar-info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>
            </div>
            `
            Picking.innerHTML = `Brimstone`
            break;
        case "chamber":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Sentinela</h3>
                <h1 class="nome__agente">CHAMBER</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/sentinela.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/chamber c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/chamber q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/chamber e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/chamber x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Bem-vestido e armado até os dentes, o criador de armas francês Chamber coloca os inimigos para correr com precisão mortal. Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe, criando a defesa perfeita para qualquer plano.</p>
                <b class="role__agente" id="atualizar-role__agente">Sentinela</b>
                <p class="info__role" id="atualizar-info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>
            </div>
            `
            Picking.innerHTML = `Chamber`
            break;
        case "cypher":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Sentinela</h3>
                <h1 class="nome__agente">CYPHER</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/sentinela.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/cypher c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/cypher q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/cypher e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/cypher x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.</p>
                <b class="role__agente" id="atualizar-role__agente">Sentinela</b>
                <p class="info__role" id="atualizar-info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>
            </div>
            `
            Picking.innerHTML = `Cypher`
            break;
        case "deadlock":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Sentinela</h3>
                <h1 class="nome__agente">DEADLOCK</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/sentinela.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/deadlock c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/deadlock q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/deadlock e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/deadlock x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">A agente norueguesa Deadlock posiciona uma gama de nanofios de alta tecnologia para proteger o campo de batalha até mesmo do ataque mais letal. Ninguém escapa do seu olhar vigilante. Ninguém sobrevive à sua ferocidade implacável.</p>
                <b class="role__agente" id="atualizar-role__agente">Sentinela</b>
                <p class="info__role" id="atualizar-info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>
            </div>
            `
            Picking.innerHTML = `Deadlock`
            break;
        case "fade":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">fade</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/fade c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/fade q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/fade e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/fade x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Fade, uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão.</p>
                <b class="role__agente" id="atualizar-role__agente">Iniciador</b>
                <p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            Picking.innerHTML = `Fade`
            break;
        case "geeko":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">geeko</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/geeko c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/geeko q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/geeko e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/geeko x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Gekko, de Los Angeles, lidera um grupo muito unido de criaturas caóticas. Seus amigos atropelam tudo, tirando os inimigos do caminho. Depois, Gekko corre atrás deles para reagrupá-los e reiniciar o processo.</p>
                <b class="role__agente" id="atualizar-role__agente">Iniciador</b>
                <p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            Picking.innerHTML = `Geeko`
            break;
        case "harbor":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Controlador</h3>
                <h1 class="nome__agente">harbor</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/controlador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/harbor c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/harbor q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/harbor e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/harbor x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Vindo do litoral indiano, Harbor entra em campo com a força da tormenta, empunhando tecnologia ancestral com domínio sobre a água. Ele libera corredeiras espumantes e ondas esmagadoras para proteger seus aliados ou atacar aqueles que se opõem a ele.</p>
                <b class="role__agente" id="atualizar-role__agente">Controlador</b>
                <p class="info__role" id="atualizar-info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>
            </div>
            `
            Picking.innerHTML = `Harbor`
            break;
        case "jett":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">jett</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/jett c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/jett q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/jett e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/jett x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.</p>
                <b class="role__agente" id="atualizar-role__agente">Duelista</b>
                <p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            Picking.innerHTML = `Jett`
            break;
        case "kayo":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">kay/o</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/kayo c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/kayo q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/kayo e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/kayo x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de Suprimir habilidades inimigas, anulando a capacidade de contra-ataque dos adversários e dando a si e a seus aliados uma vantagem essencial em combate.</p>
                <b class="role__agente" id="atualizar-role__agente">Iniciador</b>
                <p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            Picking.innerHTML = `Kay/o`
            break;
        case "killjoy":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Sentinela</h3>
                <h1 class="nome__agente">killjoy</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/sentinela.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/killjoy c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/killjoy q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/killjoy e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/killjoy x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Killjoy, uma alemã genial, defende posições-chave no campo de batalha facilmente com seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs darão conta do recado.</p>
                <b class="role__agente" id="atualizar-role__agente">Sentinela</b>
                <p class="info__role" id="atualizar-info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>
            </div>
            `
            Picking.innerHTML = `Killjoy`
            break;
        case "neon":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">neon</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/neon c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/neon q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/neon e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/neon x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio.</p>
                <b class="role__agente" id="atualizar-role__agente">Duelista</b>
                <p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            Picking.innerHTML = `Neon`
            break;
        case "omen":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Controlador</h3>
                <h1 class="nome__agente">omen</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/controlador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/omen c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/omen q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/omen e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/omen x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.</p>
                <b class="role__agente" id="atualizar-role__agente">Controlador</b>
                <p class="info__role" id="atualizar-info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>
            </div>
            `
            Picking.innerHTML = `Omen`
            break;
        case "phoenix":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">phoenix</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/phoenix c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/phoenix q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/phoenix e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/phoenix x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve.</p>
                <b class="role__agente" id="atualizar-role__agente">Duelista</b>
                <p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            Picking.innerHTML = `Phoenix`
            break;
        case "raze":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">raze</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/raze c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/raze q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/raze e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/raze x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Raze chega do Brasil com uma explosão de carisma e armas enormes. Com seu estilo de jogo "porradeiro", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!</p>
                <b class="role__agente" id="atualizar-role__agente">Duelista</b>
                <p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            Picking.innerHTML = `Raze`
            break;
        case "reyna":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">reyna</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/reyna c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/reyna q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/reyna e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/reyna x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho.</p>
                <b class="role__agente" id="atualizar-role__agente">Duelista</b>
                <p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            Picking.innerHTML = `Reyna`
            break;
        case "sage":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Sentinela</h3>
                <h1 class="nome__agente">sage</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/sentinela.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/sage c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/sage q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/sage e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/sage x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.</p>
                <b class="role__agente" id="atualizar-role__agente">Sentinela</b>
                <p class="info__role" id="atualizar-info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>
            </div>
            `
            Picking.innerHTML = `Sage`
            break;
        case "skye":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">skye</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/skye c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/skye q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/skye e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/skye x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.</p>
                <b class="role__agente" id="atualizar-role__agente">Iniciador</b>
                <p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            Picking.innerHTML = `Skye`
            break;
        case "sova":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">sova</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/sova c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/sova q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/sova e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/sova x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape.</p>
                <b class="role__agente" id="atualizar-role__agente">Iniciador</b>
                <p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            Picking.innerHTML = `Sova`
            break;
        case "viper":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Controlador</h3>
                <h1 class="nome__agente">viper</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/controlador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/viper c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/viper q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/viper e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/viper x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.</p>
                <b class="role__agente" id="atualizar-role__agente">Controlador</b>
                <p class="info__role" id="atualizar-info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>
            </div>
            `
            Picking.innerHTML = `Viper`
            break;
        case "yoru":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">yoru</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills active">
                        <p>INFO</p>
                        <img src="./images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="./images/yoru c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="./images/yoru q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="./images/yoru e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="./images/yoru x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente" id="atualizar-info__agente">Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.</p>
                <b class="role__agente" id="atualizar-role__agente">Duelista</b>
                <p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            Picking.innerHTML = `Yoru`
            break;
        default:
            break;
    }


    document.querySelector('.role__agente-icone').addEventListener('click', () =>{
        atualizarInfoSkill(contexto, 'INFO')
    })
    document.querySelector('.skill-c').addEventListener('click', () =>{
        atualizarInfoSkill(contexto, 'C')
    })
    document.querySelector('.skill-q').addEventListener('click', () =>{
        atualizarInfoSkill(contexto, 'Q')
    })
    document.querySelector('.skill-e').addEventListener('click', () =>{
        atualizarInfoSkill(contexto, 'E')
    })
    document.querySelector('.skill-x').addEventListener('click', () =>{
        atualizarInfoSkill(contexto, 'X')
    })
}

//Função para mudar a escrita de cada skill de acordo com o agente selecionado
function atualizarInfoSkill(contexto, skill) {
    if (skill === 'INFO'){
        document.querySelector('.role__agente-icone').classList.add('active')
        document.querySelector('.skill-c').classList.remove('active')
        document.querySelector('.skill-q').classList.remove('active')
        document.querySelector('.skill-e').classList.remove('active')
        document.querySelector('.skill-x').classList.remove('active')
    }
    if (skill === 'C'){
        document.querySelector('.role__agente-icone').classList.remove('active')
        document.querySelector('.skill-c').classList.add('active')
        document.querySelector('.skill-q').classList.remove('active')
        document.querySelector('.skill-e').classList.remove('active')
        document.querySelector('.skill-x').classList.remove('active')
    }
    if (skill === 'Q'){
        document.querySelector('.role__agente-icone').classList.remove('active')
        document.querySelector('.skill-c').classList.remove('active')
        document.querySelector('.skill-q').classList.add('active')
        document.querySelector('.skill-e').classList.remove('active')
        document.querySelector('.skill-x').classList.remove('active')
    }
    if (skill === 'E'){
        document.querySelector('.role__agente-icone').classList.remove('active')
        document.querySelector('.skill-c').classList.remove('active')
        document.querySelector('.skill-q').classList.remove('active')
        document.querySelector('.skill-e').classList.add('active')
        document.querySelector('.skill-x').classList.remove('active')
    }
    if (skill === 'X'){
        document.querySelector('.role__agente-icone').classList.remove('active')
        document.querySelector('.skill-c').classList.remove('active')
        document.querySelector('.skill-q').classList.remove('active')
        document.querySelector('.skill-e').classList.remove('active')
        document.querySelector('.skill-x').classList.add('active')
    }
    if (contexto === 'astra') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Controlador</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">POÇO GRAVITACIONAL</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">Posicione Estrelas na Forma Astral (tecla da Ultimate) ATIVE uma Estrela para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando frágeis todos que ainda estão presos no centro.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">PULSO NOVA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">Posicione Estrelas na Forma Astral (tecla da Ultimate) ATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois estoura, causando concussão a todos os jogadores na área.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">NEBULOSA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">Posicione Estrelas na Forma Astral (tecla da Ultimate). ATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça). USE uma Estrela para dissipá-la, retornando a Estrela para ser posicionada em um novo local após um período. Dissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">FORMA ASTRAL / DIVISA CÓSMICA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">ATIVE para entrar na Forma Astral, em que você pode posicionar Estrelas com o DISPARO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional. Quando Divisa Cósmica estiver carregada, use o DISPARO ALTERNATIVO na Forma Astral para começar a mirar e, depois, o DISPARO para escolher dois locais. Uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som.</p>`;
        }
    }
    if (contexto === 'breach') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Iniciador</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">PÓS-CHOQUE</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede. O jato causa muito dano a todos que estiverem na área de efeito.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">EstESTOPIMopim</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">FALHA TECTÔNICA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um impacto sísmico. SEGURE O DISPARO para aumentar a distância. SOLTE para iniciar o terremoto, estonteando todos os jogadores na zona e numa linha reta até a zona.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ONDA TROVEJANTE</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone. O terremoto estonteia e derruba todos que estiverem na área de efeito.</p>`;
        }
    }
    if (contexto === 'brimstone') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Vindo diretamente dos EUA, o arsenal orbital do Brimstone garante que o esquadrão dele sempre esteja em vantagem. Sua capacidade de oferecer utilitários com precisão e segurança faz dele um comandante inigualável na linha de frente.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Controlador</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">SINALIZADOR ESTIMULANTE</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um sinalizador estimulante. DISPARE para jogar o sinalizador diante de Brimstone. Ao pousar, o sinalizador criará um campo que concede Tiro Rápido aos jogadores.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">INCENDIÁRIO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um lançador de granadas incendiárias. DISPARE para lançar uma granada que detona no chão, gerando uma zona de fogo que causa dano aos jogadores dentro dela.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">FUMAÇA CELESTE</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um mapa tático. DISPARE para marcar os locais onde as nuvens de fumaça de Brimstone pousarão. Use o DISPARO ALTERNATIVO para confirmar, lançando nuvens de fumaça de longa duração que bloqueiam a visão na área selecionada.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ATAQUE ORBITAL</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um mapa tático. DISPARE para lançar um ataque prolongado de laser orbital no local selecionado, causando muito dano ao longo do tempo aos jogadores na área selecionada.</p>`;
        }
    }
    if (contexto === 'chamber') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Bem-vestido e armado até os dentes, o criador de armas francês Chamber coloca os inimigos para correr com precisão mortal. Use e abuse do arsenal personalizado dele para segurar posições e abater inimigos de longe, criando a defesa perfeita para qualquer plano.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Sentinela</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">MARCA REGISTRADA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma armadilha que busca por inimigos. DISPARE para posicioná-la no chão. Quando um inimigo visível entra no alcance, a armadilha inicia uma contagem regressiva e desestabiliza o terreno ao redor, criando um campo duradouro que Desacelera os jogadores dentro dele. A armadilha pode ser recuperada para ser REPOSICIONADA.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">CAÇADOR DE CABEÇAS</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">ATIVE para equipar uma pistola pesada. Use o DISPARO ALTERNATIVO com a pistola equipada para mirar.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">RENDEZVOUS</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma âncora de teleporte. DISPARE para posicioná-la no chão. Enquanto estiver no chão e dentro do alcance da âncora, REATIVE para teleportar rapidamente até a âncora. A âncora pode ser recuperada para ser REPOSICIONADA.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">TOUR DE FORCE</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">ATIVE para invocar um poderoso fuzil de precisão personalizado que abate um inimigo com qualquer acerto na parte superior do corpo. Use o DISPARO ALTERNATIVO para mirar. Abater um inimigo cria um campo duradouro que Desacelera os jogadores dentro dele.</p>`;
        }
    }
    if (contexto === 'cypher') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Cypher, um vendedor de informações do Marrocos, é uma verdadeira rede de vigilância de um homem só que fica de olho em cada movimento dos inimigos. Nenhum segredo está a salvo. Nenhuma manobra passa despercebida. Cypher está sempre vigiando.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Sentinela</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">FIO-ARMADILHA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um fio-armadilha. DISPARE para instalar um fio acionador oculto e destrutível no local-alvo, criando uma linha entre o local e a parede oposta. Jogadores inimigos que passarem por um fio e não destruírem o dispositivo a tempo ficarão imobilizados, revelados e estonteados depois de um breve intervalo. A habilidade pode ser recolhida para ser REPOSICIONADA.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">JAULA CIBERNÉTICA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">INSTANTANEAMENTE joga a jaula cibernética diante de Cypher. Ative para criar uma zona que bloqueia a visão e reduz a velocidade de inimigos que passarem por ela.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">CÂMERA DE VIGILÂNCIA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma Câmera de Vigilância. DISPARE para colocar a câmera no local-alvo. REPITA a habilidade para controlar a visão da câmera. Enquanto controla a câmera, DISPARE para lançar um dardo marcador. O dardo revelará a localização de qualquer jogador atingido. A câmera pode ser recuperada e REPOSICIONADA.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ASSALTO NEURAL</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">Use INSTANTANEAMENTE num jogador inimigo morto na sua mira para revelar a localização de todos os jogadores inimigos ainda vivos.</p>`;
        }
    }
    if (contexto === 'deadlock') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">A agente norueguesa Deadlock posiciona uma gama de nanofios de alta tecnologia para proteger o campo de batalha até mesmo do ataque mais letal. Ninguém escapa do seu olhar vigilante. Ninguém sobrevive à sua ferocidade implacável.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Sentinela</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">GRAVNET</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma granada GravNet. DISPARE para lançar. Use o DISPARO ALTERNATIVO para arremessar a curta distância. A GravNet detona ao atingir o chão, forçando inimigos pegos por ela a agacharem e moverem-se lentamente.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">SENSOR SÔNICO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um Sensor Sônico. DISPARE para posicionar. O sensor monitora os sons dos inimigos em uma área. Causa concussão na área se sons de passos, disparos ou qualquer barulho significativo forem detectados.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">MALHA DE BARREIRA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um disco de Malha de Barreira. DISPARE para lançar à frente. Ao atingir o chão, o disco gera barreiras a partir do ponto de origem que bloqueiam a movimentação de personagens.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ANIQUILAÇÃO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um Acelerador de Nanofios. DISPARE para liberar um pulso de nanofios que captura o primeiro inimigo que encontrar. O inimigo encasulado é puxado por uma trilha de nanofios e abatido se chegar ao final da trilha, a não ser que seja libertado. O casulo de nanofios é destrutível.</p>`;
        }
    }
    if (contexto === 'fade') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Fade, uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Iniciador</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ESPREITADOR</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um Espreitador. DISPARE para enviá-lo à frente. SEGURE O DISPARO para mover o Espreitador na direção da sua retícula. Ele perseguirá o primeiro rastro sinistro ou inimigo que encontrar e afetará o alvo com visão turva ao alcançá-lo.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">CLAUSURA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um nódulo de puro temor. DISPARE para arremessá-lo. O nódulo cairá depois de um determinado tempo. REPITA a habilidade para soltá-lo antecipadamente. Esse nódulo se rompe ao impacto, enclausurando inimigos próximos. Inimigos enclausurados sofrem surdez e deterioração.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ASSOMBRAR</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma assombração. DISPARE para arremessá-la. Ela cairá depois de um determinado tempo. REPITA a habilidade para soltá-la antecipadamente. Essa assombração ataca ao contato, revelando inimigos em sua linha de visão e criando rastros sinistros até eles. Ela pode ser destruída pelos inimigos.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">VÉU DA NOITE</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE o poder dos pesadelos. DISPARE para liberar uma onda implacável de energia aterrorizante. Inimigos atingidos pela onda são marcados por rastros sinistros e sofrem surdez e deterioração.</p>`;
        }
    }
    if (contexto === 'geeko') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Gekko, de Los Angeles, lidera um grupo muito unido de criaturas caóticas. Seus amigos atropelam tudo, tirando os inimigos do caminho. Depois, Gekko corre atrás deles para reagrupá-los e reiniciar o processo.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Iniciador</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">MOSH PIT</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE Mosh. DISPARE para lançá-lo como uma granada. Use o DISPARO ALTERNATIVO para lançar por baixo. Ao atingir uma superfície, Mosh se duplica em uma grande área e, depois de uns instantes, explode.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">WINGMAN</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE Wingman. DISPARE para enviá-lo para encontrar inimigos. Wingman lança uma forte explosão na direção do primeiro inimigo que vê. Use o DISPARO ALTERNATIVO na direção de um ponto ou Spike plantada para que Wingman plante ou desarme a Spike. Para plantar, Gekko deve estar com a Spike no inventário. Quando Wingman expira, ele se transforma em um glóbulo inativo. INTERAJA para recuperar o glóbulo e ganhar outra carga de Wingman após um curto período.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">DIZZY</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE Dizzy. DISPARE para enviá-la voando pelo ar. Dizzy avança e solta explosões de plasma nos inimigos em sua linha de visão. Os inimigos atingidos pelo plasma ficam cegos. Ao expirar, Dizzy se transforma em um glóbulo inativo. INTERAJA para recuperar o glóbulo e ganhar outra carga de Dizzy após um curto período.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">THRASH</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE Thrash. DISPARE para se conectar à mente dela e guiá-la pelo território inimigo. ATIVE para avançar e explodir, detendo qualquer inimigo em um pequeno raio. Ao expirar, Thrash se transforma em um glóbulo inativo. INTERAJA para recuperar o glóbulo e ganhar outra carga de Thrash após um curto período. Thrash pode ser recuperada uma vez.</p>`;
        }
    }
    if (contexto === 'harbor') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Vindo do litoral indiano, Harbor entra em campo com a força da tormenta, empunhando tecnologia ancestral com domínio sobre a água. Ele libera corredeiras espumantes e ondas esmagadoras para proteger seus aliados ou atacar aqueles que se opõem a ele.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Controlador</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">CASCATA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma onda de água. DISPARE para enviar a onda para frente e através de paredes. REPITA para impedir a onda de seguir em frente. Jogadores atingidos sofrem REDUÇÃO DE VELOCIDADE.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ENSEADA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma esfera de água defensiva. DISPARE para jogá-la. Use o DISPARO ALTERNATIVO para lançar por baixo. Ao atingir o solo, a esfera invoca um escudo de água destrutível que bloqueia balas.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">MARÉ ALTA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma parede de água. DISPARE para enviar a água para frente junto ao chão. SEGURE O DISPARO para guiar a água na direção da sua retícula, atravessando o mundo e fazendo surgir uma parede ao longo do caminho. Use o DISPARO ALTERNATIVO enquanto curva para parar a água mais cedo. Jogadores atingidos sofrem REDUÇÃO DE VELOCIDADE.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ACERTO DE CONTAS</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE o poder total do seu Artefato. DISPARE para invocar um gêiser no solo. Os inimigos na área são repetidamente alvejados por ataques do gêiser. Jogadores capturados dentro de uma área de ataque sofrem CONCUSSÃO.</p>`;
        }
    }
    if (contexto === 'jett') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Duelista</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ERUPÇÃO DAS BRUMAS</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">Lança INSTANTANEAMENTE um projétil que se expande numa breve nuvem que obscurece a visão ao bater numa superfície. SEGURE o botão da habilidade para curvar a fumaça na direção da sua mira.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">CORRENTE ASCENDENTE</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">INSTANTANEAMENTE impele Jett bem alto no ar.⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">BRISA DE IMPULSO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">ATIVE para preparar uma rajada de vento por tempo limitado. REPITA a habilidade para lançar Jett na direção do movimento atual dela. Se estiver parada, Jett será lançada para a frente. A carga de Brisa de Impulso é redefinida a cada dois abates.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">TORMENTA DE AÇO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um conjunto de facas de arremesso altamente precisas. DISPARE para lançar uma única faca contra o alvo. As facas são recarregadas ao matar um oponente. Use o DISPARO ALTERNATIVO para jogar todas as facas restantes contra o alvo, porém elas não são recarregadas ao matar um oponente.</p>`;
        }
    }
    if (contexto === 'kayo') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de Suprimir habilidades inimigas, anulando a capacidade de contra-ataque dos adversários e dando a si e a seus aliados uma vantagem essencial em combate.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Iniciador</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">FRAG/MENTO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um fragmento explosivo. DISPARE para lançá-lo. O fragmento se fixa ao chão e explode várias vezes, causando dano quase letal no centro de cada explosão.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">GRANADA/CLARÃO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma granada de clarão. DISPARE para jogá-la por cima. Use o DISPARO ALTERNATIVO para arremessar a curta distância uma versão mais fraca que explode mais rápido. A granada de clarão explode após um curto período, Cegando qualquer um que estiver na linha de visão.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">PONTO/ZERO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma lâmina de supressão. DISPARE para lançar. A lâmina se fixa à primeira superfície que atingir e explode, Suprimindo qualquer um que estiver dentro do raio da explosão. Inimigos podem destruir a lâmina.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ANULAR/CMD</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">INSTANTANEAMENTE sobrecarrega com energia de Radianita polarizada que emite grandes pulsos energéticos em um raio enorme a partir de onde KAY/O estiver. Inimigos atingidos pelos pulsos são Suprimidos por um curto período. Enquanto estiver sobrecarregado, KAY/O recebe Estimulante de Combate e pode ser reestabilizado se for abatido.</p>`;
        }
    }
    if (contexto === 'killjoy') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Killjoy, uma alemã genial, defende posições-chave no campo de batalha facilmente com seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs darão conta do recado.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Sentinela</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">NANOENXAME</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma granada Nanoenxame. DISPARE para lançar a granada. Ao atingir uma superfície, a Nanoenxame fica oculta. ATIVE a Nanoenxame para acionar um enxame de nanorrobôs que causam dano.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ROBÔ DE ALARME</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um Robô de Alarme oculto. DISPARE para ativar um robô que persegue os inimigos que entram no alcance. Ao se aproximar do alvo, o robô explode, causando dano e aplicando Vulnerável. SEGURE EQUIPAR para retirar um robô ativado.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">TORRETA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma Torreta. DISPARE para ativar uma torreta que atira em inimigos em um cone de 180°. SEGURE EQUIPAR para retirar a torreta ativada.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">CONFINAMENTO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE o dispositivo de Confinamento. DISPARE para ativá-lo. Após um longo processo de ativação, o dispositivo detém todos os inimigos no raio de alcance. O dispositivo pode ser destruído pelos inimigos.</p>`;
        }
    }
    if (contexto === 'neon') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Duelista</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">VIA EXPRESSA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">DISPARE duas linhas de energia no chão à frente. As linhas se estendem por uma curta distância ou até atingirem uma superfície. Elas se tornam paredes de eletricidade estática que bloqueiam a visão e causam dano aos inimigos que as atravessarem.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">RICOCHETE ELÉTRICO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">INSTANTANEAMENTE arremessa um raio de energia que ricocheteia uma vez. Ao atingir cada superfície, o raio eletrifica o chão abaixo dele com uma explosão.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">EQUIPAMENTO VOLTAICO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">INSTANTANEAMENTE canaliza o poder de Neon para receber velocidade aumentada. Ao atingir a carga máxima, use o DISPARO ALTERNATIVO para acionar um deslize elétrico. O carregamento é redefinido a cada dois abates.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">SOBRECARGA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">Neon libera todo o seu poder e velocidade por um curto período. DISPARE para canalizar isso em um raio elétrico mortal com alta precisão de movimento. A duração é redefinida com cada abate.</p>`;
        }
    }
    if (contexto === 'omen') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Controlador</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">PASSOS TENEBROSOS</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma habilidade de passos sombrios e olhe o indicador de alcance. DISPARE para começar uma breve canalização e, então, teleporte-se para o local marcado.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">PARANOIA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">INSTANTANEAMENTE emite um projétil sombrio adiante, reduzindo brevemente o alcance de visão dos jogadores tocados. O projétil atravessa paredes.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">MANTO SOMBRIO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um orbe sombrio e entre em um universo distorcido para posicionar os orbes. PRESSIONE o botão de habilidade para lançar o orbe no local marcado, criando uma esfera de sombra duradoura que bloqueia a visão. SEGURE O DISPARO enquanto mira para afastar o marcador. SEGURE O DISPARO ALTERNATIVO enquanto mira para aproximar o marcador. PRESSIONE RECARREGAR para alternar para a visão de mira normal.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">SALTO DAS SOMBRAS</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um mapa tático. DISPARE para começar a se teleportar ao local selecionado. Enquanto se teleporta, Omen aparecerá como um Vulto que pode ser destruído por qualquer inimigo para cancelar o teleporte.</p>`;
        }
    }
    if (contexto === 'phoenix') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Duelista</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">LABAREDA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma parede de fogo. DISPARE para criar uma linha de chamas que avança, gerando uma parede de fogo que bloqueia a visão e causa dano a jogadores que passarem por ela. SEGURE O DISPARO para curvá-la na direção da mira.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">BOLA CURVA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um orbe de chamas que avança em curva e detona pouco após o lançamento. DISPARE para curvá-lo para a esquerda, detonando e cegando qualquer jogador que vir o orbe. Use o DISPARO ALTERNATIVO para curvá-lo para a direita.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">MÃOS QUENTES</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma bola de fogo. DISPARE para jogar a bola de fogo, que explode após um intervalo ou ao atingir o chão, criando uma zona duradoura de fogo que causa dano aos inimigos.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">RENASCIMENTO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">INSTANTANEAMENTE coloca um marcador na localização de Phoenix. Com a habilidade ativa, morrer ou deixar o tempo acabar encerrarão a habilidade e trarão Phoenix de volta ao local marcado com Vida completa.</p>`;
        }
    }
    if (contexto === 'raze') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Raze chega do Brasil com uma explosão de carisma e armas enormes. Com seu estilo de jogo "porradeiro", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Duslista</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">BUMBA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um Bumba. DISPARE para lançar o robô, que avança em linha reta no chão, ricocheteando nas paredes. O Bumba trava ao detectar inimigos no cone frontal e os persegue, explodindo e causando muito dano se alcançá-los.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">CARGA DE EXPLOSIVOS</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">INSTANTANEAMENTE joga uma Carga de Explosivos que gruda em superfícies. REUSE a habilidade depois de instalar para detonar, causando dano e movendo tudo que for atingido. Raze não sofre dano ao ser atingida pelo efeito desta habilidade, mas ainda pode sofrer dano de queda se for arremessada para longe.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">CARTUCHOS DE TINTA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma granada múltipla. DISPARE para jogar a granada, que causa dano e cria submunições, cada uma causando dano a qualquer um que estiver no alcance. Use o DISPARO ALTERNATIVO para arremessar a curta distância. A carga dos Cartuchos de Tinta é redefinida a cada dois abates.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ESTRAGA-PRAZERES</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um lança-mísseis. DISPARE um foguete que causa dano devastador em área ao fazer contato com qualquer coisa.</p>`;
        }
    }
    if (contexto === 'reyna') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Duelista</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">OLHAR VORAZ</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um olho etéreo e destrutível. ATIVE para lançá-lo adiante a uma curta distância. O olho deixará com visão turva todos os inimigos que olharem para ele.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">DEVORAR</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">Inimigos abatidos por Reyna deixam Orbes de Alma que duram 3s. INSTANTANEAMENTE consome um Orbe de Alma próximo, curando-se de forma rápida por um curto período. A quantidade de Vida concedida por esta habilidade que ultrapassar 100 decairá ao longo do tempo. Se a habilidade IMPERATRIZ estiver ativa, esta habilidade será conjurada automaticamente e não consumirá o orbe.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">DISPENSAR</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">INSTANTANEAMENTE consome um Orbe de Alma próximo, ficando inatingível por um curto período. Também se torna invisível se a habilidade IMPERATRIZ estiver ativa.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">IMPERATRIZ</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">INSTANTANEAMENTE entra em estado de frenesi, aumentando de forma drástica as velocidades de disparo, equipamento e recarga de munição. Renova a duração ao fazer um abate.

            </p>`;
        }
    }
    if (contexto === 'sage') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Sentinela</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ORBE DE BARREIRA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um orbe de barreira. DISPARE para posicionar uma parede sólida. DISPARO ALTERNATIVO gira o marcador de alvo.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ORBE DE LENTIDÃO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um orbe de lentidão. DISPARE para lançá-lo. O orbe detona ao pousar, criando um campo duradouro que desacelera os jogadores dentro dele.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ORBE CURATIVO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um orbe curativo. DISPARE com a mira sobre um aliado ferido para ativar uma cura ao longo do tempo. Use o DISPARO ALTERNATIVO enquanto Sage estiver ferida para ativar uma autocura ao longo do tempo.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">RESSURREIÇÃO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma habilidade de ressurreição. DISPARE com a mira sobre um aliado morto para começar a revivê-lo. Depois de uma breve canalização, o aliado voltará com a Vida completa.</p>`;
        }
    }
    if (contexto === 'skye') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Iniciador</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">REFLORESCER</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um amuleto de cura. SEGURE O DISPARO para canalizar, curando aliados dentro do alcance e na sua linha de visão. Esta habilidade pode ser repetida até a reserva de cura ser esgotada. Skye não pode curar a si mesma.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">PREDADOR EXPLOSIVO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um amuleto de lobo-da-tasmânia. DISPARE para enviar e controlar esse predador. Enquanto estiver no controle, DISPARE para saltar para a frente. O lobo gera uma explosão e causa dano aos inimigos diretamente atingidos.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">LUZ DESBRAVADORA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um amuleto de falcão. DISPARE para enviá-lo. SEGURE O DISPARO para guiar o falcão na direção da sua mira. REPITA a habilidade enquanto ele estiver voando para transformá-lo em um feixe de luz que gera uma confirmação de hit caso um inimigo esteja dentro do alcance ou na linha de visão.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">RASTREADORES</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um amuleto de Rastreador. DISPARE para enviar três Rastreadores que localizarão os três inimigos mais próximos. Se um Rastreador alcançar um alvo, causará Visão Turva a ele. Inimigos podem destruir os Rastreadores.</p>`;
        }
    }
    if (contexto === 'sova') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Iniciador</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">DRONE CORUJA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um drone coruja. DISPARE para acionar e pilotar o drone. Enquanto pilota o drone, DISPARE para atirar um dardo marcador. O dardo revelará a localização de qualquer jogador atingido. Inimigos podem destruir o Drone Coruja.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">FLECHA DE CHOQUE</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um arco com uma flecha de choque. DISPARE para lançar a flecha, que explode com o impacto causando dano aos jogadores próximos. SEGURE O DISPARO para estender o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">FLECHA RASTREADORA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um arco com uma flecha de reconhecimento. DISPARE para lançar a flecha, que é ativada mediante impacto e Revela a localização de quaisquer inimigos próximos da linha de visão. Inimigos podem destruí-la. SEGURE O DISPARO para estender o alcance do projétil. Use o DISPARO ALTERNATIVO para adicionar até dois ricochetes à flecha.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">FÚRIA DO CAÇADOR</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um arco com três disparos de longo alcance que perfuram paredes. DISPARE para atirar um raio de energia diante de Sova, causando dano e revelando a localização dos inimigos que estiverem na linha. A habilidade pode ser REPETIDA mais duas vezes enquanto o cronômetro de habilidade estiver ativo.</p>`;
        }
    }
    if (contexto === 'viper') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Controlador</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">VENENO DE COBRA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um lançador químico. DISPARE para lançar um cilindro que se rompe ao atingir o chão, gerando uma zona química duradoura que causa dano e reduz a velocidade dos inimigos.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">NUVEM VENENOSA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um emissor de gás. DISPARE para jogar o emissor, que persiste até o fim da rodada. REPITA para criar uma nuvem de gás tóxico que drena combustível. A habilidade pode ser REPETIDA mais de uma vez e pode ser recolhida para ser REPOSICIONADA.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">CORTINA TÓXICA</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um lançador de emissores de gás. DISPARE para lançar uma longa linha de emissores de gás. REPITA a habilidade para criar uma parede alta de gás tóxico que drena combustível. A habilidade pode ser REPETIDA mais de uma vez.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">POÇO PEÇONHENTO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um borrifador químico. DISPARE para borrifar uma nuvem química em todas as direções ao redor de Viper, criando uma grande nuvem que reduz o alcance de visão e a Vida máxima dos jogadores dentro dela.</p>`;
        }
    }
    if (contexto === 'yoru') {
        const infoAgente = document.querySelector('#atualizar-info__agente');
        const roleAgente = document.querySelector('#atualizar-role__agente');
        const infoRole = document.querySelector('#atualizar-info__role');

        if (skill === 'INFO'){
            infoAgente.innerHTML = `<p class="info__agente" id="atualizar-info__agente">Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.</p>`
            roleAgente.innerHTML = `<b class="role__agente" id="atualizar-role__agente">Duelista</b>`
            infoRole.innerHTML = `<p class="info__role" id="atualizar-info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>`
        }
        if (skill === 'C') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">DISTRAÇÃO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um eco dimensional que se transforma em uma cópia do Yoru quando ativado. DISPARE para ativar a cópia e fazê-la avançar. Use o MODO SECUNDÁRIO para posicionar um eco inativo. USE para transformar o eco inativo em uma cópia e fazê-la avançar. As cópias explodem e cegam os inimigos quando destruídas por eles.</p>`;
        }
        if (skill === 'Q') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">PONTO CEGO</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE para arrancar um fragmento dimensional instável da realidade. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida.</p>`;
        }
        if (skill === 'E') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">PASSAGEM DIMENSIONAL</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE um fluxo dimensional. DISPARE para lançá-lo à frente. Use o DISPARO ALTERNATIVO para posicionar um fluxo imóvel. ATIVE para se teleportar até ele. USE para acionar um teleporte falso.</p>`;
        }
        if (skill === 'X') {
            infoAgente.textContent = "";
            roleAgente.innerHTML = `<b id="atualizar-role__agente">ESPIONAGEM DIMENSIONAL</b>`;
            infoRole.innerHTML = `<p id="atualizar-info__role">EQUIPE uma máscara para olhar por entre as dimensões. DISPARE para entrar na dimensão do Yoru, onde você não poderá ser afetado nem visto pelos inimigos lá fora. REATIVE para sair da dimensão do Yoru mais cedo.</p>`;
        }
    }
}

btnConfirmar.style.pointerEvents = 'none' //Para que ele nao toque som quando passar o mouse por cima, a menos que um agente esteja selecionado

//Quando um agente for clicado, mostra o botão "CONFIRMAR"
agentes.forEach(agente => {
    tocarSomAgente()
    agente.addEventListener('click', () => {
        btnConfirmar.style.background = 'transparent'
        btnConfirmar.style.backgroundColor = 'rgba(111, 255, 207, 0.4)'
        textoConfirmar.style.margin = '0'
        btnConfirmar.style.padding = '12px 40px'
        btnConfirmar.style.pointerEvents = 'all'
        selecionarAgente.play()

        agenteSelecionado = agente.getAttribute('data-audio')
    });
});

//Função para desabilitar os agentes após algum ja ter sido confirmado
function desabilitarAgentes() {
    agentes.forEach(agente => {
        agente.style.pointerEvents = 'none'
    });
}

//Função para tocar um som quando o mouse passar por cima da foto de algum agente
function tocarSomAgente(){
    agentes.forEach(agente =>{
        agente.addEventListener('mouseover', () => {
            passarMouseAgente.play()
        })
    })
}

//Tira o botão após a confirmação de algum agente, puxa a função de desabilitar os agentes e toca a fala de cada um
btnConfirmar.addEventListener('click', () => {
    btnConfirmarNaoClicado = false //Deixa o botao como "false" para o contador nao ficar vermelho e nem tocar o som de selecione seu agente
    btnConfirmar.style.display = 'none' //Tira o botao após ter sido clicado
    desabilitarAgentes()
    switch(agenteSelecionado){ //Tocar a fala de cada agente
        case 'audio_astra':
            lockAstra.play()
            break;
        case 'audio_breach':
            lockBreach.play()
            break;
        case 'audio_brimstone':
            lockBrimstone.play()
            break;
        case 'audio_chamber':
            lockChamber.play()
            break;
        case 'audio_cypher':
            lockCypher.play()
            break;
        case 'audio_deadlock':
            lockDeadlock.play()
            break;
        case 'audio_fade':
            lockFade.play()
            break;
        case 'audio_geeko':
            lockGeeko.play()
            break;
        case 'audio_harbor':
            lockHarbor.play()
            break;
        case 'audio_jett':
            lockJett.play()
            break;
        case 'audio_kayo':
            lockKayo.play()
            break;
        case 'audio_killjoy':
            lockKilljoy.play()
            break;
        case 'audio_neon':
            lockNeon.play()
            break;
        case 'audio_omen':
            lockOmen.play()
            break;
        case 'audio_phoenix':
            lockPhoenix.play()
            break;
        case 'audio_raze':
            lockRaze.play()
            break;
        case 'audio_reyna':
            lockReyna.play()
            break;
        case 'audio_sage':
            lockSage.play()
            break;
        case 'audio_skye':
            lockSkye.play()
            break;
        case 'audio_sova':
            lockSova.play()
            break;
        case 'audio_viper':
            lockViper.play()
            break;
        case 'audio_yoru':
            lockYoru.play()
            break;
        default:
            break;
    }
});

//Toca som do botao confirmar quando o mouse passar por cima
btnConfirmar.addEventListener('mouseover', () => {
    cliqueConfirmar.play()
})
