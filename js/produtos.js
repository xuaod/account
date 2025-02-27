const produtos = [
  { nome: "Preenchedor Facial em Creme Bisyou", preco: "R$ 99,90", imagem: "/img/1.jpg" },
  { nome: "Produto 2", preco: "R$ 79,90", promocao: "R$ 149,90", imagem: "/img/1.jpg" },
  { nome: "Produto 3", preco: "R$ 149,90", imagem: "https://via.placeholder.com/100/3357FF" },
  { nome: "Produto 4", preco: "R$ 59,90", imagem: "https://via.placeholder.com/100/FF33A6" },
  { nome: "Produto 5", preco: "R$ 199,90", imagem: "https://via.placeholder.com/100/A633FF" },
  { nome: "Produto 6", preco: "R$ 89,90", imagem: "https://via.placeholder.com/100/FFC300" },
  { nome: "Produto 7", preco: "R$ 129,90", imagem: "https://via.placeholder.com/100/FF5733" },
  { nome: "Produto 8", preco: "R$ 109,90", imagem: "https://via.placeholder.com/100/33FFBD" }
];

const listaProdutos = document.getElementById("listaProdutos");

produtos.forEach(produto => {
  let div = document.createElement("div");
  div.classList.add("produto");

  div.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.promocao ? `<s>${produto.promocao}</s>` : ""}</p>
      <p>${produto.preco}</p>
      <button class="botao-comprar" onclick="comprar('${produto.nome}')">Comprar</button>
  `;

  listaProdutos.appendChild(div);
});

function scrollEsquerda() {
  listaProdutos.scrollBy({ left: -220, behavior: "smooth" });
}

function scrollDireita() {
  listaProdutos.scrollBy({ left: 220, behavior: "smooth" });
}

function comprar(nome) {
  alert(`Você comprou: ${nome}`);
}

        
<div class="container">
<button class="botoes esquerda" onclick="scrollEsquerda()">&#10094;</button>
<div class="produtos" id="listaProdutos"></div>


<button class="botoes direita" onclick="scrollDireita()">&#10095;</button>
</div>   


