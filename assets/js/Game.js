MyGame.Game = function(game) {};
MyGame.Game.prototype = {

  init: function() {

    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.physics.arcade.gravity.y = 1000;

    this.RUNNING_SPEED = 180;
    this.JUMPING_SPEED = 550;
  },

  create: function() {

    this.ground = this.add.sprite(0, 520, "ground");
    this.physics.arcade.enable(this.ground);
    this.ground.body.allowGravity = false;
    this.ground.body.immovable = true;    

    this.platform = this.add.sprite(0, 300, "platform");
    this.physics.arcade.enable(this.platform);
    this.platform.body.allowGravity = false;
    this.platform.body.immovable = true;    

  },

  update: function() {



  },

};