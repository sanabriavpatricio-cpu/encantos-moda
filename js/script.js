/* Comportamentos comuns a todas as páginas: menu, carrinho, login e formulário de contato */
(function(){
  "use strict";

  function money(v){ return "R$ " + v.toFixed(2).replace(".", ","); }

  /* ---------------- Menu mobile ---------------- */
  var burger = document.getElementById("burgerBtn");
  var mainNav = document.getElementById("mainNav");
  if(burger && mainNav){
    burger.addEventListener("click", function(){
      var isOpen = mainNav.classList.toggle("open");
      burger.setAttribute("aria-expanded", isOpen);
    });
  }

  document.querySelectorAll(".has-dropdown > .nav-link").forEach(function(link){
    link.addEventListener("click", function(e){
      if(window.innerWidth <= 720){
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });

  /* ---------------- Carrinho (salvo no navegador entre as páginas) ---------------- */
  var STORAGE_KEY = "encantos_carrinho";
  var cart = [];
  try{
    var saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if(Array.isArray(saved)){ cart = saved; }
  }catch(e){ cart = []; }

  function saveCart(){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }catch(e){ /* sem armazenamento: segue só em memória */ }
  }

  var cartItemsEl = document.getElementById("cartItems");
  var cartTotalEl = document.getElementById("cartTotal");
  var cartCountEl = document.getElementById("cartCount");
  var cartDrawer = document.getElementById("cartDrawer");
  var overlay = document.getElementById("overlay");

  function addToCart(product, size){
    var existing = cart.find(function(i){ return i.id === product.id && i.size === size; });
    if(existing){
      existing.qty += 1;
    } else {
      cart.push({ id: product.id, name: product.name, price: product.price, img: product.img, size: size, qty: 1 });
    }
    renderCart();
    openCart();
  }

  function renderCart(){
    saveCart();
    var totalQty = cart.reduce(function(sum, i){ return sum + i.qty; }, 0);
    cartCountEl.textContent = totalQty;

    if(cart.length === 0){
      cartItemsEl.innerHTML = '<p class="cart-empty">Seu carrinho está vazio.</p>';
      cartTotalEl.textContent = money(0);
      return;
    }

    cartItemsEl.innerHTML = "";
    var total = 0;

    cart.forEach(function(item, index){
      total += item.price * item.qty;
      var row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML =
        '<img src="'+item.img+'" alt="'+item.name+'">' +
        '<div>' +
          '<div class="cart-item-name">'+item.name+'</div>' +
          '<div class="cart-item-meta">Tamanho: '+item.size+'</div>' +
          '<div class="qty-row">' +
            '<button class="qty-btn" data-action="dec" aria-label="Diminuir quantidade">−</button>' +
            '<span>'+item.qty+'</span>' +
            '<button class="qty-btn" data-action="inc" aria-label="Aumentar quantidade">+</button>' +
            '<button class="remove-btn" data-action="remove">Remover</button>' +
          '</div>' +
        '</div>' +
        '<div class="cart-item-price">'+money(item.price * item.qty)+'</div>';

      row.querySelector('[data-action="inc"]').addEventListener("click", function(){
        cart[index].qty += 1; renderCart();
      });
      row.querySelector('[data-action="dec"]').addEventListener("click", function(){
        cart[index].qty -= 1;
        if(cart[index].qty <= 0){ cart.splice(index,1); }
        renderCart();
      });
      row.querySelector('[data-action="remove"]').addEventListener("click", function(){
        cart.splice(index,1); renderCart();
      });

      cartItemsEl.appendChild(row);
    });

    cartTotalEl.textContent = money(total);
  }

  function openCart(){ cartDrawer.classList.add("open"); overlay.classList.add("open"); }
  function closeCart(){ cartDrawer.classList.remove("open"); overlay.classList.remove("open"); }

  document.getElementById("cartBtn").addEventListener("click", openCart);
  document.getElementById("closeCart").addEventListener("click", closeCart);

  document.getElementById("checkoutBtn").addEventListener("click", function(){
    if(cart.length === 0) return;
    alert("Fluxo de checkout em preparação. Em breve você poderá finalizar sua compra por aqui.");
  });

  renderCart();

  /* Usado pela página de produtos */
  window.EncantosCart = { add: addToCart };

  /* ---------------- Login / Cadastro (modal) ---------------- */
  var loginModal = document.getElementById("loginModal");
  var tabBtns = document.querySelectorAll(".tab-btn");
  var loginForm = document.getElementById("loginForm");
  var signupForm = document.getElementById("signupForm");
  var authMsg = document.getElementById("authMsg");

  function openModal(){ loginModal.classList.add("open"); overlay.classList.add("open"); }
  function closeModal(){ loginModal.classList.remove("open"); overlay.classList.remove("open"); authMsg.textContent = ""; }

  document.getElementById("loginBtn").addEventListener("click", openModal);
  document.getElementById("closeModal").addEventListener("click", closeModal);
  overlay.addEventListener("click", function(){ closeCart(); closeModal(); });
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){ closeCart(); closeModal(); }
  });

  tabBtns.forEach(function(tab){
    tab.addEventListener("click", function(){
      tabBtns.forEach(function(t){ t.classList.remove("active"); });
      tab.classList.add("active");
      var isLogin = tab.dataset.tab === "login";
      loginForm.hidden = !isLogin;
      signupForm.hidden = isLogin;
      authMsg.textContent = "";
    });
  });

  loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    authMsg.textContent = "Área pronta para conexão futura com o banco de dados de clientes.";
  });
  signupForm.addEventListener("submit", function(e){
    e.preventDefault();
    authMsg.textContent = "Cadastro recebido. Em breve conectaremos ao banco de dados de clientes.";
  });

  /* ---------------- Formulário de contato (página Fale Conosco) ---------------- */
  var contactForm = document.getElementById("contactForm");
  if(contactForm){
    contactForm.addEventListener("submit", function(e){
      e.preventDefault();
      var msg = document.getElementById("contactMsg");
      var name = document.getElementById("c-name").value.trim();
      var email = document.getElementById("c-email").value.trim();
      var subject = document.getElementById("c-subject").value;
      var text = document.getElementById("c-message").value.trim();

      if(name.length < 3){ msg.textContent = "Informe seu nome completo."; return; }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ msg.textContent = "Informe um e-mail válido."; return; }
      if(!subject){ msg.textContent = "Selecione o assunto."; return; }
      if(text.length < 10){ msg.textContent = "Escreva uma mensagem com pelo menos 10 caracteres."; return; }

      msg.textContent = "Mensagem enviada! Nossa equipe responde em até 2 dias úteis.";
      contactForm.reset();
    });
  }
})();
