// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();
    const botaoReiniciar = document.getElementById('reiniciar');

    if (nome !== '') {
        amigos.push(nome);
        atualizarLista();
        input.value = ''; // Limpa o campo
        input.focus(); // Mantém o foco no input
        botaoReiniciar.disabled = false; // Habilita o botão "Reiniciar" ao adicionar o primeiro nome
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista atual

    amigos.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        lista.appendChild(li);
    });
}

// Função para sortear um amigo
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.textContent = 'Adicione pelo menos um amigo para sortear!';
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    resultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
}

// Função para reiniciar o sorteio
function reiniciarSorteio() {
    const botaoReiniciar = document.getElementById('reiniciar');
    const lista = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');
    
    amigos = []; // Limpa o array
    lista.innerHTML = ''; // Limpa a lista visual
    resultado.textContent = ''; // Limpa o resultado
    botaoReiniciar.disabled = true; // Desabilita o botão novamente
    document.getElementById('amigo').focus(); // Volta o foco para o input
}

// Adicionar amigo ao pressionar Enter
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});