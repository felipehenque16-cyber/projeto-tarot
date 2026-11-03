const suits = [
  { name: 'Paus', symbol: '♧', domain: 'criatividade, iniciativa e ação', focus: 'seus projetos, sua energia e a coragem de começar', question: 'Onde sua energia criativa pede passagem?', advice: 'Transforme vontade em um primeiro movimento possível.' },
  { name: 'Copas', symbol: '♡', domain: 'emoções, vínculos e afetos', focus: 'seus sentimentos, relações e necessidades emocionais', question: 'O que seus sentimentos estão tentando comunicar?', advice: 'Dê espaço ao que sente e converse com honestidade.' },
  { name: 'Espadas', symbol: '⚔', domain: 'pensamentos, comunicação e escolhas', focus: 'suas ideias, conversas e decisões', question: 'Que pensamento merece ser examinado com mais cuidado?', advice: 'Busque clareza, diferencie fatos de suposições e escolha suas palavras com atenção.' },
  { name: 'Ouros', symbol: '◇', domain: 'vida prática, recursos e construção', focus: 'sua rotina, trabalho, recursos e segurança', question: 'Que passo concreto pode fortalecer sua base?', advice: 'Valorize a constância e cuide do que está ao seu alcance.' }
];

const ranks = [
  { name: 'Ás', number: 'Ás', keyword: 'Uma possibilidade', meaning: 'O Ás representa uma semente: uma oportunidade, percepção ou vontade que começa a ganhar forma.', reflection: 'Que possibilidade merece sua atenção neste momento?', advice: 'Reconheça o começo e dê a ele espaço para se desenvolver.' },
  { name: 'Dois', number: '2', keyword: 'Encontro e escolha', meaning: 'O Dois fala de relação entre forças, parceria ou necessidade de escolher como seguir.', reflection: 'Que equilíbrio ou escolha está pedindo sua presença?', advice: 'Observe os dois lados antes de decidir. Procure reciprocidade.' },
  { name: 'Três', number: '3', keyword: 'Expansão', meaning: 'O Três aponta para crescimento, troca e primeiros resultados que surgem quando algo encontra espaço.', reflection: 'O que pode crescer quando você compartilha ou pede apoio?', advice: 'Permita colaboração e reconheça os avanços, mesmo os pequenos.' },
  { name: 'Quatro', number: '4', keyword: 'Estrutura', meaning: 'O Quatro traz a necessidade de criar base, estabilidade e limites para sustentar o que está sendo construído.', reflection: 'Que estrutura ajudaria você a se sentir mais seguro?', advice: 'Organize prioridades e fortaleça o que já funciona.' },
  { name: 'Cinco', number: '5', keyword: 'Tensão e mudança', meaning: 'O Cinco costuma marcar atrito, desafio ou uma mudança de perspectiva que interrompe a zona de conforto.', reflection: 'O que esse desconforto pode estar mostrando?', advice: 'Não ignore a tensão, mas evite reagir no impulso. Procure compreender o que precisa mudar.' },
  { name: 'Seis', number: '6', keyword: 'Ajuste e movimento', meaning: 'O Seis sugere uma passagem para maior harmonia, uma troca mais equilibrada ou um movimento de recuperação.', reflection: 'Que ajuste pode tornar esse caminho mais leve?', advice: 'Aceite ajuda, compartilhe responsabilidades e avance um passo de cada vez.' },
  { name: 'Sete', number: '7', keyword: 'Avaliação', meaning: 'O Sete convida a observar com cuidado, testar convicções e avaliar se o esforço está alinhado ao que importa.', reflection: 'Você está insistindo por propósito ou por hábito?', advice: 'Reavalie a estratégia sem desvalorizar o caminho percorrido.' },
  { name: 'Oito', number: '8', keyword: 'Prática e dedicação', meaning: 'O Oito fala de movimento, aprendizado pela prática e desenvolvimento que nasce da repetição consciente.', reflection: 'Que habilidade ou atitude merece sua dedicação?', advice: 'Escolha uma prática possível e mantenha a constância.' },
  { name: 'Nove', number: '9', keyword: 'Maturidade', meaning: 'O Nove representa uma etapa avançada de um ciclo, com aprendizados acumulados e maior consciência do próprio caminho.', reflection: 'O que você já aprendeu que não pode mais ignorar?', advice: 'Reconheça sua experiência e cuide para não carregar tudo sozinho.' },
  { name: 'Dez', number: '10', keyword: 'Conclusão de ciclo', meaning: 'O Dez aponta para culminação: algo chega a um ponto importante e pede integração, conclusão ou reorganização.', reflection: 'O que está chegando ao limite ou pedindo fechamento?', advice: 'Finalize o que for possível e decida conscientemente o que merece continuar.' },
  { name: 'Pajem', number: 'Pajem', keyword: 'Curiosidade', meaning: 'O Pajem representa uma energia de descoberta, abertura para aprender e disposição para experimentar uma nova abordagem.', reflection: 'O que você pode aprender se permitir ser iniciante?', advice: 'Faça perguntas, observe e experimente sem exigir perfeição.' },
  { name: 'Cavaleiro', number: 'Cavaleiro', keyword: 'Movimento e iniciativa', meaning: 'O Cavaleiro traz impulso e busca. Sua energia pede direção para que entusiasmo não se transforme em pressa.', reflection: 'Em que direção vale a pena colocar sua energia?', advice: 'Aja com intenção. Antes de acelerar, confira se o caminho faz sentido.' },
  { name: 'Rainha', number: 'Rainha', keyword: 'Maturidade e acolhimento', meaning: 'A Rainha expressa domínio sensível de uma experiência: saber acolher, compreender e sustentar sem perder a própria voz.', reflection: 'Como você pode cuidar dessa situação sem se abandonar?', advice: 'Una sensibilidade e firmeza. Escute suas necessidades e respeite seus limites.' },
  { name: 'Rei', number: 'Rei', keyword: 'Domínio e responsabilidade', meaning: 'O Rei representa experiência aplicada com responsabilidade. É a capacidade de organizar recursos e agir com visão mais ampla.', reflection: 'Que atitude madura essa situação está pedindo?', advice: 'Assuma sua parte com clareza e use sua experiência para construir, não controlar.' }
];

export const minorCards = suits.flatMap((suit) => ranks.map((rank) => ({
  name: `${rank.name} de ${suit.name}`,
  number: rank.number,
  symbol: suit.symbol,
  keyword: `${rank.keyword} • ${suit.domain}`,
  theme: suit.domain,
  meaning: `${rank.meaning} No campo de ${suit.domain}, essa carta convida você a observar ${suit.focus}.`,
  reflection: suit.question,
  advice: `${rank.advice} ${suit.advice}`,
  arcana: 'menores'
})));
