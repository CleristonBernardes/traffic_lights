
reset_lights = function(){
  $(".js-traffic-e-w").each(function(index) {
    $(this).removeClass("traffic-red");
    $(this).removeClass("traffic-yellow");
    $(this).addClass("traffic-green");
    $(this).data("light", "G");
  });

  $(".js-traffic-n-s").each(function(index) {
    $(this).removeClass("traffic-green");
    $(this).removeClass("traffic-yellow");
    $(this).addClass("traffic-red");
    $(this).data("light", "R");
  });
}

yellow_light_check = function(){
  QUnit.test( "yellow_light_check", function(assert) {
    //arrange
    init();
    reset_lights();
    var cycle = _4min_30sec / _30sec;
    var $green = $(".traffic-green");
    //act
    for (i = 0; i <= cycle; i++) {
      switch_light();
    }
    // //assert
    assert.ok( $green.hasClass("traffic-yellow"), "Switch from Green to Yellow." );
  });
}


red_light_check = function(){
  QUnit.test( "red_light_check", function(assert) {
    //arrange
    init();
    reset_lights();
    var cycle = _5min / _30sec;
    var $green = $(".traffic-green");
    //act
    for (i = 0; i <= cycle; i++) {
      switch_light();
    }
    //assert
    assert.ok( $green.hasClass("traffic-red"), "Switch from Green to Red." );
  });
}

green_light_check = function(){
  QUnit.test( "red_light_check", function(assert) {
    //arrange
    init();
    reset_lights();
    var cycle = _5min / _30sec;
    var $red = $(".traffic-red");
    //act
    for (i = 0; i <= cycle; i++) {
      switch_light();
    }
    //assert
    assert.ok( $red.hasClass("traffic-green"), "Switch from Red to Green." );
  });
}

double_cycle_check = function(){
  QUnit.test( "double_cycle_check", function(assert) {
    //arrange
    init();
    reset_lights();
    var cycle = (_5min + _5min) / _30sec;
    var $green = $(".traffic-green");
    //act
    for (i = 0; i <= cycle; i++) {
      switch_light();
    }
    //assert
    assert.ok( $green.hasClass("traffic-green"), "Switch from Green to Red and back to Green." );
  });
}

check_log_limit = function(){
  QUnit.test( "check_log_limit", function(assert) {
    //arrange
    init();
    reset_lights();
    var cycle = _30min / _30sec;
    //act
    for (i = 0; i <= cycle; i++) {
      switch_light();
    }
    //assert
    assert.ok( !keep_log, "Switching off the log" );
  });
}

check_log_active = function(){
  QUnit.test( "check_log_limit", function(assert) {
    //arrange
    init();
    reset_lights();
    var cycle = _5min / _30sec;
    //act
    for (i = 0; i <= cycle; i++) {
      switch_light();
    }
    //assert
    assert.ok( keep_log, "Log still on" );
  });
}

check_long_period = function(){
  QUnit.test( "check_long_period", function(assert) {
    //arrange
    init();
    reset_lights();
    var cycle = (7 * 24 * 60 * 60) + _5min / _30sec;
    var $red = $(".traffic-red");
    //act
    for (i = 0; i <= cycle; i++) {
      switch_light();
    }
    //assert
    assert.ok( $red.hasClass("traffic-green"), "7 days stable." );
  });
}

check_timer = function(){
  QUnit.test( "check_log_limit", function(assert) {
    //arrange
    init();
    reset_lights();
    var cycle = (24 * 60 * 60) / _30sec;
    //act
    for (i = 0; i <= cycle; i++) {
      switch_light();
    }
    //assert
    assert.ok( global_timer -30 === (24 * 60 * 60), "Timer stable.");
  });
}
