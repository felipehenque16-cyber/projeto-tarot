import { useState } from 'react';
import { ArrowDown, ArrowRight, RotateCcw, Sparkles, Sun, MoonStar, Leaf, Menu, X } from 'lucide-react';

const cards = [
  {name:'O Louco',number:'0',symbol:'✳',keyword:'O primeiro passo',theme:'começos',meaning:'Existe uma parte sua que já está pronta para experimentar o novo. O Louco fala sobre dar espaço à curiosidade, mesmo sem ter todas as respostas. Nem todo caminho precisa estar desenhado antes de você começar.',reflection:'O que você faria hoje se não precisasse ter certeza do resultado?',advice:'Dê um passo pequeno, mas verdadeiro. Confie mais na experiência do que na necessidade de controlar cada detalhe.'},
  {name:'O Mago',number:'I',symbol:'✧',keyword:'Iniciativa e criação',theme:'potencial',meaning:'O Mago lembra que você já tem recursos importantes nas mãos. Talvez falte organizar as ideias e transformar intenção em movimento. É um convite para reconhecer suas habilidades e usá-las com presença.',reflection:'Qual recurso ou habilidade você tem deixado de lado?',advice:'Escolha uma ideia e transforme-a em uma ação concreta. Começar também é uma forma de ganhar clareza.'},
  {name:'A Sacerdotisa',number:'II',symbol:'☾',keyword:'Escuta interior',theme:'intuição',meaning:'Nem tudo precisa de uma resposta imediata. A Sacerdotisa convida ao silêncio, à observação e à confiança naquilo que você percebe antes mesmo de conseguir explicar.',reflection:'Que resposta pode aparecer quando você desacelera?',advice:'Reserve um momento sem distrações. Observe o que sente antes de buscar opiniões de fora.'},
  {name:'A Imperatriz',number:'III',symbol:'❀',keyword:'Cuidado e florescimento',theme:'abundância',meaning:'A Imperatriz fala sobre nutrir o que importa. Ideias, relações e projetos precisam de tempo e cuidado para crescer. Também lembra que descanso e prazer fazem parte de uma vida fértil.',reflection:'O que na sua vida está pedindo mais cuidado?',advice:'Alimente o que deseja ver florescer. Permita-se receber cuidado também.'},
  {name:'O Imperador',number:'IV',symbol:'♜',keyword:'Estrutura e firmeza',theme:'limites',meaning:'O Imperador traz a importância de construir bases sólidas. Planejamento, responsabilidade e limites podem oferecer a segurança necessária para seguir em frente sem se perder no caminho.',reflection:'Em que área da vida você precisa estabelecer uma estrutura?',advice:'Defina prioridades e um próximo passo possível. Firmeza não precisa significar rigidez.'},
  {name:'O Hierofante',number:'V',symbol:'⌘',keyword:'Aprendizado e valores',theme:'sabedoria',meaning:'Esta carta convida a olhar para os ensinamentos que orientam suas escolhas. Tradições e conselhos podem ajudar, desde que façam sentido para quem você está se tornando.',reflection:'Quais valores realmente orientam suas decisões?',advice:'Aprenda com quem veio antes, mas não deixe de construir seu próprio entendimento.'},
  {name:'Os Enamorados',number:'VI',symbol:'♡',keyword:'Escolhas e vínculos',theme:'conexão',meaning:'Os Enamorados falam de conexão, mas também de escolhas alinhadas com aquilo em que você acredita. Relações saudáveis começam quando existe espaço para verdade, diálogo e respeito.',reflection:'Qual escolha seria mais coerente com o que você sente?',advice:'Busque conversas honestas. Escolha a partir dos seus valores, não apenas do medo de desagradar.'},
  {name:'O Carro',number:'VII',symbol:'➶',keyword:'Direção e movimento',theme:'determinação',meaning:'O Carro representa movimento com intenção. Há forças diferentes acontecendo ao mesmo tempo, e o desafio é encontrar direção sem desperdiçar energia tentando controlar tudo.',reflection:'Para onde você quer direcionar sua energia agora?',advice:'Escolha um objetivo prioritário e avance com constância. Pequenos ajustes também fazem parte do caminho.'},
  {name:'A Justiça',number:'VIII',symbol:'⚖',keyword:'Clareza e equilíbrio',theme:'responsabilidade',meaning:'A Justiça pede honestidade consigo e com as circunstâncias. É um bom momento para observar fatos, reconhecer responsabilidades e buscar decisões equilibradas.',reflection:'Que situação merece ser vista com mais objetividade?',advice:'Separe o que você sabe do que está supondo. Decida com clareza e responsabilidade.'},
  {name:'O Eremita',number:'IX',symbol:'✧',keyword:'Pausa e discernimento',theme:'introspecção',meaning:'O Eremita não representa solidão como ausência, mas como espaço para escutar a própria voz. Às vezes, diminuir o ritmo é o que permite enxergar o próximo trecho da jornada.',reflection:'De que ruído você precisa se afastar para se ouvir?',advice:'Respeite seu tempo. Uma pausa consciente pode revelar o que a pressa esconde.'},
  {name:'A Roda da Fortuna',number:'X',symbol:'◎',keyword:'Ciclos e mudança',theme:'movimento',meaning:'A vida se move em ciclos. A Roda da Fortuna lembra que algumas mudanças fogem do nosso controle, mas a maneira como respondemos a elas continua sendo uma escolha.',reflection:'O que você pode aceitar como parte de um ciclo que está mudando?',advice:'Adapte a rota sem abandonar o que é essencial para você.'},
  {name:'A Força',number:'XI',symbol:'∞',keyword:'Coragem gentil',theme:'autodomínio',meaning:'A Força fala de coragem que não precisa fazer barulho. Paciência, presença e gentileza podem ser mais transformadoras do que tentar vencer tudo pela intensidade.',reflection:'Onde você pode trocar cobrança por acolhimento?',advice:'Seja firme com o que importa e gentil com o seu processo.'},
  {name:'O Enforcado',number:'XII',symbol:'⌁',keyword:'Nova perspectiva',theme:'entrega',meaning:'O Enforcado sugere uma pausa para olhar a situação por outro ângulo. Nem todo impasse se resolve com mais esforço; às vezes, a mudança começa quando soltamos uma expectativa.',reflection:'O que muda quando você observa essa situação de outro lugar?',advice:'Não force uma resposta hoje. Experimente mudar a pergunta.'},
  {name:'A Morte',number:'XIII',symbol:'❋',keyword:'Transformação',theme:'renovação',meaning:'A Morte simboliza encerramentos e transformação, não uma previsão literal. Algo pode estar pedindo conclusão para que exista espaço para uma fase mais coerente com quem você é agora.',reflection:'O que você já sabe que precisa deixar terminar?',advice:'Reconheça o que cumpriu seu papel. Despedidas também podem abrir espaço.'},
  {name:'A Temperança',number:'XIV',symbol:'◒',keyword:'Ritmo e integração',theme:'harmonia',meaning:'A Temperança convida a encontrar um ritmo sustentável. Misturar experiências, ajustar expectativas e respeitar limites pode criar um equilíbrio mais real do que buscar perfeição.',reflection:'Que pequeno ajuste tornaria sua rotina mais leve?',advice:'Procure o meio-termo possível. Consistência vale mais do que intensidade passageira.'},
  {name:'O Diabo',number:'XV',symbol:'⛓',keyword:'Consciência e escolhas',theme:'apegos',meaning:'O Diabo ilumina padrões, dependências e desejos que podem estar ocupando espaço demais. A carta não julga: ela convida a perceber onde você ainda pode recuperar autonomia.',reflection:'Que hábito ou pensamento tem limitado suas escolhas?',advice:'Nomeie o padrão sem se culpar. A consciência é um primeiro passo para mudar.'},
  {name:'A Torre',number:'XVI',symbol:'ϟ',keyword:'Quebra de estruturas',theme:'despertar',meaning:'A Torre representa a revisão de estruturas que já não se sustentam. Mudanças podem ser desconfortáveis, mas também revelam verdades que estavam escondidas sob uma falsa segurança.',reflection:'Que certeza talvez precise ser revista?',advice:'Cuide do que é essencial e permita reconstruir com bases mais honestas.'},
  {name:'A Estrela',number:'XVII',symbol:'✷',keyword:'Esperança e confiança',theme:'renovação',meaning:'A Estrela traz um convite à esperança serena. Depois de períodos exigentes, ela lembra que recuperar a confiança pode acontecer aos poucos, em gestos simples de cuidado e autenticidade.',reflection:'O que ajuda você a recuperar a esperança?',advice:'Volte ao que faz bem e permita que a confiança seja reconstruída no seu próprio ritmo.'},
  {name:'A Lua',number:'XVIII',symbol:'☾',keyword:'Sensibilidade e mistério',theme:'incerteza',meaning:'A Lua fala de emoções, imaginação e incertezas. Nem tudo está nítido agora, e tudo bem. A carta pede atenção para não confundir receios com fatos.',reflection:'O que é fato e o que pode ser medo ou expectativa?',advice:'Vá com calma. Busque clareza antes de tirar conclusões definitivas.'},
  {name:'O Sol',number:'XIX',symbol:'☼',keyword:'Vitalidade e clareza',theme:'alegria',meaning:'O Sol ilumina aquilo que pode ser vivido com mais espontaneidade. É um lembrete para reconhecer conquistas, cultivar relações sinceras e não diminuir a própria alegria.',reflection:'Que conquista merece ser reconhecida por você?',advice:'Celebre o que já caminhou e compartilhe sua presença com quem faz bem.'},
  {name:'O Julgamento',number:'XX',symbol:'♧',keyword:'Despertar e revisão',theme:'chamado',meaning:'O Julgamento convida a olhar para a própria história com maturidade. Experiências passadas podem oferecer aprendizados sem precisar definir o que vem pela frente.',reflection:'Que aprendizado do passado pode ajudar na sua próxima escolha?',advice:'Reavalie sem se condenar. Você pode responder ao presente de um jeito novo.'},
  {name:'O Mundo',number:'XXI',symbol:'✺',keyword:'Integração e conclusão',theme:'realização',meaning:'O Mundo representa fechamento de ciclo e integração. É um convite para reconhecer o caminho percorrido, perceber o quanto mudou e se preparar para novos começos com mais repertório.',reflection:'O que você conquistou e ainda não reconheceu?',advice:'Honre seu percurso. Concluir uma etapa também é parte de seguir crescendo.'}
];

function App() {
  const [drawn, setDrawn] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const drawCard = () => {
    let next = cards[Math.floor(Math.random() * cards.length)];
    if (drawn && cards.length > 1) while (next.name === drawn.name) next = cards[Math.floor(Math.random() * cards.length)];
    setDrawn(next);
    window.setTimeout(() => document.getElementById('reading')?.scrollIntoView({behavior:'smooth',block:'start'}), 80);
  };

  return <div className="site-shell">
    <div className="announcement"><span className="announcement-dot"/> UM ESPAÇO PARA SE ESCUTAR <span className="announcement-star">✳</span> SEM PRESSA, SEM RESPOSTAS PRONTAS</div>
    <header className="nav-wrap">
      <a className="brand" href="#inicio" aria-label="Entrelinhas, início"><span className="brand-mark">e.</span><span>entrelinhas<small>tarot & autoconhecimento</small></span></a>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?'nav-links open':'nav-links'}>
        <a href="#sobre" onClick={()=>setMenuOpen(false)}>O espaço</a><a href="#como-funciona" onClick={()=>setMenuOpen(false)}>Como funciona</a><a href="#tiragem" onClick={()=>setMenuOpen(false)}>Sua carta</a>
        <a className="nav-cta" href="#tiragem" onClick={()=>setMenuOpen(false)}>Fazer uma tiragem <ArrowRight size={15}/></a>
      </nav>
    </header>

    <main id="inicio">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span/> UM ENCONTRO COM O AGORA</div>
          <h1>Às vezes, tudo o que a gente precisa é <em>olhar por outro ângulo.</em></h1>
          <p>Uma pausa no meio do caminho. Uma pergunta que talvez estivesse guardada. Um convite para se ouvir com um pouco mais de carinho.</p>
          <a className="primary-button" href="#tiragem">Encontrar minha carta <ArrowRight size={17}/></a>
          <div className="hero-note"><span className="note-line"/>Uma experiência de reflexão, feita no seu tempo.</div>
        </div>
        <div className="hero-art" aria-label="Ilustração abstrata de uma carta de tarot">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="sun-disc"><span>✳</span></div>
          <div className="hero-card card-back"><div className="card-inner"><div className="card-corner">✦</div><div className="card-moon">☾</div><div className="card-flower">✺</div><div className="card-corner bottom">✦</div></div></div>
          <div className="art-caption"><span>XXI</span> O caminho também é chegada</div>
          <div className="floating-leaf leaf-a">✳</div><div className="floating-leaf leaf-b">✧</div>
        </div>
        <div className="hero-bottom"><span>01 — INTENÇÃO</span><span>02 — ESCUTA</span><span>03 — DESCOBERTA</span></div>
      </section>

      <section className="intro-section" id="sobre">
        <div className="section-kicker">UM POUCO SOBRE ESTE ESPAÇO <span>✳</span></div>
        <div className="intro-grid"><h2>Não é sobre prever o futuro. É sobre <em>conversar com o presente.</em></h2><div className="intro-text"><p>O tarot pode ser um espelho simbólico: suas imagens e histórias ajudam a abrir perguntas, perceber sentimentos e explorar possibilidades.</p><p>Aqui, cada carta é um ponto de partida para a reflexão — não uma sentença, nem uma promessa sobre o que vai acontecer.</p><a href="#como-funciona" className="text-link">Conheça a proposta <ArrowDown size={15}/></a></div></div>
      </section>

      <section className="how-section" id="como-funciona">
        <div className="how-heading"><div><div className="section-kicker light">SIMPLES ASSIM <span>✳</span></div><h2>Um instante.<br/><em>Uma nova perspectiva.</em></h2></div><p>Não precisa saber nada sobre tarot. Só chegar como você está.</p></div>
        <div className="steps">
          <article><span className="step-no">01</span><div className="step-icon"><MoonStar/></div><h3>Respire</h3><p>Encontre um lugar tranquilo e pense no momento que está vivendo.</p></article>
          <article><span className="step-no">02</span><div className="step-icon"><Sparkles/></div><h3>Escolha</h3><p>Com sua intenção em mente, permita que uma carta apareça.</p></article>
          <article><span className="step-no">03</span><div className="step-icon"><Sun/></div><h3>Reflita</h3><p>Leia a mensagem, acolha o que fizer sentido e leve sua reflexão com você.</p></article>
        </div>
      </section>

      <section className="reading-section" id="tiragem">
        <div className="reading-heading"><div className="section-kicker"><span/> SEU MOMENTO, SUA PERGUNTA</div><h2>O que merece sua <em>atenção hoje?</em></h2><p>Feche os olhos por alguns segundos. Pense em algo que gostaria de compreender melhor.</p></div>
        <div className="draw-area">
          <div className={drawn?'drawn-card':'deck-card'}><div className="deck-pattern"><span>✳</span><i>✧</i><b>☾</b><small>ENTRELINHAS</small></div></div>
          <div className="draw-instruction"><span className="tiny-star">✳</span><h3>{drawn?'Sua carta está aqui.':'Quando sentir que é a hora...'}</h3><p>{drawn?'Leia sem pressa. Fique apenas com o que conversar com você.':'Não existe escolha certa. Apenas um convite para olhar para dentro.'}</p><button className="primary-button" onClick={drawCard}>{drawn?'Tirar outra carta':'Revelar minha carta'} <ArrowRight size={17}/></button>{drawn&&<button className="reset-button" onClick={()=>setDrawn(null)}><RotateCcw size={14}/> Recomeçar</button>}</div>
        </div>
        {drawn&&<div className="result" id="reading">
          <div className="result-top"><span>SUA CARTA • {drawn.number}</span><span className="result-tag">ARCANOS MAIORES</span></div>
          <div className="result-content"><div className="result-symbol"><span>{drawn.symbol}</span><small>{drawn.number}</small></div><div className="result-copy"><div className="section-kicker">UMA MENSAGEM PARA REFLETIR</div><h2>{drawn.name}</h2><h4>{drawn.keyword}</h4><p>{drawn.meaning}</p><blockquote>“{drawn.reflection}”</blockquote><div className="advice"><Leaf size={17}/><div><b>Um convite para hoje</b><p>{drawn.advice}</p></div></div></div></div>
          <p className="result-disclaimer">Esta leitura é um exercício simbólico de autoconhecimento. Use sua própria percepção para construir seus caminhos.</p>
        </div>}
      </section>

      <section className="closing"><div className="closing-flower">✳</div><p>um lembrete gentil</p><h2>Você não precisa ter todas as respostas <em>agora.</em></h2><span>Às vezes, uma boa pergunta já muda bastante coisa.</span><a href="#tiragem" className="text-link">Voltar para minha carta <ArrowRight size={15}/></a></section>
    </main>
    <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark">e.</span><span>entrelinhas<small>tarot & autoconhecimento</small></span></a><span>Feito com intenção, curiosidade e cuidado.</span><span>© 2026 ENTRELINHAS</span></footer>
  </div>;
}

export default App;