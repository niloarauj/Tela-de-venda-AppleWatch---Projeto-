const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const miniatura0 = document.getElementById('0-imagem-miniatura');
const miniatura1 = document.getElementById('1-imagem-miniatura');
const miniatura2 = document.getElementById('2-imagem-miniatura');
const titulo = document.getElementById('titulo-produto');

const verdeCipreste = {
    nome: "verde-cipreste",
    pasta: "imagens-verde-cipreste"
}
const azulInverno = {
    nome: "azul-inverno",
    pasta: "imagens-azul-inverno"
}
const meiaNoite = {
    nome: "meia-noite",
    pasta: "imagens-meia-noite"
}
const rosaClaro = {
    nome: "rosa-claro",
    pasta:  "imagens-rosa-claro"
}
const estelar = {
    nome: "estelar",
    pasta: "imagens-estelar"
}
const opcaoCaixa = ['41mm', '45mm'];
const opcaoCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const idCaixa = document.getElementById("imagem-visualizacao");
let imagemSelecionada = 1;
let caixaSelecionada = 1;
let corSelecionada = 1;
let iconeSelecionado = 1;


function trocarImagem(){
    const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idOpcaoSelecionada.charAt(0);
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-azul-inverno/imagem-"+ imagemSelecionada + ".jpeg"
}

function trocarCaixa(){
    const idCaixaSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
    caixaSelecionada = idCaixaSelecionada.charAt(0);
    if(opcaoCaixa[caixaSelecionada] === '41mm'){
        idCaixa.classList.add("caixa-pequena")
    }else{
        idCaixa.classList.remove("caixa-pequena") 
    }
    
   
    titulo.innerText = "Pulseira loop esportiva azul-inverno para caixa de " + opcaoCaixa[caixaSelecionada]
}

function trocarCor(){
    //coletar id
    const idCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idCorSelecionada.charAt(0);
    //alterar título
    titulo.innerText = "Pulseira loop esportiva " + opcaoCores[corSelecionada].nome + " para caixa de " + opcaoCaixa[caixaSelecionada];
    //alterar imagem
    imagemVisualizacao.src = "./imagens/opcoes-cores/" + opcaoCores[corSelecionada].pasta + "/imagem-"+ imagemSelecionada + ".jpeg";
    //mudar miniatura 
    miniatura0.src = "./imagens/opcoes-cores/" + opcaoCores[corSelecionada].pasta + "/imagem-0.jpeg"
    miniatura1.src = "./imagens/opcoes-cores/" + opcaoCores[corSelecionada].pasta + "/imagem-1.jpeg"
    miniatura2.src = "./imagens/opcoes-cores/" + opcaoCores[corSelecionada].pasta + "/imagem-2.jpeg"
}