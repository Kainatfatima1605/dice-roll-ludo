function shuffle() {
    let img = document.getElementById("img")
   
    let randomNumber =  Math.floor(Math.random()*6)+1   ;
    console.log(randomNumber);
    img.setAttribute("src",`./img/dice-${randomNumber}.svg`);
}
function dice() {
    setTimeout(shuffle,30)
    let img = document.getElementById("img");
  
    
}


