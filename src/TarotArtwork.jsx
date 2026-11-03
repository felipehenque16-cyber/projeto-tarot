import React, { useId } from 'react';

const majorSymbols = {
  'O Louco': '✳', 'O Mago': '✧', 'A Sacerdotisa': '☾', 'A Imperatriz': '❀',
  'O Imperador': '♜', 'O Hierofante': '⌘', 'Os Enamorados': '♡', 'O Carro': '➶',
  'A Justiça': '⚖', 'O Eremita': '✦', 'A Roda da Fortuna': '◎', 'A Força': '∞',
  'O Enforcado': '⌁', 'A Morte': '❋', 'A Temperança': '◒', 'O Diabo': '⛓',
  'A Torre': 'ϟ', 'A Estrela': '✷', 'A Lua': '☾', 'O Sol': '☼',
  'O Julgamento': '♧', 'O Mundo': '✺'
};

function MajorScene({ name }) {
  const common = { fill: 'none', stroke: '#526b58', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' };
  switch (name) {
    case 'O Louco': return <g {...common}><path d="M90 150 Q55 130 48 85 Q75 105 90 112 Q105 105 132 85 Q125 130 90 150Z" fill="#a9b69a" stroke="none"/><path d="M90 148V78 M90 105L65 88 M90 118L116 96"/><circle cx="90" cy="65" r="10" fill="#d8b77d"/><path d="M57 176q33 15 66 0"/></g>;
    case 'O Mago': return <g {...common}><path d="M54 72Q90 35 126 72L119 150H61Z" fill="#d8c49a"/><path d="M90 50V150M70 88H110M75 110L90 95L105 110"/><path d="M58 166Q90 148 122 166M68 177H112"/><circle cx="90" cy="61" r="22" stroke="#b17e5d" strokeDasharray="2 4"/></g>;
    case 'A Sacerdotisa': return <g {...common}><path d="M55 174V76Q55 58 73 58H107Q125 58 125 76V174" fill="#d8c49a"/><path d="M70 174V91Q90 70 110 91V174M90 54V36"/><path d="M45 181H135M63 188H117"/><path d="M90 35C65 50 65 75 90 88C115 75 115 50 90 35Z" fill="#e6d8b7" stroke="#b17e5d"/></g>;
    case 'A Imperatriz': return <g {...common}><path d="M90 165V90M90 125Q48 120 55 83Q83 83 90 125ZM90 115Q97 70 128 72Q132 109 90 115Z" fill="#a9b69a"/><circle cx="90" cy="75" r="18" fill="#d8c49a"/><path d="M90 57V40M72 63L59 51M108 63L121 51M55 178Q90 160 125 178"/><path d="M48 190Q60 176 72 190Q84 176 96 190Q108 176 120 190" /></g>;
    case 'O Imperador': return <g {...common}><path d="M57 177V75H123V177Z" fill="#d8c49a"/><path d="M48 75L90 45L132 75M70 95V157M90 95V157M110 95V157M48 177H132"/><path d="M64 65L64 48M116 65V48" stroke="#b17e5d" strokeWidth="3"/><circle cx="90" cy="112" r="12" fill="#a9b69a"/></g>;
    case 'O Hierofante': return <g {...common}><path d="M48 174V77L90 43L132 77V174Z" fill="#d8c49a"/><path d="M65 174V92Q90 65 115 92V174M78 174V115H102V174"/><path d="M90 51V32M79 43H101M57 184H123"/><circle cx="90" cy="103" r="8" fill="#a9b69a"/></g>;
    case 'Os Enamorados': return <g {...common}><path d="M90 165C55 138 48 118 61 101C72 86 86 96 90 108C94 96 108 86 119 101C132 118 125 138 90 165Z" fill="#d8b9a0"/><path d="M90 83V47M78 60L90 47L102 60M55 178Q90 160 125 178"/><circle cx="90" cy="42" r="5" fill="#b17e5d"/></g>;
    case 'O Carro': return <g {...common}><path d="M53 95H127L118 158H62Z" fill="#d8c49a"/><path d="M90 95V58M72 76H108M63 158L52 178M117 158L128 178"/><circle cx="62" cy="177" r="10" fill="#a9b69a"/><circle cx="118" cy="177" r="10" fill="#a9b69a"/><path d="M48 85L90 45L132 85"/></g>;
    case 'A Justiça': return <g {...common}><path d="M90 58V166M58 76H122M70 76L55 112H85Z M110 76L95 112H125Z"/><path d="M72 166H108M62 179H118"/><circle cx="90" cy="48" r="9" fill="#d8c49a"/><path d="M90 39V29"/></g>;
    case 'O Eremita': return <g {...common}><path d="M90 54L126 171H54Z" fill="#d8c49a"/><path d="M90 54V171M90 82L109 112H71Z"/><path d="M90 90L104 104L90 118L76 104Z" fill="#e8d6a9" stroke="#b17e5d"/><path d="M52 181H128"/></g>;
    case 'A Roda da Fortuna': return <g {...common}><circle cx="90" cy="112" r="53" fill="#d8c49a"/><circle cx="90" cy="112" r="12"/><path d="M90 59V165M37 112H143M53 75L127 149M127 75L53 149"/><path d="M90 43L98 58H82Z M90 181L82 166H98Z"/></g>;
    case 'A Força': return <g {...common}><path d="M90 57C45 57 45 126 90 126S135 195 90 195S45 126 90 126S135 57 90 57Z" fill="#d8c49a"/><path d="M68 88Q90 68 112 88M68 164Q90 184 112 164"/><circle cx="90" cy="126" r="10" fill="#a9b69a"/></g>;
    case 'O Enforcado': return <g {...common}><path d="M52 58H128M62 58V180M118 58V180M62 82H118"/><path d="M90 82V115M90 115L72 145M90 115L108 145M90 115L78 94M90 115L106 94" strokeWidth="3"/><circle cx="90" cy="72" r="11" fill="#d8c49a"/><path d="M45 180H135"/></g>;
    case 'A Morte': return <g {...common}><path d="M90 48V170M90 82L62 62M90 82L118 62M90 125L63 145M90 125L117 145"/><path d="M62 62Q42 45 48 30Q69 39 62 62ZM118 62Q138 45 132 30Q111 39 118 62ZM63 145Q40 151 42 170Q62 166 63 145ZM117 145Q140 151 138 170Q118 166 117 145Z" fill="#a9b69a"/><circle cx="90" cy="48" r="10" fill="#d8c49a"/></g>;
    case 'A Temperança': return <g {...common}><path d="M60 77Q90 56 120 77L110 160H70Z" fill="#d8c49a"/><path d="M70 92L110 139M110 92L70 139"/><path d="M90 48V175M54 181H126"/><path d="M90 48C72 33 64 51 78 61M90 48C108 33 116 51 102 61" stroke="#b17e5d"/></g>;
    case 'O Diabo': return <g {...common}><path d="M90 54V168M58 82L122 82M58 82L45 120H71ZM122 82L109 120H135Z"/><path d="M72 168Q90 145 108 168M78 58L90 43L102 58"/><circle cx="90" cy="112" r="18" fill="#d8c49a"/><path d="M90 94V130M72 112H108"/></g>;
    case 'A Torre': return <g {...common}><path d="M60 178V88H120V178Z" fill="#d8c49a"/><path d="M54 88L90 52L126 88M73 88V178M107 88V178M60 112H120"/><path d="M108 42L88 72L105 75L78 108" stroke="#b17e5d" strokeWidth="3"/><path d="M45 184H135"/></g>;
    case 'A Estrela': return <g {...common}><path d="M90 47L101 89L143 100L101 111L90 153L79 111L37 100L79 89Z" fill="#d8c49a"/><path d="M90 63V137M53 100H127M64 74L116 126M116 74L64 126"/><circle cx="90" cy="100" r="9" fill="#a9b69a"/></g>;
    case 'A Lua': return <g {...common}><path d="M105 48C55 48 45 118 82 148C48 140 35 103 48 74C60 45 88 34 105 48Z" fill="#d8c49a"/><path d="M111 67Q130 85 111 103Q92 85 111 67Z" fill="#a9b69a"/><path d="M52 164Q90 145 128 164M62 178Q90 164 118 178"/><circle cx="64" cy="57" r="3" fill="#b17e5d"/><circle cx="133" cy="125" r="3" fill="#b17e5d"/></g>;
    case 'O Sol': return <g {...common}><circle cx="90" cy="105" r="34" fill="#d8b77d"/><circle cx="90" cy="105" r="22"/><path d="M90 50V35M90 175V160M35 105H50M130 105H145M51 66L62 77M118 133L129 144M129 66L118 77M62 133L51 144"/><path d="M54 181Q90 163 126 181"/></g>;
    case 'O Julgamento': return <g {...common}><path d="M90 53V157M90 81L66 58M90 81L114 58"/><path d="M66 58Q49 45 53 29Q73 34 66 58ZM114 58Q131 45 127 29Q107 34 114 58Z" fill="#a9b69a"/><path d="M56 171Q90 151 124 171M66 184Q90 170 114 184"/><circle cx="90" cy="49" r="8" fill="#d8c49a"/></g>;
    case 'O Mundo': return <g {...common}><ellipse cx="90" cy="112" rx="48" ry="65" fill="none" stroke="#b17e5d" strokeWidth="3"/><circle cx="90" cy="112" r="24" fill="#d8c49a"/><path d="M90 88V136M66 112H114M90 88L104 112L90 136L76 112Z"/><path d="M34 58L45 75M146 58L135 75M34 166L45 149M146 166L135 149"/></g>;
    default: return null;
  }
}

export default function TarotArtwork({ card, compact = false }) {
  const uid = useId().replace(/:/g, '');
  const name = card?.name || '';
  const isMinor = card?.arcana === 'menores';
  const symbol = majorSymbols[name] || card?.symbol || '✧';
  const suit = name.includes('Paus') ? '♧' : name.includes('Copas') ? '♡' : name.includes('Espadas') ? '⚔' : name.includes('Ouros') ? '◇' : symbol;
  const pipCount = card?.number === 'Ás' ? 1 : /^\\d+$/.test(card?.number || '') ? Math.min(10, Number(card.number)) : 3;
  const pips = Array.from({ length: pipCount }, (_, i) => i);
  return <svg className={compact ? 'tarot-art tarot-art-compact' : 'tarot-art'} viewBox="0 0 180 260" role="img" aria-label={`Ilustração simbólica de ${name || 'uma carta de tarot'}`}>
    <defs>
      <linearGradient id={`lume-paper-${uid}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f4edda"/><stop offset="1" stopColor="#d9c9a5"/></linearGradient>
      <pattern id={`lume-grain-${uid}`} width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".6" fill="#8b7956" opacity=".25"/><circle cx="9" cy="9" r=".45" fill="#8b7956" opacity=".2"/></pattern>
    </defs>
    <rect x="3" y="3" width="174" height="254" rx="3" fill={`url(#lume-paper-${uid})`}/>
    <rect x="3" y="3" width="174" height="254" rx="3" fill={`url(#lume-grain-${uid})`}/>
    <rect x="9" y="9" width="162" height="242" fill="none" stroke="#526b58" strokeWidth="1"/>
    <rect x="13" y="13" width="154" height="234" fill="none" stroke="#b17e5d" strokeWidth=".65"/>
    <path d="M18 48 Q35 22 52 43 M162 48 Q145 22 128 43 M18 212 Q35 238 52 217 M162 212 Q145 238 128 217" fill="none" stroke="#75866c" strokeWidth="1.2"/>
    <g fill="#b17e5d"><circle cx="24" cy="28" r="2"/><circle cx="156" cy="28" r="2"/><circle cx="24" cy="232" r="2"/><circle cx="156" cy="232" r="2"/></g>
    {!isMinor ? <g>
      <circle cx="90" cy="112" r="60" fill="none" stroke="#b17e5d" strokeWidth=".8" strokeDasharray="2 5"/>
      <MajorScene name={name}/>
      <text x="90" y="215" textAnchor="middle" fontSize="7" letterSpacing="1.6" fill="#8a674e">{name.toLocaleUpperCase('pt-BR')}</text>
    </g> : <g fill="#345444" textAnchor="middle">
      <circle cx="90" cy="112" r="58" fill="none" stroke="#b17e5d" strokeWidth=".8" strokeDasharray="2 5"/>
      {pips.map((p) => { const cols = pipCount > 6 ? 2 : 1; const rows = Math.ceil(pipCount / cols); const x = cols === 1 ? 90 : (p % cols === 0 ? 64 : 116); const y = 112 - ((rows - 1) * 19) / 2 + Math.floor(p / cols) * 19; return <text key={p} x={x} y={y} fontSize={pipCount > 6 ? 19 : 29} fontFamily="Georgia,serif">{suit}</text>; })}
      <path d="M40 184 Q90 205 140 184" stroke="#b17e5d" strokeWidth="1" fill="none"/>
      <text x="90" y="215" fontSize="7" letterSpacing="1.6" fill="#8a674e">{suit} • {card?.number?.toUpperCase()}</text>
    </g>}
    <text x="90" y="239" textAnchor="middle" fontSize="7" letterSpacing="1.5" fill="#526b58">L U M E</text>
  </svg>;
}
