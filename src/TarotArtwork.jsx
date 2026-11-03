import React from 'react';

const motifs = {
  'O Louco': ['☼', 'sun'], 'O Mago': ['✧', 'star'], 'A Sacerdotisa': ['☾', 'moon'],
  'A Imperatriz': ['❀', 'flower'], 'O Imperador': ['♜', 'pillar'], 'O Hierofante': ['⌘', 'arch'],
  'Os Enamorados': ['♡', 'heart'], 'O Carro': ['➶', 'road'], 'A Justiça': ['⚖', 'balance'],
  'O Eremita': ['✦', 'lantern'], 'A Roda da Fortuna': ['◎', 'wheel'], 'A Força': ['∞', 'infinity'],
  'O Enforcado': ['⌁', 'hanged'], 'A Morte': ['❋', 'flower'], 'A Temperança': ['◒', 'vessel'],
  'O Diabo': ['⛓', 'chain'], 'A Torre': ['ϟ', 'tower'], 'A Estrela': ['✷', 'star'],
  'A Lua': ['☾', 'moon'], 'O Sol': ['☼', 'sun'], 'O Julgamento': ['♧', 'branch'], 'O Mundo': ['✺', 'world']
};

export default function TarotArtwork({ card, compact = false }) {
  const [symbol, motif] = motifs[card?.name] || [card?.symbol || '✧', 'minor'];
  const isMinor = card?.arcana === 'menores';
  const suit = card?.name?.includes('Paus') ? '♧' : card?.name?.includes('Copas') ? '♡' : card?.name?.includes('Espadas') ? '⚔' : card?.name?.includes('Ouros') ? '◇' : symbol;
  const pipCount = /^Ás$/.test(card?.number) ? 1 : /^\d+$/.test(card?.number) ? Math.min(10, Number(card.number)) : 3;
  const pips = Array.from({ length: pipCount }, (_, i) => i);
  return <svg className={compact ? 'tarot-art tarot-art-compact' : 'tarot-art'} viewBox="0 0 180 260" role="img" aria-label={`Ilustração simbólica de ${card?.name || 'uma carta de tarot'}`}>
    <defs>
      <linearGradient id="lume-paper" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f4edda"/><stop offset="1" stopColor="#d9c9a5"/></linearGradient>
      <pattern id="lume-grain" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="3" r=".6" fill="#8b7956" opacity=".25"/><circle cx="9" cy="9" r=".45" fill="#8b7956" opacity=".2"/></pattern>
    </defs>
    <rect x="3" y="3" width="174" height="254" rx="3" fill="url(#lume-paper)"/>
    <rect x="3" y="3" width="174" height="254" rx="3" fill="url(#lume-grain)"/>
    <rect x="9" y="9" width="162" height="242" fill="none" stroke="#526b58" strokeWidth="1"/>
    <rect x="13" y="13" width="154" height="234" fill="none" stroke="#b17e5d" strokeWidth=".65"/>
    <path d="M18 48 Q35 22 52 43 M162 48 Q145 22 128 43 M18 212 Q35 238 52 217 M162 212 Q145 238 128 217" fill="none" stroke="#75866c" strokeWidth="1.2"/>
    <path d="M20 70 Q34 58 39 42 M160 70 Q146 58 141 42 M20 190 Q34 202 39 218 M160 190 Q146 202 141 218" fill="none" stroke="#75866c" strokeWidth="1"/>
    <g fill="#b17e5d"><circle cx="24" cy="28" r="2"/><circle cx="156" cy="28" r="2"/><circle cx="24" cy="232" r="2"/><circle cx="156" cy="232" r="2"/></g>
    <g stroke="#b17e5d" strokeWidth=".8" fill="none"><circle cx="90" cy="112" r="51"/><circle cx="90" cy="112" r="44" strokeDasharray="2 5"/><path d="M90 51V42 M90 182v-9 M29 112h9 M142 112h9 M47 69l-6-6 M139 161l-6-6 M133 69l6-6 M41 161l6-6"/></g>
    {!isMinor ? <g textAnchor="middle" fill="#345444">
      <circle cx="90" cy="112" r="28" fill="#d9c49a" stroke="#526b58" strokeWidth="1"/>
      <text x="90" y="127" fontSize="43" fontFamily="Georgia,serif">{symbol}</text>
      <path d="M90 145 C68 161 69 180 57 196 M90 145 C112 161 111 180 123 196" stroke="#526b58" strokeWidth="1.5" fill="none"/>
      <path d="M57 196q-16-18-17 0q13 8 17 0 M123 196q16-18 17 0q-13 8-17 0" fill="#8d9c7e" stroke="#526b58" strokeWidth=".8"/>
      <text x="90" y="221" fontSize="7" letterSpacing="1.6" fill="#8a674e">{motif.toUpperCase()}</text>
    </g> : <g fill="#345444" textAnchor="middle">
      {pips.map((p) => { const cols = pipCount > 6 ? 2 : 1; const rows = Math.ceil(pipCount / cols); const x = cols === 1 ? 90 : (p % cols === 0 ? 64 : 116); const y = 112 - ((rows - 1) * 19) / 2 + Math.floor(p / cols) * 19; return <text key={p} x={x} y={y} fontSize={pipCount > 6 ? 19 : 29} fontFamily="Georgia,serif">{suit}</text>; })}
      <path d="M40 184 Q90 205 140 184" stroke="#b17e5d" strokeWidth="1" fill="none"/>
    </g>}
    <text x="90" y="239" textAnchor="middle" fontSize="7" letterSpacing="1.5" fill="#526b58">L U M E</text>
  </svg>;
}
