// 1. Contador Persistente
let contador = localStorage.getItem('contador') || 0;
document.getElementById('contador').textContent = contador;
function alterarContador(valor) {
    contador = parseInt(contador) + valor;
    localStorage.setItem('contador', contador);
    document.getElementById('contador').textContent = contador;
}

// 2. Texto Salvo
const textarea = document.getElementById('texto');
textarea.value = localStorage.getItem('texto') || '';
textarea.addEventListener('input', () => {
    localStorage.setItem('texto', textarea.value);
});

// 3. Checkbox Persistente
const checkboxes = document.querySelectorAll('#lista-tarefas input[type=checkbox]');
checkboxes.forEach(checkbox => {
    checkbox.checked = localStorage.getItem(checkbox.id) === 'true';
    checkbox.addEventListener('change', () => {
        localStorage.setItem(checkbox.id, checkbox.checked);
    });
});

// 4. Nome do Usuário
let nome = localStorage.getItem('nome');
if (!nome) {
    nome = prompt('Qual é o seu nome?');
    localStorage.setItem('nome', nome);
}
document.getElementById('boas-vindas').textContent = `Olá, ${nome}!`;

// 5. Escolha de Cor
const corSalva = localStorage.getItem('cor-fundo');
if (corSalva) document.body.style.backgroundColor = corSalva;
function mudarCor(cor) {
    document.body.style.backgroundColor = cor;
    localStorage.setItem('cor-fundo', cor);
}

// 6. Modo Noturno
if (localStorage.getItem('modo-escuro') === 'true') {
    document.body.classList.add('dark');
}
function toggleModoEscuro() {
    document.body.classList.toggle('dark');
    localStorage.setItem('modo-escuro', document.body.classList.contains('dark'));
}

// 7. Visita Diária
const hoje = new Date().toLocaleDateString();
const ultima = localStorage.getItem('ultima-visita');
const msgVisita = document.getElementById('msg-visita');
if (ultima === hoje) {
    msgVisita.textContent = 'Bem-vindo de volta!';
} else if (ultima) {
    msgVisita.textContent = 'Saudades de você!';
}
localStorage.setItem('ultima-visita', hoje);

// 8. Última Visita
const ultimaHora = localStorage.getItem('ultima-hora');
if (ultimaHora) {
    document.getElementById('ultima-visita').textContent = `Última visita: ${ultimaHora}`;
}
const agora = new Date();
const dataHora = agora.toLocaleDateString() + ' ' + agora.toLocaleTimeString();
localStorage.setItem('ultima-hora', dataHora);

// 9. Mensagem de Boas-vindas Personalizada
const mensagemSalva = localStorage.getItem('mensagem-bemvindo');
if (mensagemSalva) {
    document.getElementById('boas-vindas').textContent = mensagemSalva;
}
function salvarMensagem() {
    const msg = document.getElementById('mensagem').value;
    localStorage.setItem('mensagem-bemvindo', msg);
    document.getElementById('boas-vindas').textContent = msg;
}

// 10. Número Secreto
if (!localStorage.getItem('numero-secreto')) {
    localStorage.setItem('numero-secreto', Math.floor(Math.random() * 10) + 1);
}
function adivinhar() {
    const num = parseInt(document.getElementById('palpite').value);
    const secreto = parseInt(localStorage.getItem('numero-secreto'));
    const resultado = document.getElementById('resultado');
    if (num === secreto) {
        resultado.textContent = "Parabéns! Você acertou!";
        localStorage.removeItem('numero-secreto');
    } else {
        resultado.textContent = "Tente novamente!";
    }
}
