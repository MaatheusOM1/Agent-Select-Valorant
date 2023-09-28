// Declaração das variáveis de cada agente
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

const infoAgentes = document.querySelector('.container__wrap') // Variável para manipulação de DOM
const agentePickado = document.querySelector('#agente__pickado') // Variável para mudar a foto de acordo com o agente

const btnConfirmar = document.querySelector('.btn__confirmar') // Variável do botão "CONFIRMAR"
const agentes = document.querySelectorAll('.agente'); //Variável de todos os agentes


//Funções para o Contador
//Função para a contagem regressiva do contador
const contagemRegressiva = () => { 
    if(tempoDecorridoEmSegundos <= 0){
        return //Return para parar no 0
    }
    tempoDecorridoEmSegundos -= 1 //Tira um segundo do contador por vez
    mostrarTempo()
}

//Função de Iniciar ou Pausar o cronômetro
function iniciarCronometro() {
    setInterval(contagemRegressiva, 1000) //Inicia contagemRegressiva a cada 1000 milissegundos
}

//Função de mostrar o tempo do cronômetro
function mostrarTempo(){
    tempoNaTela.innerHTML = tempoDecorridoEmSegundos //Para aparecer o contador
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

//Funcção para alterar o texto de acordo com o agente clicado
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
        case "deadlock":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Sentinela</h3>
                <h1 class="nome__agente">DEADLOCK</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/sentinela.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/deadlock c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/deadlock q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/deadlock e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/deadlock x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">A agente norueguesa Deadlock posiciona uma gama de nanofios de alta tecnologia para proteger o campo de batalha até mesmo do ataque mais letal. Ninguém escapa do seu olhar vigilante. Ninguém sobrevive à sua ferocidade implacável.</p>
                <b class="role__agente">Sentinela</b>
                <p class="info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>
            </div>
            `
            break;
        case "fade":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">fade</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/fade c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/fade q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/fade e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/fade x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Fade, uma caçadora de recompensas turca, usa o poder dos pesadelos para capturar os segredos dos inimigos. Personificando o próprio terror, ela persegue os alvos e revela seus medos mais profundos para, depois, destruí-los na escuridão.</p>
                <b class="role__agente">Iniciador</b>
                <p class="info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            break;
        case "geeko":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">geeko</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/geeko c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/geeko q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/geeko e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/geeko x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Gekko, de Los Angeles, lidera um grupo muito unido de criaturas caóticas. Seus amigos atropelam tudo, tirando os inimigos do caminho. Depois, Gekko corre atrás deles para reagrupá-los e reiniciar o processo.</p>
                <b class="role__agente">Iniciador</b>
                <p class="info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            break;
        case "harbor":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Controlador</h3>
                <h1 class="nome__agente">harbor</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/controlador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/harbor c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/harbor q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/harbor e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/harbor x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Vindo do litoral indiano, Harbor entra em campo com a força da tormenta, empunhando tecnologia ancestral com domínio sobre a água. Ele libera corredeiras espumantes e ondas esmagadoras para proteger seus aliados ou atacar aqueles que se opõem a ele.</p>
                <b class="role__agente">Controlador</b>
                <p class="info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>
            </div>
            `
            break;
        case "jett":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">jett</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/jett c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/jett q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/jett e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/jett x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.</p>
                <b class="role__agente">Duelista</b>
                <p class="info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            break;
        case "kayo":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">kay/o</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/kayo c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/kayo q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/kayo e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/kayo x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">KAY/O é uma máquina de guerra construída com um único propósito: neutralizar Radiantes. Ele é capaz de Suprimir habilidades inimigas, anulando a capacidade de contra-ataque dos adversários e dando a si e a seus aliados uma vantagem essencial em combate.</p>
                <b class="role__agente">Iniciador</b>
                <p class="info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            break;
        case "killjoy":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Sentinela</h3>
                <h1 class="nome__agente">killjoy</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/sentinela.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/killjoy c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/killjoy q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/killjoy e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/killjoy x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Killjoy, uma alemã genial, defende posições-chave no campo de batalha facilmente com seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs darão conta do recado.</p>
                <b class="role__agente">Sentinela</b>
                <p class="info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>
            </div>
            `
            break;
        case "neon":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">neon</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/neon c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/neon q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/neon e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/neon x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio.</p>
                <b class="role__agente">Duelista</b>
                <p class="info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            break;
        case "omen":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Controlador</h3>
                <h1 class="nome__agente">omen</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/controlador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/omen c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/omen q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/omen e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/omen x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Omen, uma lembrança fantasmagórica, caça nas sombras. Ele cega os inimigos, teleporta-se pelo campo e deixa a paranoia assumir o controle enquanto o adversário tenta descobrir de onde virá seu próximo ataque.</p>
                <b class="role__agente">Controlador</b>
                <p class="info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>
            </div>
            `
            break;
        case "phoenix":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">phoenix</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/phoenix c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/phoenix q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/phoenix e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/phoenix x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Chegando com tudo diretamente do Reino Unido, o poder estelar de Phoenix reluz em seu estilo de luta, incendiando o campo de batalha com luz e estilo. Tendo ajuda ou não, ele entra na luta como e quando achar que deve.</p>
                <b class="role__agente">Duelista</b>
                <p class="info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            break;
        case "raze":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">raze</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/raze c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/raze q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/raze e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/raze x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Raze chega do Brasil com uma explosão de carisma e armas enormes. Com seu estilo de jogo "porradeiro", ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!</p>
                <b class="role__agente">Duelista</b>
                <p class="info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            break;
        case "reyna":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">reyna</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/reyna c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/reyna q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/reyna e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/reyna x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Criada no coração do México, Reyna domina o combate individual, destacando-se a cada abate efetuado. Sua capacidade só é limitada por sua própria perícia, tornando-a bastante dependente de desempenho.</p>
                <b class="role__agente">Duelista</b>
                <p class="info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            break;
        case "sage":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Sentinela</h3>
                <h1 class="nome__agente">sage</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/sentinela.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/sage c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/sage q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/sage e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/sage x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.</p>
                <b class="role__agente">Sentinela</b>
                <p class="info__role">Sentinelas são especialistas em defesa que podem bloquear áreas e vigiar flancos, tanto nas rodadas de ataque, quanto nas de defesa.</p>
            </div>
            `
            break;
        case "skye":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">skye</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/skye c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/skye q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/skye e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/skye x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.</p>
                <b class="role__agente">Iniciador</b>
                <p class="info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            break;
        case "sova":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Iniciador</h3>
                <h1 class="nome__agente">sova</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/iniciador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/sova c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/sova q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/sova e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/sova x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Nascido sob o eterno inverno das tundras russas, Sova rastreia, encontra e elimina inimigos com eficiência e precisão implacáveis. Seu arco personalizado e suas habilidades inigualáveis de reconhecimento garantem que nenhuma presa escape.</p>
                <b class="role__agente">Iniciador</b>
                <p class="info__role">Iniciadores desafiam situações arriscadas, preparando a equipe para entrar em terreno contestado e rechaçar defensores.</p>
            </div>
            `
            break;
        case "viper":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Controlador</h3>
                <h1 class="nome__agente">viper</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/controlador.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/viper c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/viper q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/viper e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/viper x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Viper, a química dos Estados Unidos, emprega uma variedade de dispositivos químicos venenosos para controlar o campo de batalha e prejudicar a visão do inimigo. Se as toxinas não matarem a presa, seus jogos mentais certamente o farão.</p>
                <b class="role__agente">Controlador</b>
                <p class="info__role">Controladores se dedicam a dissecar territórios perigosos e pavimentar o caminho do sucesso para a equipe.</p>
            </div>
            `
            break;
        case "yoru":
            infoAgentes.innerHTML =  `
            <div class="container__informacoes-agentes">
            <div class="linha__vertical"></div>
                <h3 class="role__agente">Duelista</h3>
                <h1 class="nome__agente">yoru</h1>
                <div class="container__skills">
                    <div class="role__agente-icone skills">
                        <p>INFO</p>
                        <img src="/images/duelista.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-c skills">
                        <p>C</p>
                        <img src="/images/yoru c.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-q skills">
                        <p>Q</p>
                        <img src="/images/yoru q.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-e skills">
                        <p>E</p>
                        <img src="/images/yoru e.png" alt="" class="skills__logo">
                    </div>
                    <div class="skill-x skills">
                        <p>X</p>
                        <img src="/images/yoru x.png" alt="" class="skills__logo">
                    </div>
                </div>
                <p class="info__agente">Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.</p>
                <b class="role__agente">Duelista</b>
                <p class="info__role">Duelistas são abatedores independentes que estão sempre prontos para o confronto. Eles usam habilidades e perícia para conseguir vários abates.</p>
            </div>
            `
            break;
        default:
            break;
    }
}

//Quando um agente for clicado, mostra o botão "CONFIRMAR"
agentes.forEach(agente => {
    agente.addEventListener('click', () => {
        btnConfirmar.style.display = 'block';
    });
});

//Função para desabilitar os agentes após algum ja ter sido confirmado
function desabilitarAgentes() {
    agentes.forEach(agente => {
        agente.style.pointerEvents = 'none'
    });
}

//Tira o botão após a confirmação de algum agente e puxa a função de desabilitar os agentes
btnConfirmar.addEventListener('click', () => {
    btnConfirmar.style.display = 'none'
    desabilitarAgentes()
});
