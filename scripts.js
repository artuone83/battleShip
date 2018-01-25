
window.onload = function (){

  showEverything ();
  delay ();
}


function showEverything () {
  let message = document.getElementById('message-area');
  message.style.opacity = ('1');

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
     table.style.opacity ='0';
   }, 4000);
}
