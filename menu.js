var menu = {
	preload: function() {

		game.load.image('menu', 'assets/menu.jpg');
		game.load.image('logo', 'assets/logo.jpg');
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
                          
			var lvltxt1 = game.add.text(35,20, 'Super', {fontSize: '17px', fill: '#ff3'});
			var lvltxt2 = game.add.text(42,20, ' - Mario', {fontSize: '17px', fill: '#00f'});
			var lvltxt3 = game.add.text(33,33, 'Game', {fontSize: '17px', fill: '#ff0'});
			var lvltxt = game.add.text(30, 150, 'Select level :', {fontSize: '12px', fill: '#fff'});
			var click1 = game.add.button(60, 197, 'lvl1', function() {
			game.state.start('lvl1');
			menusong.stop();
		});
		click1.anchor.set(0.5, 0.5);
	}
}
