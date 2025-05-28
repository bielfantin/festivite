// This file contains the JavaScript code for interactivity in the invitation project.

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.invite-form');
    const gerarBtn = document.querySelector('.btn-float');

    // Impede o envio padrão do formulário
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });

    // Só envia quando clicar no botão "Gerar convite" e tudo estiver preenchido
    gerarBtn.addEventListener('click', function (e) {
        // Aqui você faz a validação dos campos obrigatórios
        const titulo = document.getElementById('titulo').value.trim();
        // Adicione outras validações conforme necessário

        if (titulo /* && outros campos obrigatórios */) {
            form.submit(); // Envia o formulário
        } else {
            // Mostre mensagem de erro ou destaque campos obrigatórios
            alert('Preencha todos os campos obrigatórios!');
        }
    });

    // Seleção de tema
    const themeButtons = document.querySelectorAll('.themes-grid .theme');
    themeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            themeButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Seleção de cor principal
    const colorButtons = document.querySelectorAll('.color-picker .color');
    colorButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            colorButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Seleção de tipo (Presencial/Online)
    const tipoButtons = document.querySelectorAll('.invite-form button[type="button"]');
    tipoButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            tipoButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
});