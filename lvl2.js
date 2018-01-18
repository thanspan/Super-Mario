var lvl2 ={

preload: function() {
            
            this.load.audio('pipesound','audio/pipe.wav');
            this.load.audio('deathsound','audio/death.mp3');
            this.load.audio('jumpsound','audio/jump.wav');
            this.load.audio('music','audio/xasma.mp3');
			this.load.audio('coinsound','audio/coin.wav');
			this.load.audio('doorsound','audio/stomp.wav');
			
			//We need this because the assets are on github pages
			//Remove the next 2 lines if running locally
			this.load.baseURL = ' https://thanspan.github.io/Super-Mario/';
			this.load.crossOrigin = 'anonymous';
		        this.load.image('live','assets/images.png');
		        this.load.spritesheet('tiles', 'assets/super_mario_tiles1.png', 16,16);
			this.load.spritesheet('goomba', 'assets/goomba1.png', 16, 16);
			this.load.spritesheet('enemy', 'assets/enemyb.png', 16, 16);
			this.load.spritesheet('mario', 'assets/mario.png', 16, 16);
			this.load.spritesheet('coin', 'assets/coin1.png', 16, 16);
	                this.load.image('door', 'assets/door.png',16,16);
			this.load.tilemap('level', 'assets/super_mario_map2.json', null,
					Phaser.Tilemap.TILED_JSON);
		        },
			
create : function(){
                        musicbs = game.add.audio('music');
		        musicbs.play();
			Phaser.Canvas.setImageRenderingCrisp(game.canvas)
			
			game.stage.backgroundColor = 	'#5c94fc';
                        pipesound = game.add.audio('pipesound');
			
			map = game.add.tilemap('level');
			map.addTilesetImage('tiles', 'tiles');
			map.setCollisionBetween(3, 12, true, 'solid');
			//map.setCollisionBetween(3, 12, true, 'pipe');
			map.createLayer('background');
           
			layer = map.createLayer('solid');
                        layer.resizeWorld();
			pipe = map.createLayer('pipe');
			//pipe.resizeWorld();
			
			coins = game.add.group();
			coins.enableBody = true;
			map.createFromTiles(2, null, 'coin', 'stuff', coins);
			coins.callAll('animations.add', 'animations', 'spin',
								[ 0, 0, 1, 2 ], 3, true);
			coins.callAll('animations.play', 'animations', 'spin');
			goombas = game.add.group();
			goombas.enableBody = true;
			map.createFromTiles(1, null, 'goomba', 'stuff', goombas);
			goombas.callAll('animations.add', 'animations', 'walk', [ 0, 1 ],
					2, true);
			goombas.callAll('animations.play', 'animations', 'walk');
			goombas.setAll('body.bounce.x', 1);
			goombas.setAll('body.velocity.x', -20);
			goombas.setAll('body.gravity.y', 500);
	
	                door = game.add.group();
		        door.enableBody = true;
		        map.createFromTiles(3, null, 'door', 'stuff', door);
	
			enemy = game.add.group();
			enemy.enableBody = true;
			map.createFromTiles(1, null, 'enemy', 'enemy', enemy);
			enemy.callAll('animations.add', 'animations', 'walk', [ 0, 1 ],2, true);
			enemy.callAll('animations.play', 'animations', 'walk');
			enemy.setAll('body.bounce.x', 1);
			enemy.setAll('body.velocity.x', -20);
			enemy.setAll('body.gravity.y', 500);
	game.physics.arcade.enable(player);
	                player = game.add.sprite(16, game.world.height - 48, 'mario');
			
			player.body.gravity.y = 370;
			player.body.collideWorldBounds = true;
			player.animations.add('walkRight', [ 1, 2, 3 ], 10, true);
			player.animations.add('walkLeft', [ 8, 9, 10 ], 10, true);
			player.goesRight = true;
			 
	                 game.camera.follow(player);
			 scoretxt = game.add.text(16, 16, 'Score: 0', { fontSize: '10px', fill: '#000' });
                         scoretxt.fixedToCamera = true;
			cursors = game.input.keyboard.createCursorKeys();
                        livesimg=game.add.sprite(140,15,'live');
                        livesco=game.add.text(158,20,'x '+lives,{font:'30px',fontSize: '10px',  fill:'black'});
			livesco.fixedToCamera=true;
			livesimg.fixedToCamera=true;
	
	var style5 = { font: "bold 80px Roman", fill: "#4bb84b", boundsAlignH: "center", boundsAlignV: "middle" };
		var	lvltext = game.add.text(280, 100, "CONGRATULATIONS", style5);
		var	lvltext = game.add.text(280, 150, "NEXT STAGE", style5);
			
			
		},
    update: function() {
			game.physics.arcade.collide(player, layer);
			game.physics.arcade.collide(goombas, layer);
			game.physics.arcade.collide(enemy, layer);
			game.physics.arcade.collide(player,pipe,pipeOverlap);
			game.physics.arcade.overlap(player, goombas, goombaOverlap);
			game.physics.arcade.overlap(player, coins, coinOverlap);
			game.physics.arcade.overlap(player,enemy, enemyOverlap);
	                game.physics.arcade.collide(player,door,doorcollide);
			 game.physics.arcade.enable(player);
	  
	                if (player.body.enable) {
				player.body.velocity.x = 0;
				if (cursors.left.isDown) {
					player.body.velocity.x = -90;
					player.animations.play('walkLeft');
					player.goesRight = false;
				} else if (cursors.right.isDown) {
					player.body.velocity.x = 90;
					player.animations.play('walkRight');
					player.goesRight = true;
				} else {
					player.animations.stop();
					if (player.goesRight)
						player.frame = 0;
					else
						player.frame = 7;
				}
				if (cursors.up.isDown && player.body.onFloor()) {
					this.jump = this.add.audio('jumpsound');
					this.jump.play();
					
					player.body.velocity.y = -190;
					player.animations.stop();
				}
				if (player.body.velocity.y != 0) {
					if (player.goesRight)
						player.frame = 5;
					else
						player.frame = 12;
				}
			}
		} 
}

