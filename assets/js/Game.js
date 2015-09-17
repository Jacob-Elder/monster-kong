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
    this.player.customParams = {};

    // Controls
    this.cursors = this.input.keyboard.createCursorKeys();

    // On screen controls
    this.createOnscreenControls();

  },

  update: function() {

    this.physics.arcade.collide(this.player, this.platform);
    this.physics.arcade.collide(this.player, this.ground);

    // Controls
    this.player.body.velocity.x = 0;
    if (this.cursors.left.isDown || this.player.customParams.movingLeft) {
      this.player.body.velocity.x = -this.RUNNING_SPEED;
    }
    else if (this.cursors.right.isDown || this.player.customParams.movingRight) {
      this.player.body.velocity.x = this.RUNNING_SPEED;
    }

    if ((this.cursors.up.isDown || this.player.customParams.mustJump) && this.player.body.touching.down) {
      this.player.body.velocity.y = -this.JUMPING_SPEED;
      this.player.customParams.mustJump = false;
    }

  },

  createOnscreenControls: function() {

    this.leftArrow = this.add.button(20, 535, "arrowButton");
    this.leftArrow.alpha = 0.5;

    this.rightArrow = this.add.button(110, 535, "arrowButton");
    this.rightArrow.alpha = 0.5;

    this.actionButton = this.add.button(280, 535, "actionButton");
    this.actionButton.alpha = 0.5;

    // left
    this.leftArrow.events.onInputDown.add(function() {
      this.player.customParams.movingLeft = true;
    }, this);
    this.leftArrow.events.onInputUp.add(function() {
      this.player.customParams.movingLeft = false;
    }, this);

    this.leftArrow.events.onInputOver.add(function() {
      this.player.customParams.movingLeft = true;
    }, this);
    this.leftArrow.events.onInputOut.add(function() {
      this.player.customParams.movingLeft = false;
    }, this);

    // right
    this.rightArrow.events.onInputDown.add(function() {
      this.player.customParams.movingRight = true;
    }, this);
    this.rightArrow.events.onInputUp.add(function() {
      this.player.customParams.movingRight = false;
    }, this);

    this.rightArrow.events.onInputOver.add(function() {
      this.player.customParams.movingRight = true;
    }, this);
    this.rightArrow.events.onInputOut.add(function() {
      this.player.customParams.movingRight = false;
    }, this);

    // jump
    this.actionButton.events.onInputDown.add(function() {
      this.player.customParams.mustJump = true;
    }, this);
    this.actionButton.events.onInputUp.add(function() {
      this.player.customParams.mustJump = false;
    }, this);

  },

};