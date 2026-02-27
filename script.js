// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {
    
    // === FUNCIONALIDADE: MODO ESCURO ===
    const botaoModoEscuro = document.getElementById('modo-escuro');
    const body = document.body;
    
    // Verifica se há preferência salva no localStorage
    const modoEscuroSalvo = localStorage.getItem('modoEscuro');
    if (modoEscuroSalvo === 'true') {
        body.classList.add('dark-mode');
        botaoModoEscuro.textContent = '☀️ Alternar Modo Claro';
    }
    
    // Alterna o modo escuro quando o botão é clicado
    botaoModoEscuro.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Verifica se o modo escuro está ativo
        const modoEscuroAtivo = body.classList.contains('dark-mode');
        
        // Atualiza o texto do botão
        if (modoEscuroAtivo) {
            botaoModoEscuro.textContent = '☀️ Alternar Modo Claro';
        } else {
            botaoModoEscuro.textContent = '🌓 Alternar Modo Escuro';
        }
        
        // Salva a preferência no localStorage
        localStorage.setItem('modoEscuro', modoEscuroAtivo);
    });
    
    // === FUNCIONALIDADE: IMPRIMIR ===
    const botaoImprimir = document.getElementById('imprimir');
    
    botaoImprimir.addEventListener('click', function() {
        window.print();
    });
    
    // === FUNCIONALIDADE: ANO ATUAL NO RODAPÉ ===
    const anoAtual = new Date().getFullYear();
    const copyright = document.querySelector('footer p');
    if (copyright) {
        copyright.innerHTML = `&copy; ${anoAtual} Rafael Assis Santos - Todos os direitos reservados`;
    }
    
    // === FUNCIONALIDADE: MENSAGEM DE BOAS-VINDAS (opcional) ===
    console.log('Currículo de Rafael Assis Santos - Operador de Máquinas Agrícolas carregado!');
});