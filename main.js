// Functionize Minecraft Fishing Start Code

//HTML variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");

//fish count variables
  let numCod = 0;
  let numSalmon = 0;
  let numTropical = 0;
  let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
document.getElementById("pacific").addEventListener("change", splecidy);
document.getElementById("sortFish").addEventListener("click", sortFish)

function splecidy () {
  num = document.getElementById("pacific").value;
  for (let q = 0; q < num; q++) {
    fishBtnClicked();
  }
}

function fishBtnClicked() {
 //selected person
 let character = document.getElementById("character-select").value;

 if (character === "steve") {
  //fish with steve
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.7) {
    document.getElementById("result-img").src = "img/Raw-Cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Raw-Cod.png'>"
  } else if (randNum < 0.9) {
    document.getElementById("result-img").src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Raw-salmon.png'>"
  } else if (randNum < 0.95) {
    document.getElementById("result-img").src = "img/Tropical-Fish.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Tropical-Fish.png'>"
  } else {
    document.getElementById("result-img").src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Pufferfish.png'>"
  }
 } else if (character === "alex") {
  //fish with alex
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.1) {
    document.getElementById("result-img").src = "img/Raw-Cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Raw-Cod.png'>"
  } else if (randNum < 0.2) {
    document.getElementById("result-img").src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Raw-salmon.png'>"
  } else if (randNum < 0.5) {
    document.getElementById("result-img").src = "img/Tropical-Fish.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Tropical-Fish.png'>"
  } else {
    document.getElementById("result-img").src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Pufferfish.png'>"
  }
 } else if (character === "villager") {
  //villager
  let randNum = Math.random();
  console.log(randNum);
  if (randNum < 0.26) {
    document.getElementById("result-img").src = "img/Raw-Cod.png";
    numCod++;
    numCodSpan.innerHTML = numCod;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Raw-Cod.png'>"
  } else if (randNum < 0.51) {
    document.getElementById("result-img").src = "img/Raw-Salmon.png";
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Raw-salmon.png'>"
  } else if (randNum < 0.76) {
    document.getElementById("result-img").src = "img/Tropical-Fish.png";
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Tropical-Fish.png'>"
  } else {
    document.getElementById("result-img").src = "img/Pufferfish.png";
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
    document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Pufferfish.png'>"
  }
 }
}

function plus5 () {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

function until200 () {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
}

function sortFish () {
 var a = 0;
document.getElementById("inventory").innerHTML = "" ;
while (numCod > a) {
  document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Raw-Cod.png'>";
  a++;
}
a = 0;
while (numSalmon > a) {
  document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Raw-salmon.png'>"
  a++;
}
a = 0
while (numTropical > a) {
  document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Tropical-fish.png'>"
  a++;
}
a = 0;
while (numPuffer > a) {
  document.getElementById("inventory").innerHTML += "<img class = imgsize src='img/Pufferfish.png'>"
  a++;
}
a = 0;
}