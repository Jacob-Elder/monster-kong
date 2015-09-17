MyGame.MainMenu = function() {};
MyGame.MainMenu.prototype = {

  create: function() {

    this.start();

  },

  start: function() {
    
    this.state.start("Game");

  },

};