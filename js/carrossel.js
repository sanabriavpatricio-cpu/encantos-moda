/* Carrossel da Home: setas, bolinhas, troca automática, teclado e gesto de arrastar */
(function(){
  "use strict";

  var root = document.getElementById("carrossel");
  if(!root){ return; }

  var track = root.querySelector(".carousel-track");
  var slides = root.querySelectorAll(".carousel-slide");
  var prevBtn = root.querySelector(".carousel-prev");
  var nextBtn = root.querySelector(".carousel-next");
  var dotsBox = root.querySelector(".carousel-dots");
  var total = slides.length;
  var current = 0;
  var timer = null;
  var INTERVALO = 5000;
  var reduzMovimento = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* bolinhas */
  var dots = [];
  for(var i = 0; i < total; i++){
    (function(n){
      var d = document.createElement("button");
      d.type = "button";
      d.className = "carousel-dot";
      d.setAttribute("aria-label", "Ir para o slide " + (n + 1));
      d.addEventListener("click", function(){ goTo(n); restart(); });
      dotsBox.appendChild(d);
      dots.push(d);
    })(i);
  }

  function goTo(n){
    current = (n + total) % total;
    track.style.transform = "translateX(" + (-100 * current) + "%)";
    slides.forEach(function(s, idx){
      var ativo = idx === current;
      s.setAttribute("aria-hidden", ativo ? "false" : "true");
      s.querySelectorAll("a").forEach(function(a){ a.tabIndex = ativo ? 0 : -1; });
    });
    dots.forEach(function(d, idx){
      d.classList.toggle("active", idx === current);
      d.setAttribute("aria-current", idx === current ? "true" : "false");
    });
  }

  function next(){ goTo(current + 1); }
  function prev(){ goTo(current - 1); }

  function start(){
    if(reduzMovimento || timer){ return; }
    timer = setInterval(next, INTERVALO);
  }
  function stop(){ clearInterval(timer); timer = null; }
  function restart(){ stop(); start(); }

  nextBtn.addEventListener("click", function(){ next(); restart(); });
  prevBtn.addEventListener("click", function(){ prev(); restart(); });

  /* pausa quando o mouse/foco está no carrossel ou a aba fica oculta */
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);
  document.addEventListener("visibilitychange", function(){ document.hidden ? stop() : start(); });

  /* teclado */
  root.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft"){ prev(); }
    if(e.key === "ArrowRight"){ next(); }
  });

  /* arrastar no celular */
  var startX = null;
  root.addEventListener("touchstart", function(e){ startX = e.touches[0].clientX; stop(); }, {passive:true});
  root.addEventListener("touchend", function(e){
    if(startX !== null){
      var dx = e.changedTouches[0].clientX - startX;
      if(Math.abs(dx) > 50){ dx < 0 ? next() : prev(); }
    }
    startX = null;
    start();
  });

  goTo(0);
  start();
})();
