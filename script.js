// Alternador de Modo Escuro / Claro
function alternarTema() {
  document.body.classList.toggle('dark-mode');
}

// Botão de Voltar ao Topo
const btnTopo = document.getElementById('btnTopo');

if (btnTopo) {
  window.onscroll = function () {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
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