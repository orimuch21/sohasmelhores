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