// Atualiza automaticamente o ano no rodapé
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Toggle Menu Universal =====
document.querySelectorAll('.menuToggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const targetId = toggle.getAttribute('data-target');
    const menu = document.getElementById(targetId);

    toggle.classList.toggle('open');
    menu.classList.toggle('active');
  });
});
