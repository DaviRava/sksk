class Game {
  constructor() { }

  start() {
    form = new Form();
    form.display();
    player = new Player();

    carro1 = createSprite(width / 2 - 100, height - 100)
    carro1.addImage("carro1IMG", carro1IMG)
    carro1.scale = 0.1

    carro2 = createSprite(width / 2 + 100, height - 100)
    carro2.addImage("carro2IMG", carro2IMG)
    carro2.scale = 0.1

    allCars = [carro1, carro2];

  }

  getState() {
    var gameStateRef = database.ref("gameState")
    gameStateRef.on("value", function (data) {
      gameState = data.val()
    })
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    })
  }

  play() {
    Player.getPlayersInfo()
    this.handleElements()
    if (allPlayers !== undefined) {
      image(pistaIMG, 0, -height * 5, width, height * 6)
      var index = 0
      for (var i in allPlayers) {
        index += 1
        var x = allPlayers[i].positionX
        var y = height - allPlayers[i].positionY
        allCars[index - 1].position.x = x
        allCars[index - 1].position.y = y
        if (index === player.index) {
          stroke("cyan")
          fill("darkgrey")
          ellipse(x, y, 60, 60)
          camera.position.y = allCars[index - 1].position.y

        }
      }

      drawSprites()

      this.handlePlayer()
    }
  }

  handlePlayer() {
    if (keyIsDown(UP_ARROW)) {
      player.positionY += 10
      player.update()

    }
  }

  handleElements() {
    form.hide()
    form.titleImg.position(40, 50)
    form.titleImg.class("gameTitleAfterEffect")

  }
}
