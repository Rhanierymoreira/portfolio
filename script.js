// ======== SOBRE E HABILIDADES ========

function mostrarTexto(secao) {
  const secoes = ["sobre", "habilidades"];

  secoes.forEach((id) => {
    const elemento = document.getElementById(`texto-${id}`);
    if (id === secao) {
      elemento.classList.toggle("oculto");
    } else {
      elemento.classList.add("oculto");
    }
  });
}

// ======== ÁUDIO ========

function playAudio() {
  const audio = document.getElementById("myAudio");
  audio.play().catch((e) => {
    console.error("Erro ao tocar o áudio:", e);
  });
}

function pauseAudio() {
  const audio = document.getElementById("myAudio");
  audio.pause();
}

// ======== DOM READY ========

document.addEventListener("DOMContentLoaded", function () {
  const btnSobre = document.getElementById("btn-sobre");
  const btnHabilidades = document.getElementById("btn-habilidades");
  const textoSobre = document.getElementById("texto-sobre");
  const textoHabilidades = document.getElementById("texto-habilidades");

  // ======== TEXTO DIGITANDO (TOPO) ========
  const textoTopo = "Olá mundo,\n eu sou o Rhaniery Moreira. ";
  const elementoDigitando = document.getElementById("texto-digitando");
  let i = 0;

  function digitar() {
    if (i < textoTopo.length) {
      const char = textoTopo.charAt(i);
      elementoDigitando.innerHTML += char === "\n" ? "<br>" : char;
      i++;
      setTimeout(digitar, 80);
    }
  }

  digitar();

  // ======== TEXTO COM MÁQUINA DE ESCREVER ========
  let escrevendo = false;

  function escreverTexto(elemento, texto, delay = 80) {
    elemento.textContent = "";
    elemento.classList.add("maquina");
    escrevendo = true;
    let i = 0;

    const intervalo = setInterval(() => {
      if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
      } else {
        clearInterval(intervalo);
        escrevendo = false;
      }
    }, delay);
  }

  // ======== BOTÃO SOBRE ========
  btnSobre.addEventListener("click", () => {
    if (escrevendo) return;

    textoHabilidades.classList.add("oculto");
    textoSobre.classList.remove("oculto");

    const textoSobreCompleto = `Meu nome é Rhaniery Moreira, tenho 30 anos e sou um estudante dedicado de desenvolvimento front-end, 
    atualmente cursando Programador Web pelo SENAC. Estou construindo minha base com HTML, CSS e JavaScript,
    explorando a lógica da programação para entender a fundo o funcionamento das aplicações web.

    Sou uma pessoa curiosa, comunicativa e colaborativa, sempre buscando aprender mais e enfrentar novos desafios.
    Acredito que a programação é uma ferramenta poderosa para criar experiências significativas e me envolver de corpo e alma na jornada de evolução.
    Estou trilhando esse caminho com foco e paixão, preparado para transformar conhecimento em soluções práticas e criativas.`;

    escreverTexto(textoSobre, textoSobreCompleto, 1);
  });

  // ======== BOTÃO HABILIDADES ========
  btnHabilidades.addEventListener("click", () => {
    if (escrevendo) return;

    textoSobre.classList.add("oculto");
    textoHabilidades.classList.remove("oculto");

    const textoHabilidadesCompleto = `Tenho conhecimento em desenvolvimento web com código puro (vanilla), utilizando HTML, CSS e JavaScript,
    além de estar estudando lógica de programação para aprimorar minhas bases.
    Pretendo evoluir para frameworks modernos após consolidar esse conhecimento essencial.

    No campo do design e multimídia, trabalho com Photoshop, CorelDRAW e estou aprendendo Adobe Premiere.
    Já criei logotipos, banners, flyers e vídeos com cortes básicos, combinando estética visual e funcionalidade.

    Também tenho familiaridade com boas práticas de organização de código e busco aprofundar o uso de ferramentas como Git e GitHub para versionamento e colaboração.

    Minhas principais soft skills são criatividade, comunicação e curiosidade.
    Aprendo de forma autodidata por meio de tutoriais e aulas, o que me permite absorver novos conhecimentos com agilidade e aplicar soluções práticas de forma contínua.`;

    escreverTexto(textoHabilidades, textoHabilidadesCompleto, 1);
  });
});

// ======== CARROSSEL ========

function expandirProjeto(nome) {
  const container = document.getElementById("projeto-expandido");
  container.innerHTML = `<img src="${nome}.png" alt="Projeto ${nome}" />`;
  container.classList.remove("oculto");
}
