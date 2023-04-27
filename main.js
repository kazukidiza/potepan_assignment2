/*global $*/
$(function(){
  
  let start = $("#start");
  let stop = $("#stop");
  let reset = $("#reset");
  let timer = $(".timer");
  let hour = 0;
  let min = 0;
  let sec = 0;
  let milSec = 0;
  let interval;

  function count(){
    milSec++;
    if(milSec === 10){
      milSec = 0;
      sec++;
    }
    if(sec === 60){
      sec = 0;
      min++;
    }
    if(min === 60){
      min = 0;
      hour++;
    }
    timer.text(`${hour}:${min}:${sec}:${milSec}`);
  }
  
  
  start.click(function(){
    interval = setInterval(count, 100);
    start.prop("disabled", true);
    stop.prop("disabled", false);
    reset.prop("disabled", false);
  });
  
  stop.click(function(){
    clearInterval(interval);
    stop.prop("disabled", true);
    start.prop("disabled", false);
    reset.prop("disabled", false);
  });
  
  reset.click(function(){
    clearInterval(interval);
    hour = 0;
    min = 0;
    sec = 0;
    milSec = 0;
    timer.text(`${hour}:${min}:${sec}:${milSec}`);
    start.prop("disabled", false);
    stop.prop("disabled", true);
    reset.prop("disabled", true);
  });
});