var $ = function(id) {
    return document.getElementById(id);
  };
  var inc = 0;
  var out = 0;
  var str = 'Dossiê da Mariah';
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@$%&';
  var t;
  
  var anim = function() {
    inc++;
    if (inc % 7 === 0 && out < str.length) {
      $('anim').appendChild(document.createTextNode(str[out]));
      out++;
    } else if (out >= str.length) {
      $('shuffle').innerHTML = '';
      removeInterval(t);
    }
    $('shuffle').innerHTML =
      chars[Math.floor(Math.random() * chars.length)];
  };
  t = setInterval(anim, 25);
  $('anim').innerHTML = '';
  
  //Do it again
  function reload() {
    window.location.href = window.location.href;
  }
  document.getElementById('btn').onclick = reload;


  document.addEventListener('DOMContentLoaded',function(event){
    window.onload = function() { 
      
  // array with text to type
    var dataText = [ "O que será?O que será?O que será?O que será?O que será?O que será?O que será?O que será?O que será?O que será?O que será?O que será?O que será?"];
    //text input caret
    var caret = "\u258B";
    
    // type a text
    // keep calling itself until the text is finished
    function type(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to text + caret
        document.querySelector("#text").textContent = text.substring(0, i+1) + caret;
  
        // delay and call this function again for next character
        setTimeout(function() {
          type(text, i + 1, fnCallback)
        }, 70);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 1500);
      }
    }
    // start animation for a text in the dataText array
     function StartAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartAnimation(0);
          }, 1000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
        type(dataText[i], 0, function(){
        // after callback (and whole text has been animated), start next text
        StartAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartAnimation(0);
    }
  });

  function updateTimer() {
    future = Date.parse("may 31, 2023 00:00:00");
 now = new Date();
 diff = future - now;

 days = Math.floor(diff / (1000 * 60 * 60 * 24));
 hours = Math.floor(diff / (1000 * 60 * 60));
 mins = Math.floor(diff / (1000 * 60));
 secs = Math.floor(diff / 1000);

 d = days;
 h = hours - days * 24;
 m = mins - hours * 60;
 s = secs - mins * 60;

 document.getElementById("timer")
  .innerHTML =
  '<div>' + d + '<span>Dias</span></div>' +
  '<div>' + h + '<span>Horas</span></div>' +
  '<div>' + m + '<span>Minutos</span></div>' +
  '<div>' + s + '<span>Segundos</span></div>';
}
setInterval('updateTimer()', 1000);