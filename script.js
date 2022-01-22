let pratoFoiSelecionado = false;
let bebidaFoiSelecionada = false;
let sobremesaFoiSelecionada = false;

const botao = document.querySelector('.nao-finalizado');
const texto = document.querySelector('.nao-finalizado p');

function selecaoOpcao(fileira,objetoAtual) {

    // check se algum da fileira ja está selecionado e remove selecao caso esteja
    const selecionado = document.querySelector(fileira + ' .borda');
    const iconeAtivado = document.querySelector(fileira + ' .borda ion-icon');

    if (selecionado !== null) {
        selecionado.classList.remove('borda');
        iconeAtivado.classList.remove('icone');
    }

    // faz a selecao do que foi clicado
    let icone = objetoAtual.querySelector('ion-icon');
    objetoAtual.classList.add('borda');
    icone.classList.add('icone');
    
    // ativando o botao de finalizar compra
    if (fileira === '.pratos') {
        pratoFoiSelecionado = true;
    } else if (fileira === '.bebidas') {
        bebidaFoiSelecionada = true;
    } else if (fileira === '.sobremesas') {
        sobremesaFoiSelecionada = true;
    }
    
    if (pratoFoiSelecionado === true && bebidaFoiSelecionada === true && sobremesaFoiSelecionada === true) {
        botao.classList.remove('nao-finalizado');
        botao.classList.add('finalizado');
        texto.classList.add('fechar-pedido');
        texto.innerHTML = 'Fechar pedido';
    }
}

const body = document.querySelector('body')
const confirmacao = document.querySelector('.confirmacao');

function cancelarPedido() {
    confirmacao.classList.add('escondido');
    body.classList.remove('stop-scroll')
}

function confirmarPedido() {
    if (botao.classList.contains("finalizado") === true) {
        confirmacao.classList.remove('escondido');
        body.classList.add('stop-scroll')

        let nomePratoSelecionado = document.querySelector('.pratos .borda h3').innerHTML;
        let precoPratoSelecionado = document.querySelector('.pratos .borda span').innerHTML;
          
        
        let nomeBebidaSelecionada = document.querySelector('.bebidas .borda h3').innerHTML;
        let precoBebidaSelecionada = document.querySelector('.bebidas .borda span').innerHTML;
        
        
        let nomeSobremesaSelecionada = document.querySelector('.sobremesas .borda h3').innerHTML;
        let precoSobremesaSelecionada = document.querySelector('.sobremesas .borda span').innerHTML;
        

        let nomePratoConfirmacao = document.querySelector('.nome-prato');
        nomePratoConfirmacao.innerHTML = nomePratoSelecionado;

        let precoPratoConfirmacao = document.querySelector('.preco-prato');
        precoPratoConfirmacao.innerHTML = precoPratoSelecionado;
        
        let nomeBebidaConfirmacao = document.querySelector('.nome-bebida');
        nomeBebidaConfirmacao.innerHTML = nomeBebidaSelecionada;

        let precoBebidaConfirmacao = document.querySelector('.preco-bebida');
        precoBebidaConfirmacao.innerHTML = precoBebidaSelecionada;

        let nomeSobremesaConfirmacao = document.querySelector('.nome-sobremesa');
        nomeSobremesaConfirmacao.innerHTML = nomeSobremesaSelecionada;
        
        let precoSobremesaConfirmacao = document.querySelector('.preco-sobremesa');
        precoSobremesaConfirmacao.innerHTML = precoSobremesaSelecionada;


        let precoTotal = document.querySelector('.preco-total')
        let soma = (parseFloat(precoPratoSelecionado.replace(",","."))) + (parseFloat(precoBebidaSelecionada.replace(",","."))) + (parseFloat(precoSobremesaSelecionada.replace(",",".")))
        precoTotal.innerHTML = 'R$ ' + (soma.toFixed(2).replace(".",","))
    }
}

function finalizarPedido() {
    if (botao.classList.contains("finalizado") === true) {
        
        let nomePratoSelecionado = document.querySelector('.pratos .borda h3').innerHTML;
        let precoPratoSelecionado = document.querySelector('.pratos .borda span').innerHTML;          

        let nomeBebidaSelecionada = document.querySelector('.bebidas .borda h3').innerHTML;
        let precoBebidaSelecionada = document.querySelector('.bebidas .borda span').innerHTML;
        
        let nomeSobremesaSelecionada = document.querySelector('.sobremesas .borda h3').innerHTML;
        let precoSobremesaSelecionada = document.querySelector('.sobremesas .borda span').innerHTML;


        const nomeCliente = prompt("Digite seu nome");
        const enderecoCliente = prompt("Digite seu endereço");
        
        let subtotal = (parseFloat(precoPratoSelecionado.replace(",","."))) + (parseFloat(precoBebidaSelecionada.replace(",","."))) + (parseFloat(precoSobremesaSelecionada.replace(",",".")))

        let textoWhats = 'Olá, gostaria de fazer o pedido:\n- Prato: ' + nomePratoSelecionado + '\n- Bebida: ' + nomeBebidaSelecionada + '\n- Sobremesa: ' + nomeSobremesaSelecionada + '\nTotal: R$ ' + subtotal.toFixed(2) + '\n\nNome: ' + nomeCliente + '\nEndereço: ' + enderecoCliente;
        
        const textoCodificado = encodeURIComponent(textoWhats);
        const linkComTexto = 'https://wa.me/5511993457220?text=' + textoCodificado;
        const link = document.getElementById('link');
        link.href = linkComTexto;
    }
}
