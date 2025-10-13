const abrirAgendamento = document.getElementById('abrirAgendamento')
const agendamento = document.getElementById('agendamentos')
const fecharAgendamento = document.getElementById('fechar-agendamento')
const ulAgendamentos = document.getElementById('listaAgendamentos')
const limparAgendamentos = document.getElementById('limparAgendamentos')

let ProdutosAgendamento = []
let DadosFormularioAgendamento = [];

abrirAgendamento.addEventListener('click', () => {
    agendamento.style.display = "block"
})

fecharAgendamento.addEventListener('click', () => {
    agendamento.style.display = "none"
})

function atualizarAgendamentos() {
    
}

// console.log(ProdutosAgendamento);
// console.log(DadosFormularioAgendamento);