//  Cor do Pincel

// Initial data
let currentColor = "black"; // Cor Padrão
let canDraw = false; // Variável que possibilita desenhar
let mouseX = 0; //Posição padrão do maouse no eixo x
let mouseY = 0; //Posição padrão do maouse no eixo y

let screen = document.querySelector("#tela"); // Seleciona o Cavas
let ctx = screen.getContext("2d"); // Seleciona o tipo de contexto = "2d"

// Events

document.querySelectorAll(".color").forEach((item) => {
  // Roda por todos elementos que tem a tag "color" , adiciona o evento de click e adiciona uma função
  item.addEventListener("click", colorClickEvent);
});

screen.addEventListener("mousedown", mouseDownEvent); // Quando o usuário clicar na tela
screen.addEventListener("mousemove", mouseMoveEvent); // Quando o usuário mover o mause
screen.addEventListener("mouseup", mouseUpEvent); // Quando o usuário soltar o mause
document.querySelector(".clear").addEventListener("click", clearScreen);

// Functions

function colorClickEvent(e) {
  // Identifica em qual cor a pessoa clicou , por meio da sua tag 'data-color'
  let color = e.target.getAttribute("data-color");

  currentColor = color; // Muda a cor

  document.querySelector(".color.active").classList.remove("active"); //  Remove  quem tiver a class active

  e.target.classList.add("active"); // Adiciona a class "active" em quem eu cliquei.
}

function mouseDownEvent(e) {
  canDraw = true;
  mouseX = e.pageX - screen.offsetLeft;
  mouseY = e.pageY - screen.offsetTop;
}
function mouseMoveEvent(e) {
  if (canDraw) {
    draw(e.pageX, e.pageY);
  }
}
function mouseUpEvent(e) {
  canDraw = false;
  mouseX = e.pageX - screen.offsetLeft;
  mouseY = e.pageY - screen.offsetTop;
}
function draw(x, y) {
  let pointX = x - screen.offsetLeft;
  let pointY = y - screen.offsetTop;

  // Desenho
  ctx.beginPath();
  ctx.lineWidth = 5; // Largura da linha
  ctx.lineJoin = "round";
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(pointX, pointY);
  ctx.closePath();
  ctx.strokeStyle = currentColor; // Cor do desenho
  ctx.stroke(); // Finaliza o processo

  mouseX = pointX;
  mouseY = pointY;
}

function clearScreen() {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
/*
// PASSO A PASSO PARA DESENHAR NO CANVAS:
 -- QUANDO O CLICK DO MOUSE ABAIXAR , ATIVE O MODO DESENHO
 -- QUANDO O MAUSE SE MOVER, SE O MODO DESENHO ESTIVER ATIVADO, DESENHE.
 -- QUANDO O CLICK DO MOUSE  LEVANTAR, DESATIVER O MODO DESENHO   
*/
