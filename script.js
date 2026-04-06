document.addEventListener("DOMContentLoaded", function () {

  const popup = document.getElementById("popup");
  const fecharBtn = document.querySelector(".fechar");
  const recusarBtn = document.querySelector(".recusar");

  let jaAbriu = false; // trava

  function abrirPopup() {
    if (jaAbriu) return; // impede abrir 2x
    popup.style.display = "flex";
    jaAbriu = true;
  }

  function fecharPopup() {
    popup.style.display = "none";
  }

  // eventos
  if (fecharBtn) fecharBtn.addEventListener("click", fecharPopup);
  if (recusarBtn) recusarBtn.addEventListener("click", fecharPopup);

  // abre só uma vez
  setTimeout(abrirPopup, 2000);

  // clicar fora fecha
  popup.addEventListener("click", function(e) {
    if (e.target === popup) {
      fecharPopup();
    }
  });

});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

document.querySelectorAll('.carrossel-container').forEach(container => {

  const carrossel = container.querySelector('.carrossel');
  const btnEsquerda = container.querySelector('.esquerda');
  const btnDireita = container.querySelector('.direita');

  btnDireita.addEventListener('click', () => {
    carrossel.scrollBy({ left: 300, behavior: 'smooth' });
  });

  btnEsquerda.addEventListener('click', () => {
    carrossel.scrollBy({ left: -300, behavior: 'smooth' });
  });

});

function toggleCard(card) {
  // fecha outros cards
  document.querySelectorAll('.card').forEach(c => {
    if (c !== card) c.classList.remove('ativo');
  });

  // abre ou fecha o clicado
  card.classList.toggle('ativo');
}

//CORPUS CHRIST
const eventos = {
  chateau: {
    titulo: "Chateau",
    imagem: "images/corpus-christ/chateau.png",
    data: "📅 04 a 06 Junho • Campos do Jordão",
    dias: {
      qui: {
        nome: "Dia 04, Quinta",
        lineup: "🎤 NATTAN (show principal) • Juninho Campos 🎧 Bruna Brambila • Graeff",
        horario: "18h às 06h",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Chateau%20no%20Pix%20na%20Quinta."
      },
      sex: {
        nome: "Dia 05, Sexta",
        lineup: "🎶 Syon Trio 🎧 DJ Japa NK • Liu • Graeff",
        horario: "20h às 08h",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Chateau%20no%20Pix%20na%20Sexta."
      },
      sb: {
        nome: "Dia 06, Sábado",
        lineup: "🎧 Dubdogz • Cat Dealers • Ashibah • RoofTime • Armando A. • Edu Poppo",
        horario: "20h às 08h",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Chateau%20no%20Pix%20no%20Sábado."
      },
    },
  },

  opening: {
    titulo: "Winter Opening",
    imagem: "images/corpus-christ/winter-opening.png",
    data: "📅 05 e 06 Junho • Campos do Jordão",
    dias: {
      sex: {
        nome: "Dia 05, Sexta",
        lineup: " ",
        horario: " ",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Winter%20Opening%20no%20Pix%20na%20Sexta."
      },
      sab: {
        nome: "Dia 06, Sábado",
        lineup: " ",
        horario: " ",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Winter%20Opening%20no%20Pix%20no%20Sábado."
      }, 
    },
  },
  sessions: {
    titulo: "Winter Sessions",
    imagem: "images/corpus-christ/winter-sessions.jpeg",
    data: "📅 04 a 06 Junho • Campos do Jordão",
    dias: {
      qui: {
        nome: "Dia 04, Quinta",
        lineup: " ",
        horario: " ",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Winter%20Sessions%20no%20Pix%20na%20Quinta."
      },
      sex: {
        nome: "Dia 05, Sexta",
        lineup: "🎶 Syon Trio 🎧 DJ Japa NK • Liu • Graeff",
        horario: "20h às 08h",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Winter%20Sessions%20no%20Pix%20na%20Sexta."
      },
      sb: {
        nome: "Dia 06, Sábado",
        lineup: "🎧 Dubdogz • Cat Dealers • Ashibah • RoofTime • Armando A. • Edu Poppo",
        horario: "20h às 08h",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Winter%20Sessions%20no%20Pix%20no%20Sábado."
      },
    },
  },
   house: {
    titulo: "House Winter",
    imagem: "images/corpus-christ/house-winter.png",
    data: "📅 04 Junho • Campos do Jordão",
    dias: {
      unico: {
        nome: "Único",
        lineup: "Line-up especial",
        horario: "22h às 07h",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20House%20Winter%20no%20Pix%20na%20Quinta."
      },
    },
  },
  baile: {
    titulo: "Baile in Campos",
    imagem: "images/corpus-christ/baile-in-campos.png",
    data: "📅 05 Junho • Campos do Jordão",
    dias: {
      unico: {
        nome: "Único",
        lineup: "Line-up especial",
        horario: "22h às 07h",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%Baile%20in%20Campos%20no%20Pix%20na%20Sexta."
      },
    },
  },
  soul: {
    titulo: "Soul Campos",
    imagem: "images/corpus-christ/soul-campos.png",
    data: "📅 06 Junho • Campos do Jordão",
    dias: {
      unico: {
        nome: "Único",
        lineup: "Veigh + em breve",
        horario: "22h às 07h",
        ingresso: "http://blacktag.com.br/eventos/31642/soul-campos?aff=sohasmelhores",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Baile%20in%20Campos%20no%20Pix%20na%20."
      },
    },
  },
  warung: {
    titulo: "Warung",
    imagem: "images/corpus-christ/warung.png",
    data: "📅 05 Junho • Campos do Jordão",
    dias: {
      unico: {
        nome: "Único",
        lineup: " ",
        horario: "22h às 07h",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Warung%20no%20Pix%20na%20."
      }
    }
  },
  lounge: {
    titulo: "Winter Lounge",
    imagem: "images/corpus-christ/winter-lounge.png",
    data: "📅 04 a 06 Junho • Campos do Jordão",
    dias: {
      qui: {
        nome: "Dia 04, Quinta",
        lineup: " ",
        horario: "",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Chateau%20no%20Pix%20na%20Quinta."
      },
      sex: {
        nome: "Dia 05, Sexta",
        lineup: " ",
        horario: "",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Chateau%20no%20Pix%20na%20Sexta."
      },
      sb: {
        nome: "Dia 06, Sábado",
        lineup: " ",
        horario: " ",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Chateau%20no%20Pix%20no%20Sábado."
      },
    },
  },
  festival: {
    titulo: "Winter Festival",
    imagem: "images/corpus-christ/winter-festival.png",
    data: "📅 05 e 06 Junho • Campos do Jordão",
    dias: {
      sex: {
        nome: "Dia 05, Sexta",
        lineup: " Edson e Hudson (BEEF TOUR) ",
        horario: " ",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Winter%20Festival%20no%20Pix%20na%20Sexta."
      },
      sab: {
        nome: "Dia 06, Sábado",
        lineup: " Belo + Pixote ",
        horario: " ",
        ingresso: "#",
        whatsapp: "https://wa.me/5513991603553?text=Quero%20Winter%20Festival%20no%20Pix%20no%20Sábado."
      }, 
    },
  },
};

function abrirEvento(id) {
  const evento = eventos[id];

  document.getElementById("modal").style.display = "block";
  document.getElementById("titulo").innerText = evento.titulo;
  document.getElementById("data").innerText = evento.data;

  // imagem dinâmica (opcional)
  const img = document.getElementById("imagemEvento");
  if (img) {
  img.src = evento.imagem || "";
  img.onerror = () => img.style.display = "none";
}

  const tabs = document.getElementById("tabs");
  const conteudo = document.getElementById("conteudo");

  tabs.innerHTML = "";
  conteudo.innerHTML = "";

  let primeiro = true;

  Object.keys(evento.dias).forEach((key) => {
    const dia = evento.dias[key];

    // botão da aba
    const btn = document.createElement("button");
    btn.innerText = dia.nome;
    btn.onclick = (e) => mostrarDia(key, evento, e);
    tabs.appendChild(btn);

    // conteúdo do dia
    const div = document.createElement("div");
    div.id = key;
    div.classList.add("dia");

    if (primeiro) {
      div.classList.add("ativo");
      btn.classList.add("ativo");
      atualizarLinks(dia);
    }

    div.innerHTML = `
      <p><strong>${dia.nome}</strong></p>
      ${dia.lineup ? `<p>${dia.lineup}</p>` : ""}
      ${dia.horario ? `<p>${dia.horario}</p>` : ""}
    `;

    conteudo.appendChild(div);

    primeiro = false;
  });
}

// atualiza os botões de compra
function atualizarLinks(dia) {
  document.getElementById("linkIngresso").href = dia.ingresso || "#";
  document.getElementById("linkWhatsapp").href = dia.whatsapp || "#";
}

// troca de dia
function mostrarDia(id, evento, e) {
  document.querySelectorAll(".dia").forEach(d => d.classList.remove("ativo"));
  document.getElementById(id).classList.add("ativo");

  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("ativo"));
  e.target.classList.add("ativo");

  atualizarLinks(evento.dias[id]);
}

// fechar modal
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

// fechar clicando fora
window.onclick = function(e) {
  const modal = document.getElementById("modal");
  if (e.target === modal) {
    fecharModal();
  }
};

//PARCEIROS

function toggleParceiro(card) {
  document.querySelectorAll('.card-parceiro').forEach(c => {
    if (c !== card) c.classList.remove('ativo');
  });

  card.classList.toggle('ativo');
}

// FAQ
document.addEventListener("DOMContentLoaded", function () {

  const faqButtons = document.querySelectorAll(".faq-box button");

  faqButtons.forEach(button => {
    button.addEventListener("click", function () {

      const box = this.parentElement;

      // fecha outros
      document.querySelectorAll(".faq-box").forEach(item => {
        if (item !== box) {
          item.classList.remove("ativo");
        }
      });

      // abre/fecha
      box.classList.toggle("ativo");

    });
  });

});