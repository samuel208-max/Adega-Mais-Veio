const abrirCarrinho = document.getElementById('abrirCarrinho')
const carrinho = document.getElementById('carrinho')
const ulCarrinho = document.getElementById('listaCarrinho')
const totalCarrinho = document.getElementById('totalCarrinho')
const fecharCarrinho = document.getElementById('fechar-carrinho')

let produtosCarrinho = JSON.parse(localStorage.getItem('carrinho')) || []

abrirCarrinho.addEventListener('click', () => {
    carrinho.style.display = "block"
})

function atualizarCarrinho() {
    ulCarrinho.innerHTML = ''
    let total = 0;

    produtosCarrinho.forEach((produto, index) => {
        const li_carrinho = document.createElement('li')
        li_carrinho.className = "li_carrinho"

        const divItem = document.createElement('div')
        divItem.className = "divItem"

        const nomeItem = document.createElement('h3')
        nomeItem.textContent = produto.nome

        const precoItem = document.createElement('h4')
        precoItem.textContent = `R$${(produto.preco * produto.quantidade).toFixed(2)}`

        const divQuantidade = document.createElement('div')
        divQuantidade.className = "divQuantidade"

        const removerQuantidade = document.createElement('p')
        removerQuantidade.className = "removerQuantidade"
        removerQuantidade.textContent = "-"

        removerQuantidade.addEventListener('click', () => {
            produto.quantidade -= 1

            if (produto.quantidade <= 0) {
                produtosCarrinho.splice(index, 1); // remove do carrinho
            }

            const toastRemovido = document.createElement('div')
            const removidoTexto = document.createElement('p')
            removidoTexto.textContent = "Um produto removido do carrinho!"
            removidoTexto.style.color = "red"
            toastRemovido.className = "toastRemovido"
            toastRemovido.appendChild(removidoTexto)
            document.body.appendChild(toastRemovido)

            setTimeout(() => {
                toastRemovido.remove()
            }, 3000)

            localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho));
            atualizarCarrinho();
        })

        const quantidade = document.createElement('p')
        quantidade.className = "quantidade"
        quantidade.textContent = produto.quantidade

        const adicionarQuantidade = document.createElement('p')
        adicionarQuantidade.className = "adicionarQuantidade"
        adicionarQuantidade.textContent = "+"

        adicionarQuantidade.addEventListener('click', () => {
            produto.quantidade += 1;

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

        total += produto.preco * produto.quantidade

        divItem.appendChild(nomeItem)
        divItem.appendChild(precoItem)
        divQuantidade.appendChild(removerQuantidade)
        divQuantidade.appendChild(quantidade)
        divQuantidade.appendChild(adicionarQuantidade)
        li_carrinho.appendChild(divItem)
        li_carrinho.appendChild(divQuantidade)
        ulCarrinho.appendChild(li_carrinho)
    })
    localStorage.setItem('carrinho', JSON.stringify(produtosCarrinho))
    totalCarrinho.textContent = `Total: R$${total.toFixed(2)}`
}

fecharCarrinho.addEventListener('click', () => {
    carrinho.style.display = "none"
})