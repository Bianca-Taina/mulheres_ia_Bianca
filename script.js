// 1. Alternador de Modo Escuro (Dark Mode)
function alternarTema() {
  document.body.classList.toggle('dark-mode');
}

// 2. Filtro de pesquisa na Página Inicial
function filtrarCientistas() {
  const campoBusca = document.getElementById('campoBusca');
  if (!campoBusca) return;

  const termo = campoBusca.value.toLowerCase();
  const cards = document.querySelectorAll('#gridMulheres .card-link');

  cards.forEach(card => {
    const nome = card.textContent.toLowerCase();
    if (nome.includes(termo)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// 3. Botão de Voltar ao Topo
const btnTopo = document.getElementById('btnTopo');

if (btnTopo) {
  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btnTopo.style.display = 'block';
    } else {
      btnTopo.style.display = 'none';
    }
  };

  btnTopo.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}