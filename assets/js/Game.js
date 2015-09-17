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

    this.player = this.add.sprite(100, 200, "player", 3);
    this.player.anchor.setTo(0.5);
    this.player.animations.add("walking", [0, 1, 2, 1], 6, true);
    this.physics.arcade.enable(this.player);

    // Controls
    this.cursors = this.input.keyboard.createCursorKeys();

  },

  update: function() {


    // Controls
    this.player.body.velocity.x = 0;
    if (this.cursors.left.isDown) {
      this.player.body.velocity.x = -this.RUNNING_SPEED;
    }
    else if (this.cursors.right.isDown) {
      this.player.body.velocity.x = this.RUNNING_SPEED;
    }

    if(this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.body.velocity.y = -this.JUMPING_SPEED;
    }

  },

};