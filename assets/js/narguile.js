const visualizacaoAcessorios = document.getElementById('visualizacaoAcessorios');
const todos = document.getElementById('todos');
const essencias = document.getElementById('essencias');
const carvoes = document.getElementById('carvoes');
const diversos = document.getElementById('diversos');
const combosNarguile = document.getElementById('combosNarguile');
const nomeCategoria = document.getElementById('nomeCategoria')

function atualizarAcessorios() {
    nomeCategoria.innerHTML = "Acessórios"

    visualizacaoAcessorios.innerHTML = ""; // limpa a lista antes de adicionar

    narguileAcessorios.forEach((acessorio) => {
        const li = document.createElement('li');
        li.className = "liAcessorio";

        const div = document.createElement('div');
        div.className = "boxProduto";

        const img = document.createElement('img');
        img.src = acessorio.imagem;
        img.alt = acessorio.nome;

        const divTexto = document.createElement('div');
        divTexto.className = "divTexto";

        const nome = document.createElement('h3');
        nome.textContent = acessorio.nome;

        const descricao = document.createElement('p');
        descricao.textContent = acessorio.descricao;

        const preco = document.createElement('h4');
        preco.textContent = `R$ ${acessorio.preco.toFixed(2)}`;

        const button = document.createElement('button');
        button.textContent = "Adicionar ao Carrinho";
        button.className = "botaoAdicionar";

        divTexto.append(nome, descricao, preco);
        div.appendChild(img);
        div.appendChild(divTexto);
        div.appendChild(button);
        li.appendChild(div);
        visualizacaoAcessorios.appendChild(li);

        button.addEventListener('click', () => {
            const existente = produtosCarrinho.find(item => item.nome === acessorio.nome);
            if (existente) {
                existente.quantidade += 1;
            } else {
                produtosCarrinho.push({ ...acessorio, quantidade: 1 });
            }

            const toastAdicionado = document.createElement('div')
            const adicionadoTexto = document.createElement('p')
            adicionadoTexto.textContent = "Produto adicionado no carrinho!"
            toastAdicionado.className = "toastAdicionado"
            toastAdicionado.appendChild(adicionadoTexto)
            document.body.appendChild(toastAdicionado)

            setTimeout(() => {
                toastAdicionado.remove()
            }, 3000)

            localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));
            atualizarCarrinho();
        });
    });
}

function filtrarPorCategoria(categoria) {
    nomeCategoria.innerHTML = categoria.charAt(0).toUpperCase() + categoria.slice(1);

    visualizacaoAcessorios.innerHTML = ""

    const filtrados = narguileAcessorios.filter(produto => produto.categoria === categoria);

    filtrados.forEach((acessorio) => {
        const li = document.createElement('li');
        li.className = "liAcessorio";

        const div = document.createElement('div');
        div.className = "boxProduto";

        const img = document.createElement('img');
        img.src = acessorio.imagem;
        img.alt = acessorio.nome;

        const divTexto = document.createElement('div');
        divTexto.className = "divTexto";

        const nome = document.createElement('h3');
        nome.textContent = acessorio.nome;

        const descricao = document.createElement('p');
        descricao.textContent = acessorio.descricao;

        const preco = document.createElement('h4');
        preco.textContent = `R$ ${acessorio.preco.toFixed(2)}`;

        const button = document.createElement('button');
        button.textContent = "Adicionar ao Carrinho";
        button.className = "botaoAdicionar";

        divTexto.append(nome, descricao, preco);
        div.appendChild(img);
        div.appendChild(divTexto);
        div.appendChild(button);
        li.appendChild(div);
        visualizacaoAcessorios.appendChild(li);

        button.addEventListener('click', () => {
            const existente = produtosCarrinho.find(item => item.nome === acessorio.nome);
            if (existente) {
                existente.quantidade += 1;
            } else {
                produtosCarrinho.push({ ...acessorio, quantidade: 1 });
            }

            const toastAdicionado = document.createElement('div')
            const adicionadoTexto = document.createElement('p')
            adicionadoTexto.textContent = "Produto adicionado no carrinho!"
            toastAdicionado.className = "toastAdicionado"
            toastAdicionado.appendChild(adicionadoTexto)
            document.body.appendChild(toastAdicionado)

            setTimeout(() => {
                toastAdicionado.remove()
            }, 3000)

            localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));
            atualizarCarrinho();
        });
    })
}

essencias.addEventListener('click', () => {
    filtrarPorCategoria('essencia');
    ativarBotaoClicado(essencias)
});

carvoes.addEventListener('click', () => {
    filtrarPorCategoria('carvao');
    ativarBotaoClicado(carvoes)
});

diversos.addEventListener('click', () => {
    filtrarPorCategoria('outros');
    ativarBotaoClicado(diversos)
});

combosNarguile.addEventListener('click', () => {
    filtrarPorCategoria('combo');
    ativarBotaoClicado(combosNarguile)
});

todos.addEventListener('click', () => {
    atualizarAcessorios()
    ativarBotaoClicado(todos)
})

atualizarAcessorios()
todos.classList.add('ativo');


const botoesCategoria = [todos, essencias, carvoes, diversos, combosNarguile];

function ativarBotaoClicado(botaoAtivo) {
    botoesCategoria.forEach(botao => {
        botao.classList.remove('ativo');
    });
    botaoAtivo.classList.add('ativo');
}



// ================================ SECTION "alugarNarguiles" ======================
const visualizacaoNarguiles = document.getElementById('visualizacaoNarguiles')

function atualizarNarguiles() {
    visualizacaoNarguiles.innerHTML = ""

    narguilesAluguel.forEach((narguile) => {
        const liNarguile = document.createElement('li')

        const div = document.createElement('div');
        div.className = "boxProduto";

        const img = document.createElement('img');
        img.src = narguile.imagem;
        img.alt = narguile.nome;

        const divTexto = document.createElement('div');
        divTexto.className = "divTexto";

        const nome = document.createElement('h3');
        nome.textContent = narguile.nome;

        const descricao = document.createElement('p');
        descricao.textContent = narguile.descricao;

        const preco = document.createElement('h4');
        preco.textContent = `R$ ${narguile.preco.toFixed(2)}`;

        const button = document.createElement('button');
        button.textContent = "Agendar";
        button.className = "botaoAdicionar";

        divTexto.append(nome, descricao, preco);
        div.appendChild(img);
        div.appendChild(divTexto);
        div.appendChild(button);
        liNarguile.appendChild(div);
        visualizacaoNarguiles.appendChild(liNarguile);

        button.addEventListener('click', () => {
            mostrarFormularioAgendamento(narguile);
        });
    })
}

atualizarNarguiles()

function mostrarFormularioAgendamento(narguile) {
    // Cria o fundo escuro
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Cria o formulário
    const formContainer = document.createElement('div');
    formContainer.className = 'form-agendamento';

    formContainer.innerHTML = `
        <h2>Agendar Narguilé: ${narguile.nome}</h2>
        <form id="formAgendamento">
            <label>Nome:</label>
            <input type="text" name="nome" required>

            <label>Telefone:</label>
            <input type="tel" name="telefone" required>

            <label>Data:</label>
            <input type="date" name="data" required>

            <label>Horário:</label>
            <input type="time" name="hora" required>

            <label>Observações:</label>
            <textarea name="observacoes"></textarea>

            <button type="submit">Confirmar Agendamento</button>
            <button type="button" id="cancelarAgendamento">Cancelar</button>
        </form>
    `;

    // Adiciona no body
    overlay.appendChild(formContainer);
    document.body.appendChild(overlay);

    // Cancelar agendamento
    document.getElementById('cancelarAgendamento').addEventListener('click', () => {
        overlay.remove();
    });

    // Enviar agendamento
    document.getElementById('formAgendamento').addEventListener('submit', (e) => {
        e.preventDefault();

        const dados = Object.fromEntries(new FormData(e.target));

        console.log("Agendamento:", {
            narguile: narguile.nome,
            ...dados
        });

        overlay.remove();

        // Aqui você pode salvar no localStorage ou exibir um toast
        const toastAgendamento = document.createElement('div')
        toastAgendamento.className = "overlay"

        const divConfirmacao = document.createElement('div')
        divConfirmacao.className = "divConfirmacao"

        const confirmacaoAgendamento = document.createElement('h3')
        confirmacaoAgendamento.textContent = "Agendamento realizado com sucesso!"

        const buttonOk = document.createElement('button')
        buttonOk.textContent = "Ok!"

        divConfirmacao.appendChild(confirmacaoAgendamento)
        divConfirmacao.appendChild(buttonOk)
        toastAgendamento.appendChild(divConfirmacao)
        document.body.appendChild(toastAgendamento)

        buttonOk.addEventListener('click', () => {
            toastAgendamento.remove()
        })

    });
}
