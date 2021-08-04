let canvas = document.getElementById("snake"); //Cria elemento que irá rodar o jogo
//Renderiza desenho dentro do Canvas
let context = canvas.getContext("2d");
let box = 32; //32px cada quadrado
let snake = []; //Cria a cobrinha como lista, já que ela vai ser uma série de coordenadas que, quando pintadas, criam os quadradinhos
snake[0] = {
    x: 8 * box, 
    y: 8 * box
}
let direction = "right";
let food = {
    // Math.floor retira ponto flutuante (vírgula após número) do Math.random (Math.random retorna número aleatório até 1)
    x: Math.floor(Math.random() * 15 + 1) * box, 
    y: Math.floor(Math.random() * 15 + 1) * box
}

//Criar background
function criarBG() {
    //FillStyle -> Estilo do Canvas
    context.fillStyle = "black";
    //FillReact -> Desenha o retângulo do jogo (trabalha com 4 parâmetros ->  x e y e a largura e altura setadas)
    context.fillRect(0, 0, 16*box, 16*box);
}

function criarCobrinha() {
    for(i = 0; i< snake.length; i++) {
      context.fillStyle = "purple";
      context.fillRect(snake[i].x, snake[i].y, box, box)  
    }
}

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update); // Pega keydown (evento de clique) e chama a função update

//
function update (event) {
    if(event.keyCode == 37 && direction != 'right') direction = 'left'; //!= direção não pode ser a oposta
    if(event.keyCode == 38 && direction != 'down') direction = 'up'; //!= direção não pode ser a oposta
    if(event.keyCode == 39 && direction != 'left') direction = 'right'; //!= direção não pode ser a oposta
    if(event.keyCode == 40 && direction != 'up') direction = 'down'; //!= direção não pode ser a oposta
}

function iniciarJogo() {
    
    //Direções da Cobrinha
    if(snake [0]. x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake [0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake [0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake [0].y < 0 && direction == 'up') snake[0].y = 16 * box;
    
    //i = 1 -> Começa a partir do corpo
    for (i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Movimento da cobrinha
    if (direction == "right") snakeX += box; //Adiciona quadrado
    if (direction == "left") snakeX -= box; //Diminui quadrado
    if (direction == "up") snakeY -= box; 
    if (direction == "down") snakeY += box; 

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); //Pop -> retira o último elemento da array(lista)
    }
    else{
        food.x = Math.floor(Math.random() * 15 + 1) * box, 
        food.y = Math.floor(Math.random() * 15 + 1) * box   
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //Método unshift -> adiciona como primeiro quadradinho da cobrinha

}

let jogo = setInterval(iniciarJogo, 100); // Intervalo de 100 milliseconds -> renovar jogo -> continua jogo sem travar

let checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function(){
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        }    
}
)
