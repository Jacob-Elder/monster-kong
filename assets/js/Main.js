var game = new Phaser.Game(800, 600, Phaser.AUTO, "gameContainer");

game.state.add("Preloader", MyGame.Preloader);
game.state.add("MainMenu", MyGame.MainMenu);
game.state.add("Game", MyGame.Game);

game.state.start("Preloader");