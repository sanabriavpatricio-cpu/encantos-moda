/* Página de produtos: lista, filtros por categoria e botão "Adicionar" */
(function(){
  "use strict";

  var products = [
    {"id": "ts-algodao-paradise", "name": "T-Shirt Algodão Paradise", "price": 49.9, "category": "algodao", "sizes": ["PP", "P", "M", "G", "GG"], "img": "imagens/algodao1.png.jpeg", "description": "T-shirt de algodão confortável, com estampa para usar no dia a dia."},
    {"id": "ts-algodao-blessed", "name": "T-Shirt Algodão Blessed", "price": 49.9, "category": "algodao", "sizes": ["PP", "P", "M", "G", "GG"], "img": "imagens/algodao2.png.jpeg", "description": "T-shirt de algodão confortável, com estampa para usar no dia a dia."},
    {"id": "algodao3-png", "name": "T-Shirt Algodão 3", "price": 49.9, "category": "algodao", "sizes": ["PP", "P", "M", "G", "GG"], "img": "imagens/algodao3.png.jpeg", "description": "T-shirt de algodão confortável, com estampa para usar no dia a dia."},
    {"id": "algodao4-png", "name": "T-Shirt Algodão 4", "price": 49.9, "category": "algodao", "sizes": ["PP", "P", "M", "G", "GG"], "img": "imagens/algodao4.png.jpeg", "description": "T-shirt de algodão confortável, com estampa para usar no dia a dia."},
    {"id": "algodao5-png", "name": "T-Shirt Algodão 5", "price": 49.9, "category": "algodao", "sizes": ["PP", "P", "M", "G", "GG"], "img": "imagens/algodao5.png.jpeg", "description": "T-shirt de algodão confortável, com estampa para usar no dia a dia."},
    {"id": "ts-canelada-lilas", "name": "T-Shirt Canelada Lilás", "price": 49.9, "category": "canelada", "sizes": ["P", "M", "G"], "img": "imagens/canelada1.png.jpeg", "description": "Modelo canelado com toque macio e caimento confortável."},
    {"id": "canelada2-png", "name": "T-Shirt Canelada 2", "price": 49.9, "category": "canelada", "sizes": ["P", "M", "G"], "img": "imagens/canelada2.png.jpeg", "description": "Modelo canelado com toque macio e caimento confortável."},
    {"id": "canelada3-png", "name": "T-Shirt Canelada 3", "price": 49.9, "category": "canelada", "sizes": ["P", "M", "G"], "img": "imagens/canelada3.png.jpeg", "description": "Modelo canelado com toque macio e caimento confortável."},
    {"id": "canelada4-png", "name": "T-Shirt Canelada 4", "price": 49.9, "category": "canelada", "sizes": ["P", "M", "G"], "img": "imagens/canelada4.png.jpeg", "description": "Modelo canelado com toque macio e caimento confortável."},
    {"id": "canelada5-png", "name": "T-Shirt Canelada 5", "price": 49.9, "category": "canelada", "sizes": ["P", "M", "G"], "img": "imagens/canelada5.png.jpeg", "description": "Modelo canelado com toque macio e caimento confortável."},
    {"id": "t-shit-png", "name": "T-Shirt Estampada Ursinho 1", "price": 49.9, "category": "tshirt-estampada", "sizes": ["PP", "P", "M", "G", "GG"], "img": "imagens/t-shit.png.jpeg", "description": "T-shirt estampada com desenho divertido e caimento casual."},
    {"id": "tshirt1-png", "name": "T-Shirt Estampada Ursinho 2", "price": 49.9, "category": "tshirt-estampada", "sizes": ["PP", "P", "M", "G", "GG"], "img": "imagens/tshirt1.png.jpeg", "description": "T-shirt estampada com desenho divertido e caimento casual."},
    {"id": "tshirt2-png", "name": "T-Shirt Estampada Ursinho 3", "price": 49.9, "category": "tshirt-estampada", "sizes": ["PP", "P", "M", "G", "GG"], "img": "imagens/tshirt2.png.jpeg", "description": "T-shirt estampada com desenho divertido e caimento casual."},
    {"id": "tshirt3-png", "name": "T-Shirt Estampada Ursinho 4", "price": 49.9, "category": "tshirt-estampada", "sizes": ["PP", "P", "M", "G", "GG"], "img": "imagens/tshirt3.png.jpeg", "description": "T-shirt estampada com desenho divertido e caimento casual."},
    {"id": "tshirt4-png", "name": "T-Shirt Estampada Ursinho 5", "price": 49.9, "category": "tshirt-estampada", "sizes": ["PP", "P", "M", "G", "GG"], "img": "imagens/tshirt4.png.jpeg", "description": "T-shirt estampada com desenho divertido e caimento casual."},
    {"id": "pijama-rosa", "name": "Pijama Rosa Longo", "price": 149.9, "category": "pijamas", "sizes": ["P", "M", "G", "GG"], "img": "imagens/pijama1.png.jpeg", "description": "Conjunto confortável para seus momentos de descanso."},
    {"id": "pijama2-png", "name": "Pijama 1", "price": 149.9, "category": "pijamas", "sizes": ["P", "M", "G", "GG"], "img": "imagens/pijama2.png.jpeg", "description": "Conjunto confortável para seus momentos de descanso."},
    {"id": "babydoll3-png", "name": "Baby Doll 2", "price": 99.9, "category": "babydoll", "sizes": ["P", "M", "G"], "img": "imagens/babydoll3.png.jpeg", "description": "Peça leve e confortável para suas noites de descanso."},
    {"id": "babydoll5-png", "name": "Baby Doll 3", "price": 99.9, "category": "babydoll", "sizes": ["P", "M", "G"], "img": "imagens/babydoll5.png.jpeg", "description": "Peça leve e confortável para suas noites de descanso."},
    {"id": "babydoll6-png", "name": "Baby Doll 4", "price": 99.9, "category": "babydoll", "sizes": ["P", "M", "G"], "img": "imagens/babydoll6.png.jpeg", "description": "Peça leve e confortável para suas noites de descanso."},
    {"id": "babydoll", "name": "Baby Doll", "price": 99.9, "category": "babydoll", "sizes": ["P", "M", "G"], "img": "imagens/babydoll7.png.jpeg", "description": "Peça leve e confortável para suas noites de descanso."},
    {"id": "bebydoll1-png", "name": "Baby Doll 5", "price": 99.9, "category": "babydoll", "sizes": ["P", "M", "G"], "img": "imagens/bebydoll1.png.jpeg", "description": "Peça leve e confortável para suas noites de descanso."},
    {"id": "bebydoll2-png", "name": "Baby Doll 6", "price": 99.9, "category": "babydoll", "sizes": ["P", "M", "G"], "img": "imagens/bebydoll2.png.jpeg", "description": "Peça leve e confortável para suas noites de descanso."},
    {"id": "bebydoll4-png", "name": "Baby Doll 7", "price": 99.9, "category": "babydoll", "sizes": ["P", "M", "G"], "img": "imagens/bebydoll4.png.jpeg", "description": "Peça leve e confortável para suas noites de descanso."},
    {"id": "camisola1-png", "name": "Camisola 1", "price": 49.9, "category": "camisolas", "sizes": ["P", "M", "G", "GG"], "img": "imagens/camisola1.png.jpeg", "description": "Camisola de modelagem confortável para dormir com leveza."},
    {"id": "camisola2-png", "name": "Camisola 2", "price": 49.9, "category": "camisolas", "sizes": ["P", "M", "G", "GG"], "img": "imagens/camisola2.png.jpeg", "description": "Camisola de modelagem confortável para dormir com leveza."},
    {"id": "camisola-basica", "name": "Camisola Básica Confort", "price": 49.9, "category": "camisolas", "sizes": ["P", "M", "G", "GG"], "img": "imagens/camisola3.png.jpeg", "description": "Camisola de modelagem confortável para dormir com leveza."},
    {"id": "la1-png", "name": "Blusa de Frio 1", "price": 99.9, "category": "blusas-frio", "sizes": ["P", "M", "G"], "img": "imagens/la1.png.jpeg", "description": "Blusa macia e quentinha, ideal para dias mais frescos."},
    {"id": "la2-png", "name": "Blusa de Frio 2", "price": 99.9, "category": "blusas-frio", "sizes": ["P", "M", "G"], "img": "imagens/la2.png.jpeg", "description": "Blusa macia e quentinha, ideal para dias mais frescos."},
    {"id": "la3-png", "name": "Blusa de Frio 3", "price": 99.9, "category": "blusas-frio", "sizes": ["P", "M", "G"], "img": "imagens/la3.png.jpeg", "description": "Blusa macia e quentinha, ideal para dias mais frescos."},
    {"id": "la5-png", "name": "Blusa de Frio 4", "price": 99.9, "category": "blusas-frio", "sizes": ["P", "M", "G"], "img": "imagens/la5.png.jpeg", "description": "Blusa macia e quentinha, ideal para dias mais frescos."},
    {"id": "la6-png", "name": "Blusa de Frio 5", "price": 99.9, "category": "blusas-frio", "sizes": ["P", "M", "G"], "img": "imagens/la6.png.jpeg", "description": "Blusa macia e quentinha, ideal para dias mais frescos."},
    {"id": "moletom1-png", "name": "Conjunto de Moletom 1", "price": 199.9, "category": "moletom", "sizes": ["P", "M", "G", "GG"], "img": "imagens/moletom1.png.jpeg", "description": "Conjunto macio e confortável para os dias mais frios."},
    {"id": "conjunto-moletom", "name": "Conjunto de Moletom Cinza", "price": 199.9, "category": "moletom", "sizes": ["P", "M", "G", "GG"], "img": "imagens/moletom2.png.jpeg", "description": "Conjunto macio e confortável para os dias mais frios."},
    {"id": "moletom3-png", "name": "Conjunto de Moletom 2", "price": 199.9, "category": "moletom", "sizes": ["P", "M", "G", "GG"], "img": "imagens/moletom3.png.jpeg", "description": "Conjunto macio e confortável para os dias mais frios."},
    {"id": "roupao-fleece", "name": "Roupão Fleece", "price": 189.9, "category": "roupao", "sizes": ["Único"], "img": "imagens/roupao1.png.jpeg", "description": "Roupão macio para trazer aconchego à rotina."},
    {"id": "roupao2-png", "name": "Roupão 1", "price": 189.9, "category": "roupao", "sizes": ["Único"], "img": "imagens/roupao2.png.jpeg", "description": "Roupão macio para trazer aconchego à rotina."},
    {"id": "roupao3-png", "name": "Roupão 2", "price": 189.9, "category": "roupao", "sizes": ["Único"], "img": "imagens/roupao3.png.jpeg", "description": "Roupão macio para trazer aconchego à rotina."},
    {"id": "roupao4-png", "name": "Roupão 3", "price": 189.9, "category": "roupao", "sizes": ["Único"], "img": "imagens/roupao4.png.jpeg", "description": "Roupão macio para trazer aconchego à rotina."},
    {"id": "tweed1-png", "name": "Conjunto de Tweed 1", "price": 249.9, "category": "tweed", "sizes": ["P", "M", "G"], "img": "imagens/tweed1.png.jpeg", "description": "Conjunto com textura elegante e confortável para dias amenos."},
    {"id": "conjunto-tweed", "name": "Conjunto de Tweed", "price": 249.9, "category": "tweed", "sizes": ["P", "M", "G"], "img": "imagens/tweed2.png.jpeg", "description": "Conjunto com textura elegante e confortável para dias amenos."},
    {"id": "tweed3-png", "name": "Conjunto de Tweed 2", "price": 249.9, "category": "tweed", "sizes": ["P", "M", "G"], "img": "imagens/tweed3.png.jpeg", "description": "Conjunto com textura elegante e confortável para dias amenos."},
    {"id": "tweed4-png", "name": "Conjunto de Tweed 3", "price": 249.9, "category": "tweed", "sizes": ["P", "M", "G"], "img": "imagens/tweed4.png.jpeg", "description": "Conjunto com textura elegante e confortável para dias amenos."}
  ];

  var grid = document.getElementById("productGrid");
  if(!grid){ return; }

  function money(v){ return "R$ " + v.toFixed(2).replace(".", ","); }

  function renderProducts(filter){
    grid.innerHTML = "";
    products
      .filter(function(p){ return filter === "all" || p.category === filter; })
      .forEach(function(p){
        var card = document.createElement("article");
        card.className = "product-card";

        var sizeOptions = p.sizes.map(function(s){ return '<option value="'+s+'">'+s+'</option>'; }).join("");

        card.innerHTML =
          '<div class="product-media"><img src="'+p.img+'" alt="'+p.name+'" loading="lazy"></div>' +
          '<div class="product-info">' +
            '<h3>'+p.name+'</h3>' +
            '<p class="product-description">'+p.description+'</p>' +
            '<div class="product-price">'+money(p.price)+'</div>' +
            '<div class="product-controls">' +
              '<select class="size-select" aria-label="Tamanho">'+sizeOptions+'</select>' +
              '<button class="add-cart-btn" type="button">Adicionar</button>' +
            '</div>' +
          '</div>';

        card.querySelector(".add-cart-btn").addEventListener("click", function(){
          var size = card.querySelector(".size-select").value;
          if(window.EncantosCart){ window.EncantosCart.add(p, size); }
        });

        grid.appendChild(card);
      });
  }

  /* ---------- Filtros ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var validFilters = Array.prototype.map.call(filterBtns, function(b){ return b.dataset.filter; });

  function setActiveFilter(value){
    filterBtns.forEach(function(b){ b.classList.toggle("active", b.dataset.filter === value); });
    renderProducts(value);
  }

  filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(){
      setActiveFilter(btn.dataset.filter);
      try{
        var url = btn.dataset.filter === "all" ? "produtos.html" : "produtos.html?filtro=" + btn.dataset.filter;
        history.replaceState(null, "", url);
      }catch(e){ /* ignora (ex.: abrindo direto do arquivo) */ }
    });
  });

  /* Filtro vindo do menu / da Home (produtos.html?filtro=algodao) */
  var initial = "all";
  try{
    var param = new URLSearchParams(window.location.search).get("filtro");
    if(param && validFilters.indexOf(param) !== -1){ initial = param; }
  }catch(e){ /* mantém "all" */ }

  setActiveFilter(initial);
})();
