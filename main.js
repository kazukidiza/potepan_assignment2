/*global $*/
$(function(){
  
  var start = $("#start");
  var stop = $("#stop");
  var reset = $("#reset");
  var timer = $(".timer");
  var hour = 0;
  var min = 0;
  var sec = 0;
  var milSec = 0;
  var interval;

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