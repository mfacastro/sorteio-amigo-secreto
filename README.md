# Amigo Secreto - Sistema de Sorteio

Bem-vindo ao projeto *Amigo Secreto*, uma aplicação web desenvolvida para facilitar a organização de sorteios de amigo secreto. Este sistema permite adicionar nomes de participantes, exibir uma lista centralizada, realizar o sorteio de um nome aleatoriamente e reiniciar o processo quando necessário.

## Sobre o Projeto

O *Amigo Secreto* é uma aplicação baseada em HTML, CSS e JavaScript, projetada para ser responsiva e acessível. Seu objetivo principal é oferecer uma ferramenta prática para a gestão de sorteios, adequada para eventos sociais ou profissionais.

### Funcionalidades Principais
- *Adicionar nomes*: Insira os nomes dos participantes por meio de um campo de texto.
- *Lista centralizada*: Visualize os nomes em uma lista alinhada ao centro da página.
- *Sortear*: Selecione um nome aleatoriamente usando o botão "Sortear amigo".
- *Reiniciar*: Limpe a lista e reinicie o processo com o botão "Reiniciar", habilitado após o primeiro nome ser adicionado.
- *Acessibilidade*: Inclui atributos ARIA para suporte a leitores de tela.

## Como Funciona

### Estrutura do Projeto
O projeto é composto pelos seguintes arquivos:
- `index.html`: Contém a estrutura da página, incluindo o formulário, a lista de participantes e os botões.
- `style.css`: Define o estilo visual, com cores personalizadas, tipografia e layout responsivo.
- `app.js`: Implementa a lógica para adicionar nomes, sortear e reiniciar.
- `assets/`: Diretório com imagens, como o ícone do botão "Sortear amigo" (`play_circle_outline.png`) e a imagem do banner (`amigo-secreto.png`).

### Passos para Usar
1. Abra o arquivo `index.html` em um navegador web.
2. Digite o nome de um participante no campo de texto e clique em *Adicionar* (ou pressione *Enter*).
3. Repita o processo para adicionar mais nomes, que serão exibidos em uma lista centralizada.
4. Clique em *Sortear amigo* para escolher um nome aleatoriamente. O resultado será exibido abaixo da lista.
5. Para reiniciar, clique em *Reiniciar* (disponível após adicionar pelo menos um nome).

## Licença

Este projeto é de uso livre para fins pessoais ou educacionais. Modificações e compartilhamentos são permitidos.

Feito por Manoel Castro a partir de materiais fornecidos pela Alura e com auxílio da Inteligência Artificial Grok para fins didáticos.
