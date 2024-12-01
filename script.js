// selecionar os elementos
const imagemSvg = document.querySelector(".header img")
const titulo = document.querySelector("h1");
const subTitulos = document.querySelectorAll("h2");
const paragrafos = document.querySelectorAll("p");
const botao = document.querySelector("button");
const links = document.querySelectorAll("a");
const negritos = document.querySelectorAll("strong");
const formacaoTexto = document.querySelectorAll(".formacao-texto");
const formacaoAno = document.querySelectorAll(".formacao-ano");
const backgroundFormacao = document.querySelectorAll(".rotina");
const corTituloFormacao = document.querySelectorAll(".rotina-tipo");
const corRotinaNormal = document.querySelectorAll(".rotina-normal");
const corRotinaInstituicao = document.querySelectorAll(".rotina-instituicao");

//variaveis que recebm as cores padrões
const corPadrao = imagemSvg.style.fill;
const corTitulo = titulo.style.color;
const corSubTitulos = subTitulos[0].style.color;
const corParagrafos = paragrafos[0].style.color;
const corBotao = botao.style.color;
const corLinks = links[0].style.color;
const corNegritos = negritos[0].style.color;
const corFormacaoTexto = formacaoTexto[0].style.color;
const corFormacaoAno = formacaoAno[0].style.color;
const corBackgroundFormacao = backgroundFormacao[0].style.backgroundColor;
const corCorTituloFormacao = corTituloFormacao[0].style.color;
const corCorRotinaNormal = corRotinaNormal[0].style.color;
const corCorRotinaInstituicao = corRotinaInstituicao[0].style.color;

//variavel booleana
let diurno = true;

// deixar o site com um modo noturno
function noturno() {
  if(diurno){

  document.body.style.backgroundColor = "#1A1A1A";

    //mudar a cor da imagem svg
    imagemSvg.style.filter = "invert(1)";

    // Define a cor para o título (h1) e botão
    
    if (titulo) titulo.style.color = "white";
    if (botao) botao.style.color = "white";

    // Define a cor para cada subtítulo (h2)
    subTitulos.forEach((subtitulo) => {
      subtitulo.style.color = "white";
    });

    // Define a cor para cada parágrafo (p)
    paragrafos.forEach((paragrafo) => {
      paragrafo.style.color = "white";
    });

    // Define a cor para cada link (a)
    links.forEach((link) => {
      link.style.color = "#141414";
    });

    // Define a cor para cada negritos (strong)
    negritos.forEach((negrito) => {
      negrito.style.color = "#a3a3a3"
    });

    // Define a cor para cada formação-texto
    formacaoTexto.forEach((formacao) => {
      formacao.style.color = "black";
    });

    // Define a cor para cada formação-ano
    formacaoAno.forEach((formacao) => {
      formacao.style.color = "white";
    });

    //mudar o background da formação
    backgroundFormacao.forEach((formacao) => {
      formacao.style.background = "#f5f5f5";
    })

    //mudar o cor da letra corTituloFormacao
    corTituloFormacao.forEach((formacao) => {
      formacao.style.fontWeight = "bold";
      formacao.style.color = "black";
    })

    //mudar a cor da letra corRotinaNormal
    corRotinaNormal.forEach((formacao) => {
      formacao.style.color = "black";
    })

    //mudar a cor da letra corRotinaInstituicao
    corRotinaInstituicao.forEach((formacao) => {
      //formacao.style.fontWeight = "bold";
      formacao.style.color = "black";
    })

    return diurno = false;

  } else {

    // volta ao modo diurno
    imagemSvg.style.filter = "invert(0)";
    document.body.style.backgroundColor = "#ffffff";
    titulo.style.color = corTitulo;

    subTitulos.forEach((subtitulo) => {
      subtitulo.style.color = corSubTitulos;
    });

    paragrafos.forEach((paragrafo) => {
      paragrafo.style.color = corParagrafos;
    });

    botao.style.color = corBotao;

    links.forEach((link) => {
      link.style.color = corLinks;
    });

    negritos.forEach((negrito) => {
      negrito.style.color = corNegritos;
    });

    formacaoTexto.forEach((formacao) => {
      formacao.style.color = corFormacaoTexto;
    });

    formacaoAno.forEach((formacao) => {
      formacao.style.color = corFormacaoAno;
    });

    backgroundFormacao.forEach((formacao) => {
      formacao.style.background = corBackgroundFormacao;
    });

    corTituloFormacao.forEach((formacao) => {
      formacao.style.color = corCorTituloFormacao;
    });

    corRotinaNormal.forEach((formacao) => {
      formacao.style.color = corCorRotinaNormal;
    });

    corRotinaInstituicao.forEach((formacao) => {
      formacao.style.color = corCorRotinaInstituicao;
    });

    return diurno = true;

  }
}

// Efeito de digitação
function digitar(elemento, texto, velocidade) {
  let i = 0;
  const intervalo = setInterval(() => {
    if (i < texto.length) {
      // Verifica se é a sequência "<br>" para inserir uma quebra de linha
      if (texto.charAt(i) === "<" && texto.slice(i, i+4) === "<br>") {
        elemento.innerHTML += "<br>"; // Adiciona a quebra de linha real
        i += 4; // Pula o "<br>" para evitar que o texto continue a ser escrito
      } else {
        elemento.innerHTML += texto.charAt(i); // Continua a digitar o texto
        i++;
      }
    } else {
      clearInterval(intervalo); // Para o intervalo quando o texto terminar
    }
  }, velocidade);
}
const elemento = titulo;
const texto = "Desenvolvedor<br>Front End &<br>UX/UI Designer";
digitar(elemento, texto, 100);


//rolar a pagina suavemente ao clicar nos botoes
document.querySelectorAll('a.header-button').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    const startPosition = window.scrollY; // Posição atual da página
    const targetPosition = targetElement.offsetTop; // Posição da seção alvo
    const distance = targetPosition - startPosition; // Distância entre a posição atual e o destino
    const duration = 1000; // Duração da rolagem (em milissegundos)
    let startTime = null;

    // Função de animação para rolar suavemente
    function scrollStep(currentTime) {
      if (startTime === null) startTime = currentTime;
      const progress = currentTime - startTime; // Tempo decorrido

      // Calculando a quantidade de rolagem com base no tempo decorrido
      const scrollAmount = Math.min(progress / duration, 1) * distance;

      window.scrollTo(0, startPosition + scrollAmount); // Realiza a rolagem

      // Se ainda não atingiu o destino, continuar o movimento
      if (progress < duration) {
        requestAnimationFrame(scrollStep);
      } else {
        window.scrollTo(0, targetPosition); // Garantir que a posição final seja exata
      }
    }

    requestAnimationFrame(scrollStep); // Inicia a animação de rolagem
  });
});

// botao voltar no final da pagina e voltar ao topo

const scrollToTopButton = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  // Verifica se o usuário chegou ao final da página
  if (document.documentElement.scrollHeight - window.innerHeight <= window.scrollY) {
    scrollToTopButton.style.display = "block"; // Exibe o botão
  } else {
    scrollToTopButton.style.display = "none"; // Oculta o botão
  }
});

scrollToTopButton.addEventListener("click", () => {
  // Calcula a quantidade de rolagem necessária
  let startPosition = window.scrollY;
  let targetPosition = 0;
  let distance = startPosition - targetPosition;
  let duration = 1000; // Tempo de animação (em ms)
  let startTime = null;

  function scrollStep(currentTime) {
    if (startTime === null) startTime = currentTime;
    const progress = currentTime - startTime; // Tempo decorrido

    // Calculando a quantidade de rolagem com base no tempo decorrido
    const scrollAmount = Math.min(progress / duration, 1) * distance;

    window.scrollTo(0, startPosition - scrollAmount); // Realiza a rolagem

    // Se ainda não atingiu o destino, continuar o movimento
    if (progress < duration) {
      requestAnimationFrame(scrollStep);
    } else {
      window.scrollTo(0, targetPosition); // Garantir que a posição final seja exata
    }
  }

  requestAnimationFrame(scrollStep); // Inicia a animação de rolagem
});



