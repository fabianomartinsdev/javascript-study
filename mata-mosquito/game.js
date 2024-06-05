let height = 0;
let width = 0;
let lives = 1;
let score = 0;

function adjustSize() {
  height = window.innerHeight;
  width = window.innerWidth;
}

adjustSize();

function randomPosition() {
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (lives > 3) {
      alert("Interromper o jogo GAME OVER");
    } else {
      document.getElementById("hp" + lives).src = "images/coracao_vazio.png";
      lives++;
    }
  }

  let positionX = Math.floor(Math.random() * width) - 80;
  let positionY = Math.floor(Math.random() * height) - 80;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  let mosquito = document.createElement("img");
  mosquito.src = "images/mosquito.png";
  mosquito.className = randomSize() + " " + randomSide();
  mosquito.style.left = positionX + "px";
  mosquito.style.top = positionY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

function randomSize() {
  let sizeClass = Math.floor(Math.random() * 3);

  switch (sizeClass) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

function randomSide() {
  let sideClass = Math.floor(Math.random() * 2);

  switch (sideClass) {
    case 0:
      return "sideA";
    case 1:
      return "sideB";
  }
}
