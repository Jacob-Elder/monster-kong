var MyGame = {

};

MyGame.Preloader = function(game) {

};

MyGame.Preloader.prototype = {
  init: function() {

    this.scale.pageAlignHorizontally = true;

  },

  preload: function() {

    this.load.path = "assets/";

  },

  create: function() {

    this.state.start("MainMenu");
    
  },

};