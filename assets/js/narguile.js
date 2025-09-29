const visualizacaoAcessorios = document.getElementById('visualizacaoAcessorios');
const todos = document.getElementById('todos');
const essencias = document.getElementById('essencias');
const carvoes = document.getElementById('carvoes');
const diversos = document.getElementById('diversos');
const combosNarguile = document.getElementById('combosNarguile');

function atualizarAcessorios() {
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
});

carvoes.addEventListener('click', () => {
    filtrarPorCategoria('carvao');
});

diversos.addEventListener('click', () => {
    filtrarPorCategoria('outros');
});

combosNarguile.addEventListener('click', () => {
    filtrarPorCategoria('combo');
});

todos.addEventListener('click', () => {
    atualizarAcessorios()
})

atualizarAcessorios()


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
    })
}

atualizarNarguiles()