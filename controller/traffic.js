
switch_light = function(params, done){

  global_timer += (global_timer <= Number.MAX_VALUE) ? _30sec : 0;
  keep_log = (global_timer < _30min);

  //only consider from 30 seconds before a cicle
  if (timer < _4min_30sec){
    timer += _30sec;
    return done(err);
  }
  north_south = {};
  east_west = {};
  ns_light = params.ns_light; // $ns.data("light");
  ew_light = params.ew_light;
  if (ns_light === "G" && timer === _4min_30sec){
    north_south.light = "Y";
    north_south.class = "traffic-yellow";
    // $ns.data("light", "Y");
    // $ns.removeClass("traffic-green").addClass("traffic-yellow");
  }
  else if (ns_light === "Y" && timer === _5min){
    north_south.light = "R";
    north_south.class = "traffic-red";
  }
  else if (ns_light === "R" && timer === _5min){
    north_south.light = "G";
    north_south.class = "traffic-green";
  }
  if (keep_log && ns_light !==$ns.data("light"))
    console.debug(new Date()+" -> N-S trafic switched from " + ns_light + " to " + north_south.light);

  if (ew_light === "G" && timer === _4min_30sec){
    east_west.light = "Y";
    east_west.class = "traffic-yellow";
  }
  else if (ew_light === "Y" && timer === _5min){
    east_west.light = "R";
    east_west.class = "traffic-red";
  }
  else if (ew_light === "R" && timer === _5min){
    east_west.light = "G";
    east_west.class = "traffic-green";
  }

  if (keep_log && ew_light !== $ew.data("light"))
    console.debug(new Date()+" -> E-W trafic switched from " + ew_light + " to " + east_west.light);

  if (timer === _5min)
    timer = _30sec; //restarting the cicle
  else
    timer += _30sec;

  
}


module.export = {
  switch_light
}
