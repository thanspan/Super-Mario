var menu = {
	preload: function() {

		game.load.image('menu', 'assets/menu.jpg');
		game.load.image('lvl1', 'assets/lvl1.png');
		game.load.audio('menusong', 'audio/menusong.mp3');
		},
		
		create: function() {
		
			menusong = game.add.audio('menusong');
			menusong.play();

			game.scale.pageAlignHorizontally = true;
			game.scale.pageAlignVertically = true;
			game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			game.physics.startSystem(Phaser.Physics.ARCADE);
			
			var menuimage = game.add.sprite(8, 8, 'menu');

			var lvltxt = game.add.text(38, 150, 'level 1', {fontSize: '12px', fill: #FFFFFF'});
			var click1 = game.add.button(60, 197, 'lvl1', function() {
			game.state.start('lvl1');
			menusong.stop();
		});
		click1.anchor.set(0.5, 0.5);
	}
}
