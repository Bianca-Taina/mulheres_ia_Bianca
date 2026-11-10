// Espera o documento carregar
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-toggle');
    
    // Verifica se o usuário já tinha uma preferência salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeBtn) themeBtn.textContent = '☀️ Modo Claro';
    }

    // Função para alternar o tema
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            const isDark = document.body.classList.contains('dark-mode');
            themeBtn.textContent = isDark ? '☀️ Modo Claro' : '🌙 Modo Escuro';
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }
});