var gameover = {

	preload: function(){
		game.load.audio('gameovs', 'audio/gameovsou.mp3');
	},

	create: function(){
		gameovs = game.add.audio('gameovs');
		gameovs.play();

		game.stage.backgroundColor = '#000000';

		var finalscoreText = game.add.text(80,200, 'Your score: ' + score, {fontSize: '10px', fill: '#E00'});

		var gameovertxt = game.add.text(50,90, '!!GAME OVER!!', {fontSize: '25px', fill: '#00f'});
                var gameovertxt = game.add.text(50,150, '!!TRY AGAIN!!', {fontSize: '25px', fill: '#00f'});
		game.time.events.add(Phaser.Timer.SECOND * 5, function(){
			score = 0;
			game.state.start('menu');
		});
	}
}
