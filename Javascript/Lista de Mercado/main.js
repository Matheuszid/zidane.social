let produtos = [];

let inputProduto = document.getElementById('a_Produtos');
let inputAdicionar = document.getElementById('botaoAdicionar');
let inputPesquisar = document.getElementById('p_Produtos');
let list = document.getElementById('list');
let inputExcluir = document.getElementById('botaoExcluir');
let inputInfo = document.getElementById('info');

//Adicionar item
botaoAdicionar.addEventListener('click', () => {
    let produto = inputProduto.value; 

    if (produtos.includes(produto)) {
        alert('Produto já existe');
        return;
    } else {
        produtos.push(produto);
    }

    if (produto == '') {
        alert('Digite um produto');
    }

    else {

        list.innerHTML = '';

        for(let i = 0; i < produtos.length; i++) {
            let produto = produtos[i];

        let item = document.createElement('li'); 
        item.innerText = produto; 

        let checkbox = document.createElement('input'); //cria um input
        checkbox.type = 'checkbox'; //define o tipo do input
        checkbox.value = produto;
        item.appendChild(checkbox);

        list.appendChild(item); 
        inputProduto.value = ''; 
        } 
    }
});
    
//Pesquisar item
 inputProduto.addEventListener('keyup', () => {
    let texto = inputProduto.value;
    let itens = list.getElementsByTagName('li');
    Array.from(itens).forEach((item) => {
        let itemNome = item.innerText;
        if (itemNome.toLowerCase().indexOf(texto.toLowerCase()) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
}); 
   
//Excluir item
  inputExcluir.addEventListener('click', () => {
    let itens = list.getElementsByTagName('li');
    Array.from(itens).forEach((item) => {
        let checkbox = item.getElementsByTagName('input')[0];
        if (checkbox.checked) {
            let itemNome = item.innerText;
            let index = produtos.indexOf(itemNome);
            produtos.splice(index, 1);
            item.remove();
        }
    });
  });


inputInfo.addEventListener('click', () => {
    alert ('Testando funções do JavaScript sendo a de adicionar, pesquisar e excluir itens da lista de mercado.');
});