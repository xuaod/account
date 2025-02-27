const itens = [ 
  { nome: "Preenchedor Facial em Creme Bisyou", preco: "R$ 99,90", imagem: "/img/1.jpg" },
  { nome: "Produto 2", preco: "R$ 79,90", promocao: "R$ 149,90", imagem: "/img/1.jpg" },
  { nome: "Produto 3", preco: "R$ 149,90", imagem: "https://via.placeholder.com/100/3357FF" },
  { nome: "Produto 4", preco: "R$ 59,90", imagem: "https://via.placeholder.com/100/FF33A6" },
  { nome: "Produto 5", preco: "R$ 199,90", imagem: "https://via.placeholder.com/100/A633FF" },
  { nome: "Produto 6", preco: "R$ 89,90", imagem: "https://via.placeholder.com/100/FFC300" },
  { nome: "Produto 7", preco: "R$ 129,90", imagem: "https://via.placeholder.com/100/FF5733" },
  { nome: "Produto 8", preco: "R$ 109,90", imagem: "https://via.placeholder.com/100/33FFBD" }
];

const listaItens = document.getElementById("listaProdutos1");

if (listaItens) {
  itens.forEach(item => {
    let div = document.createElement("div");
    div.classList.add("item");

    div.innerHTML = `
        <img src="${item.imagem}" alt="${item.nome}">
        <h3>${item.nome}</h3>
        <p>${item.promocao ? `<s>${item.promocao}</s>` : ""}</p>
        <p>${item.preco}</p>
        <button class="botao-compra" onclick="comprarItem('${item.nome}')">Comprar</button>
    `;

    listaItens.appendChild(div);
  });
}

function scrollEsquerda() {
  if (listaItens) {
    listaItens.scrollBy({ left: -220, behavior: "smooth" });
  }
}

function scrollDireita() {
  if (listaItens) {
    listaItens.scrollBy({ left: 220, behavior: "smooth" });
  }
}

function comprarItem(nome) {
  alert(`Você comprou: ${nome}`);
}
