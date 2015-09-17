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

    this.load.image("ground", "img/ground.png");
    this.load.image("platform", "img/platform.png");
    this.load.image("arrowButton", "img/arrowButton.png");
    this.load.image("actionButton", "img/actionButton.png");
    this.load.image("barrel", "img/barrel.png");
    this.load.image("gorilla", "img/gorilla3.png");

    this.load.spritesheet("player", "img/player_spritesheet.png", 28, 30, 5, 1, 1);
    this.load.spritesheet("fire", "img/player_spritesheet.png", 20, 21, 2, 1, 1);

  },

  create: function() {

    this.state.start("MainMenu");
    
  },

};