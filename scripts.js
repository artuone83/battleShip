

window.onload = function (){

  showEverything();
  delay();

}

let hit = 0;

let messageArea = document.getElementById('message-area');
let message = document.getElementById('message');

let fireButton = document.getElementById('fire-btn');
fireButton.addEventListener('click', shipHit);

function reset(){
  if(hit == 3){
    messageArea.style.transform = 'translateY(0)';
    message.innerHTML = 'Wygrałeś! Wszytskie okręty zatopione!';
    messageArea.classList.add('stop');
  }else if(hit == 2) {
    message.innerHTML = 'Został jeszcze jeden okręt!';
  }
}

function shipHit (){
  let coord = document.getElementById('coordinates');
  //coord.preventDefault();
  let guess = coord.value;



  let shipPosition_1 = document.getElementById('A4');
  let shipPosition_2 = document.getElementById('B2');
  let shipPosition_3 = document.getElementById('C6');

  if (guess == shipPosition_1.getAttribute('id')){

  messageArea.style.transform = 'translateY(0)';
  message.innerHTML = 'TRAFIONY!';
  shipPosition_1.classList.add('ship-hit');
  hit++;

  console.log(hit);
  reset();
  /*setInterval( function (){
    messageArea.style.transform = 'translateY(-200%)';
  }, 3000);*/



}else if (guess == shipPosition_2.getAttribute('id')){

  messageArea.style.transform = 'translateY(0)';
  message.innerHTML = 'TRAFIONY!';
  shipPosition_2.classList.add('ship-hit');
  hit++;

  console.log(hit);
  reset();
  /*setInterval( function (){
    messageArea.style.transform = 'translateY(-200%)';
  }, 3000);*/



}else if (guess == shipPosition_3.getAttribute('id')){

  messageArea.style.transform = 'translateY(0)';
  message.innerHTML = 'TRAFIONY!';
  shipPosition_3.classList.add('ship-hit');
  hit++

  console.log(hit);
  reset();
  /*setInterval( function (){
    messageArea.style.transform = 'translateY(-200%)';
  }, 3000);*/



}else if (guess != shipPosition_1 || guess != shipPosition_2 || guess != shipPosition_3 ){

  messageArea.style.transform = 'translateY(0)';
  message.innerHTML = 'PUDŁO!';
  document.getElementById(guess).classList.add('miss');
}
}

function showEverything () {
  //let message = document.getElementById('message-area');
  //message.style.opacity = ('1');

  let showForm = document.getElementById('form');
  showForm.style.opacity = ('1');

  let radar = document.getElementById('battel-ship');
  radar.style.opacity = ('1');
}

function delay (){
  setTimeout(function(){
    let table = document.getElementById('table-show');
    table.classList.add('rotateOut');
   }, 3000);

   setTimeout(function(){
     let table = document.getElementById('table-show');
     table.classList.remove('rotateOut');
     table.style.opacity ='1';
   }, 4000);
}
