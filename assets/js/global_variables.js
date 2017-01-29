var interval;
var timer = 0;
var global_timer = -30;
var keep_log = true;

//key period of time
var _4min_30sec = 270;
var _5min = 300
var _30sec = 30;
var _30min = 1800;

init = function(){
  timer = 0;
  global_timer = -30; //setInterval is called when initialized and will set this value to 0 at the very first time
  keep_log = true;
}
