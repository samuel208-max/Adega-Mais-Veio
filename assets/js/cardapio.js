const ul = document.getElementById('visualizacaoCardapio')
const bebidas = document.getElementById('bebidas')
const comidas = document.getElementById('comidas')
const combos = document.getElementById('combos')
const tudo = document.getElementById('tudo')

function atualizarCardapio() {
    ul.innerHTML = ""
    produtos.forEach((produto) => {
        const li = document.createElement('li')
        const div = document.createElement('div')
        div.className = "boxProduto"

        // const divIMG = document.createElement('div')
        // divIMG.style.backgroundImage = produto.imagem

        const img = document.createElement('img')
        img.src = produto.imagem
        img.alt = produto.nome

        const divTexto = document.createElement('div')
        divTexto.className = "divTexto"

        const nome = document.createElement('h3')
        nome.textContent = produto.nome

        const descricao = document.createElement('p')
        descricao.textContent = produto.descricao

        const preco = document.createElement('h4')
        preco.textContent = `R$ ${produto.preco}`

        const button = document.createElement('button')
        button.textContent = "Adicionar ao Carrinho"
        button.className = "botaoAdicionar"

        div.appendChild(img)
        divTexto.append(nome)
        divTexto.append(descricao)
        divTexto.append(preco)
        div.appendChild(divTexto)
        div.appendChild(button)
        li.appendChild(div)
        ul.appendChild(li)

        button.addEventListener('click', () => {
            const existente = produtosCarrinho.find(item => item.nome === produto.nome)
            if (existente) {
                existente.quantidade += 1
            } else {
                produtosCarrinho.push({ ...produto, quantidade: 1 })
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

            localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho))

            atualizarCarrinho()
        })
    })
}

function filtrarPorCategoria(categoria) {
    ul.innerHTML = ""; // limpa os itens

    const filtrados = produtos.filter(produto => produto.categoria === categoria);

    filtrados.forEach((produto) => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        div.className = "boxProduto";

        const img = document.createElement('img');
        img.src = produto.imagem;
        img.alt = produto.nome;

        const divTexto = document.createElement('div');
        divTexto.className = "divTexto";

        const nome = document.createElement('h3');
        nome.textContent = produto.nome;

        const descricao = document.createElement('p');
        descricao.textContent = produto.descricao;

        const preco = document.createElement('h4');
        preco.textContent = `R$ ${produto.preco}`;

        const button = document.createElement('button');
        button.textContent = "Adicionar ao Carrinho";
        button.className = "botaoAdicionar";

        div.appendChild(img);
        divTexto.append(nome, descricao, preco);
        div.appendChild(divTexto);
        div.appendChild(button);
        li.appendChild(div);
        ul.appendChild(li);

        button.addEventListener('click', () => {
            const existente = produtosCarrinho.find(item => item.nome === produto.nome)
            if (existente) {
                existente.quantidade += 1
            } else {
                produtosCarrinho.push({ ...produto, quantidade: 1 })
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

            localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho))

            atualizarCarrinho()
        })
    });
}

bebidas.addEventListener('click', () => {
    filtrarPorCategoria('bebida');
});

comidas.addEventListener('click', () => {
    filtrarPorCategoria('comida');
});

combos.addEventListener('click', () => {
    filtrarPorCategoria('combo');
});

tudo.addEventListener('click', atualizarCardapio);

atualizarCardapio()