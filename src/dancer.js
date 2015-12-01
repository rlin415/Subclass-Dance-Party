// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  Dancer.prototype.step.call(this, timeBetweenSteps);

  // this one sets the position to some random default point within the body
  Dancer.prototype.setPosition.call(this, top, left);

};

Dancer.prototype = {
  constructor: Dancer,
  step: function(timeBetweenSteps){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    setTimeout(this.step.bind(this, timeBetweenSteps), timeBetweenSteps);
  },
  setPosition: function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  }
};
