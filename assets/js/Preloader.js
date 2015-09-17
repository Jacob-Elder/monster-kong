var MyGame = {

};

MyGame.Preloader = function(game) {

};

MyGame.Preloader.prototype = {
  init: function() {

    // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;

  },

  preload: function() {

    this.load.path = "assets/";

  },

  create: function() {

    this.state.start("MainMenu");
    
  },

};