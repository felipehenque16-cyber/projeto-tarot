import { useState } from 'react';
import { minorCards } from './minorArcana.js';
import TarotArtwork from './TarotArtwork.jsx';
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

const fullDeck = [...cards, ...minorCards];

const focusMessages = {
  autoconhecimento: 'Observe o que esta carta desperta em você. Que necessidade, limite ou desejo pessoal merece ser escutado com mais atenção?',
  amor: 'Nas relações, esta carta pode abrir uma reflexão sobre diálogo, reciprocidade e cuidado. O que você precisa expressar ou compreender melhor?',
  trabalho: 'No trabalho e nos projetos, pense em como esta mensagem conversa com suas habilidades, prioridades e próximos passos possíveis.',
  decisoes: 'Diante de escolhas e mudanças, use esta imagem para considerar alternativas, reconhecer o que está sob seu controle e decidir com mais consciência.'
};

function App() {
  const [drawn, setDrawn] = useState(null);
  const [spread, setSpread] = useState([]);
  const [mode, setMode] = useState('single');
  const [focus, setFocus] = useState('autoconhecimento');
  const [menuOpen, setMenuOpen] = useState(false);
  const [constellationName, setConstellationName] = useState('');
  const [constellationBirthDate, setConstellationBirthDate] = useState('');
  const [constellationRelations, setConstellationRelations] = useState(['pai', 'mae', 'conjuge']);
  const [constellationResult, setConstellationResult] = useState(false);
  const relationContent = {
    pai: {
      title: 'O vínculo com a figura paterna',
      theme: 'origem, referências e autonomia',
      reflection: 'A relação com a figura paterna pode tocar temas como reconhecimento, segurança, limites e a maneira como aprendemos a ocupar nosso espaço. Cada história é única: vale observar tanto o que foi oferecido quanto aquilo que você sentiu falta, sem reduzir toda a relação a uma única lembrança.',
      question: 'Que aprendizados dessa relação você deseja manter — e quais gostaria de construir de outro jeito?',
      invitation: 'Reconheça o que essa história representa para você. Sua trajetória também pode incluir escolhas próprias, limites e novas referências.'
    },
    mae: {
      title: 'O vínculo com a figura materna',
      theme: 'cuidado, acolhimento e identidade',
      reflection: 'A relação com a figura materna pode despertar reflexões sobre cuidado, afeto, pertencimento e expectativas. Nem todas as experiências são iguais, e é possível reconhecer sentimentos diferentes ao mesmo tempo, sem precisar encontrar uma explicação definitiva para eles.',
      question: 'Quais formas de cuidado fizeram sentido para você e de que cuidado sente necessidade hoje?',
      invitation: 'Permita-se reconhecer suas necessidades atuais. Cuidar de si também pode significar estabelecer limites e construir formas próprias de acolhimento.'
    },
    conjuge: {
      title: 'O vínculo com seu cônjuge',
      theme: 'parceria, reciprocidade e escolhas',
      reflection: 'Uma relação conjugal é construída no encontro entre duas histórias, com expectativas, valores e maneiras diferentes de demonstrar afeto. Olhar para esse vínculo pode ajudar a perceber como vocês dialogam, dividem responsabilidades e preservam a individualidade dentro da parceria.',
      question: 'O que fortalece a parceria de vocês e que conversa merece mais espaço neste momento?',
      invitation: 'Escolha um gesto possível de diálogo ou cuidado mútuo. Uma relação saudável também precisa de respeito, autonomia e espaço para cada pessoa ser quem é.'
    }
  };
  const toggleConstellationRelation = (relation) => {
    setConstellationRelations(current => current.includes(relation)
      ? current.filter(item => item !== relation)
      : [...current, relation]);
    setConstellationResult(false);
  };
  const drawCard = () => {
    if (mode !== 'single') { const deck = [...fullDeck].sort(() => Math.random() - 0.5); setSpread(deck.slice(0, mode === 'five' ? 5 : 3)); setDrawn(null); }
    else { let next = fullDeck[Math.floor(Math.random() * fullDeck.length)]; if (drawn) while (next.name === drawn.name) next = fullDeck[Math.floor(Math.random() * fullDeck.length)]; setDrawn(next); setSpread([]); }
    window.setTimeout(() => document.getElementById('reading')?.scrollIntoView({behavior:'smooth',block:'start'}), 100);
  };

  return <div className="site-shell">
    <div className="announcement"><span className="announcement-dot"/> UM ESPAÇO PARA SE ESCUTAR <span className="announcement-star">✳</span> SEM PRESSA, SEM RESPOSTAS PRONTAS</div>
    <header className="nav-wrap">
      <a className="brand" href="#inicio" aria-label="Lume, início"><span className="brand-mark">l.</span><span>lume<small>tarot & autoconhecimento</small></span></a>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Abrir menu">{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?'nav-links open':'nav-links'}>
        <a href="#sobre" onClick={()=>setMenuOpen(false)}>O espaço</a><a href="#constelacao" onClick={()=>setMenuOpen(false)}>Constelação</a><a href="#tiragem" onClick={()=>setMenuOpen(false)}>Sua carta</a>
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

      <section className="constellation-section" id="constelacao">
        <div className="constellation-heading">
          <div className="section-kicker light">UM OLHAR PARA OS SEUS VÍNCULOS <span>✳</span></div>
          <h2>Nossa história também vive nos <em>laços que construímos.</em></h2>
          <p>Uma experiência de reflexão sobre relações importantes da sua vida. Informe seus dados e escolha os vínculos que deseja explorar — juntos, em uma única leitura.</p>
        </div>
        <div className="constellation-panel constellation-form-panel">
          <div className="constellation-form-intro">
            <span className="constellation-form-symbol">✳</span>
            <div><div className="constellation-label">SUA JORNADA COMEÇA AQUI</div><h3>Vamos olhar para a sua história?</h3><p>Preencha seus dados e escolha um ou mais vínculos para a leitura integrada.</p></div>
          </div>
          <div className="constellation-fields">
            <label className="constellation-field"><span>SEU NOME</span><input type="text" value={constellationName} onChange={event=>{setConstellationName(event.target.value);setConstellationResult(false)}} placeholder="Como gostaria de ser chamado(a)?" maxLength="80" /></label>
            <label className="constellation-field"><span>SUA DATA DE NASCIMENTO</span><input type="date" value={constellationBirthDate} onChange={event=>{setConstellationBirthDate(event.target.value);setConstellationResult(false)}} max={new Date().toISOString().slice(0,10)} /></label>
          </div>
          <div className="constellation-label relation-label">QUAIS VÍNCULOS VOCÊ DESEJA EXPLORAR?</div>
          <div className="constellation-relation-options">
            {[
              {id:'pai',label:'Pai',symbol:'☼',caption:'Figura paterna'},
              {id:'mae',label:'Mãe',symbol:'☾',caption:'Figura materna'},
              {id:'conjuge',label:'Cônjuge',symbol:'♡',caption:'Relação conjugal'}
            ].map(item=><button type="button" key={item.id} className={constellationRelations.includes(item.id)?'constellation-relation selected':'constellation-relation'} onClick={()=>toggleConstellationRelation(item.id)} aria-pressed={constellationRelations.includes(item.id)}><span>{item.symbol}</span><b>{item.label}</b><small>{item.caption}</small><i>{constellationRelations.includes(item.id)?'✓':'+'}</i></button>)}
          </div>
          <div className="constellation-submit-row">
            <p>Você pode selecionar um, dois ou os três vínculos.</p>
            <button className="primary-button" type="button" disabled={!constellationName.trim() || !constellationBirthDate || constellationRelations.length===0} onClick={()=>setConstellationResult(true)}>Explorar meus vínculos <ArrowRight size={16}/></button>
          </div>
          {constellationResult&&<div className="constellation-reading" aria-live="polite">
            <div className="constellation-reading-top"><span>LEITURA REFLEXIVA INTEGRADA</span><span>✳</span></div>
            <h3>Um olhar para a sua história, {constellationName.trim().split(' ')[0]}.</h3>
            <p className="constellation-reading-meta">Nascimento: {new Date(constellationBirthDate + 'T12:00:00').toLocaleDateString('pt-BR')} · Vínculos escolhidos: {constellationRelations.length}</p>
            <p className="constellation-reading-opening">Cada vínculo faz parte de uma história maior: a sua. Não é necessário encontrar uma resposta única ou definir alguém como responsável por tudo o que você viveu. O convite é observar o que essas relações significam para você hoje.</p>
            <div className="constellation-reading-connections">
              {constellationRelations.map((relation,index)=><article className="constellation-connection" key={relation}>
                <span>0{index+1} · {relationContent[relation].theme.toUpperCase()}</span>
                <h4>{relationContent[relation].title}</h4>
                <p>{relationContent[relation].reflection}</p>
                <blockquote>{relationContent[relation].question}</blockquote>
                <div><b>Um convite para refletir</b><p>{relationContent[relation].invitation}</p></div>
              </article>)}
            </div>
            <div className="constellation-integrated-note"><span>✧</span><div><b>Olhando para o conjunto</b><p>Esses vínculos podem se relacionar de maneiras diferentes na sua trajetória. Observe quais sentimentos, valores ou necessidades aparecem em comum — e também o que torna cada relação única. Você pode acolher sua história sem deixar que ela determine seus próximos passos.</p></div></div>
            <button className="reset-button" onClick={()=>setConstellationResult(false)}><RotateCcw size={14}/> Editar meus dados e vínculos</button>
          </div>}
        </div>
        <p className="constellation-footnote">Seu nome e data de nascimento servem apenas para personalizar a experiência; não determinam sua personalidade nem revelam fatos sobre sua família. As reflexões são simbólicas e não substituem acompanhamento psicológico ou terapêutico. Os dados não são enviados a um servidor nem salvos após atualizar a página.</p>
      </section>

      <section className="reading-section" id="tiragem">
        <div className="reading-heading"><div className="section-kicker"><span/> SEU MOMENTO, SUA PERGUNTA</div><h2>O que merece sua <em>atenção hoje?</em></h2><p>Feche os olhos por alguns segundos. Pense em algo que gostaria de compreender melhor.</p></div>
        <div className="reading-choices">
          <div className="choice-label">ESCOLHA O FOCO DA SUA REFLEXÃO</div>
          <div className="topic-options">{[['autoconhecimento','Olhar para mim'],['amor','Amor e relações'],['trabalho','Trabalho e caminhos'],['decisoes','Escolhas e mudanças']].map(([v,l])=><button key={v} className={focus===v?'topic-option selected':'topic-option'} onClick={()=>{setFocus(v);setDrawn(null);setSpread([])}}>{l}</button>)}</div>
          <div className="mode-options"><button className={mode==='single'?'mode-option selected':'mode-option'} onClick={()=>{setMode('single');setDrawn(null);setSpread([])}}>Uma carta<small>um olhar para o agora</small></button><button className={mode==='three'?'mode-option selected':'mode-option'} onClick={()=>{setMode('three');setDrawn(null);setSpread([])}}>Três cartas<small>passado · presente · possibilidades</small></button><button className={mode==='five'?'mode-option selected':'mode-option'} onClick={()=>{setMode('five');setDrawn(null);setSpread([])}}>Cinco cartas<small>uma visão mais ampla do momento</small></button></div>
        </div>
        <div className="draw-area">
          <div className={drawn?'flip-card is-flipped':'flip-card'}><div className="flip-card-inner"><div className="flip-face flip-back"><div className="deck-pattern"><span>✳</span><i>✧</i><b>☾</b><small>LUME</small></div></div><div className="flip-face flip-front"><div className="front-frame">{drawn && <TarotArtwork card={drawn} />}</div></div></div></div>
          <div className="draw-instruction"><span className="tiny-star">✳</span><h3>{drawn||spread.length?'Sua tiragem está aqui.':'Quando sentir que é a hora...'}</h3><p>{drawn||spread.length?'Leia sem pressa. Fique com o que conversar com você.':'Não existe escolha certa. Apenas um convite para olhar para dentro.'}</p><button className="primary-button" onClick={drawCard}>{drawn||spread.length?'Fazer nova tiragem':mode==='five'?'Revelar as cinco cartas':mode==='three'?'Revelar as três cartas':'Revelar minha carta'} <ArrowRight size={17}/></button>{(drawn||spread.length>0)&&<button className="reset-button" onClick={()=>{setDrawn(null);setSpread([])}}><RotateCcw size={14}/> Recomeçar</button>}</div>
        </div>
        {spread.length>=3&&<div className="result spread-result" id="reading">
          <div className="result-top"><span>SUA TIRAGEM • {spread.length} CARTAS</span><span className="result-tag">FOCO: {focus.toUpperCase()}</span></div>
          <div className="focus-lens"><b>OLHAR PELO SEU FOCO</b><p>{focusMessages[focus]}</p></div>
          <div className={spread.length===5?"spread-grid spread-five":"spread-grid"}>{spread.map((card,i)=><article className="spread-card" key={card.name} style={{animationDelay:(i*180)+'ms'}}><div className="spread-position">{(spread.length===5?['01 — CONTEXTO','02 — DESAFIO','03 — O QUE AJUDA','04 — O QUE OBSERVAR','05 — CAMINHO POSSÍVEL']:['01 — PASSADO','02 — PRESENTE','03 — POSSIBILIDADES'])[i]}</div><div className="mini-card"><TarotArtwork card={card} compact /></div><h3>{card.name}</h3><span className="spread-keyword">{card.keyword}</span><p>{card.meaning}</p><blockquote>“{card.reflection}”</blockquote><div className="spread-advice"><b>Um convite</b><p>{card.advice}</p></div></article>)}</div>
          <div className="spread-synthesis"><span>OLHANDO PARA O CONJUNTO</span><p>Que relação você percebe entre {spread.map((card,i)=><strong key={card.name}>{i>0?', ':''}{card.keyword.toLowerCase()}</strong>)}? A conexão que você faz entre essas imagens também faz parte da leitura.</p></div>
          <p className="result-disclaimer">Uma leitura simbólica para refletir sobre {focus==='amor'?'amor e relações':focus==='trabalho'?'trabalho e caminhos':focus==='decisoes'?'escolhas e mudanças':'autoconhecimento'}. As cartas não determinam o futuro.</p>
        </div>}
        {drawn&&<div className="result" id="reading">
          <div className="result-top"><span>SUA CARTA • {drawn.number} · FOCO: {focus.toUpperCase()}</span><span className="result-tag">{drawn.arcana === 'menores' ? 'ARCANOS MENORES' : 'ARCANOS MAIORES'}</span></div>
          <div className="result-content"><div className="result-symbol"><TarotArtwork card={drawn} /></div><div className="result-copy"><div className="section-kicker">UMA MENSAGEM PARA REFLETIR</div><h2>{drawn.name}</h2><h4>{drawn.keyword}</h4><div className="focus-lens"><b>OLHAR PELO SEU FOCO</b><p>{focusMessages[focus]}</p></div><p>{drawn.meaning}</p><blockquote>“{drawn.reflection}”</blockquote><div className="advice"><Leaf size={17}/><div><b>Um convite para hoje</b><p>{drawn.advice}</p></div></div></div></div>
          <p className="result-disclaimer">Esta leitura é um exercício simbólico de autoconhecimento. Use sua própria percepção para construir seus caminhos.</p>
        </div>}
      </section>

      <section className="closing"><div className="closing-flower">✳</div><p>um lembrete gentil</p><h2>Você não precisa ter todas as respostas <em>agora.</em></h2><span>Às vezes, uma boa pergunta já muda bastante coisa.</span><a href="#tiragem" className="text-link">Voltar para minha carta <ArrowRight size={15}/></a></section>
    </main>
    <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark">l.</span><span>lume<small>tarot & autoconhecimento</small></span></a><span>Feito com intenção, curiosidade e cuidado.</span><span>© 2026 LUME</span></footer>
  </div>;
}

export default App;