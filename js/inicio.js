

            const itens = [
              { nome: "Smartphones",  imagem: "/img/categorias.webp" },
              { nome: "Notebook",  imagem: "/img/categorias.webp" },
              { nome: "Televisão",  imagem: "/img/categorias.webp" },
              { nome: "Lava e Seca",  imagem: "/img/categorias.webp" },
              { nome: "Refrigerador",  imagem: "/img/categorias.webp" },
              { nome: "Fogão",  imagem: "/img/categorias.webp" },
              { nome: "Microondas",  imagem: "/img/categorias.webp" },
              { nome: "Forno",  imagem: "/img/categorias.webp" },
              { nome: "Climatizador",  imagem: "/img/categorias.webp" },
              { nome: "Acessórios",  imagem: "/img/categorias.webp" }
          ];


        
       
          const listaItens = document.getElementById("lista-itens");
          
          itens.forEach(item => {
              const elemento = document.createElement("div");
              elemento.classList.add("item"); // Adiciona classe para estilização
          
              const img = document.createElement("img");
              img.src = item.imagem;
              img.alt = item.nome;
          
              const texto = document.createElement("h3");
              texto.textContent = `${item.nome}`;
          
              elemento.appendChild(img);
              elemento.appendChild(texto);
              listaItens.appendChild(elemento);
          });
          





          const listaItens2 = document.getElementById("lista-itens-2");
          const btnEsquerda = document.getElementById("scroll-esquerda2");
          const btnDireita = document.getElementById("scroll-direita2");
          
          // Criar os itens na lista
          const itens2 = [
            { nome: "Headset Gamer Wireless Jbl Quantum 350 - Preto", valor: 399.90, imagem: "/img/produto1.webp" },
            { nome: "Item B", valor: 12.30, imagem: "/img/produto.png" },
            { nome: "Item C", valor: 7.85, imagem: "/img/produto.png" },
            { nome: "Item D", valor: 10.50, imagem: "/img/produto.png" },
            { nome: "Item E", valor: 8.99, imagem: "/img/produto.png" },
            { nome: "Item F", valor: 15.75, imagem: "/img/produto.png" },
            { nome: "Item G", valor: 6.99, imagem: "/img/produto.png" }
          ];
          
          itens2.forEach(item => {
              const elemento = document.createElement("div");
              elemento.classList.add("item2");
          
              const img = document.createElement("img");
              img.src = item.imagem;
              img.alt = item.nome;



              const texto = document.createElement("p");
              texto.innerHTML = `
              <span class="nome-produto">${item.nome}</span><br>
              <span class="moeda">R$</span>
              <span class="valor-produto">${item.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span><br>
              <span class="parcelas-texto">10x de</span>
              <span class="valor-parcela">R$ ${(item.valor / 10).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
          `;





              elemento.appendChild(img);
              elemento.appendChild(texto);
              
              listaItens2.appendChild(elemento);
          });
          
          // Funções para rolagem horizontal
          btnEsquerda.addEventListener("click", () => {
              listaItens2.scrollBy({ left: -200, behavior: "smooth" });
          });
          
          btnDireita.addEventListener("click", () => {
              listaItens2.scrollBy({ left: 200, behavior: "smooth" });
          });
      







          const itens3 = [
            { nome: "Item A", valor: 5.9, imagem: "itemA.jpg" },
            { nome: "Item B", valor: 12.30, imagem: "itemB.jpg" },
            { nome: "Item C", valor: 7.85, imagem: "/img/categorias.webp" }
        ];

          const listaItens3 = document.getElementById("lista-itens-3");
          
          itens3.forEach(item => {
              const elemento = document.createElement("div");
              elemento.classList.add("item"); // Adiciona classe para estilização
          
              const img = document.createElement("img");
              img.src = item.imagem;
              img.alt = item.nome;
          
              const texto = document.createElement("span");
              texto.textContent = `${item.nome} - R$ ${item.valor.toFixed(2)}`;
          
              elemento.appendChild(img);
              elemento.appendChild(texto);
              listaItens3.appendChild(elemento);
          });
          

            



       