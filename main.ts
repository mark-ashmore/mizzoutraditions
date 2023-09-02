controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`orange`, main_character, 50, -15)
    main_character.sayText("It's 100% pulp!!", 500, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite2, otherSprite2) {
    game.setGameOverEffect(true, effects.clouds)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
})
let projectile: Sprite = null
let main_character: Sprite = null
tiles.setCurrentTilemap(tilemap`ColumnLevel`)
main_character = sprites.create(assets.image`girl_forward`, SpriteKind.Player)
controller.moveSprite(main_character)
scene.cameraFollowSprite(main_character)
let obstacle_one = sprites.create(assets.image`column`, SpriteKind.Enemy)
obstacle_one.startEffect(effects.trail, 5000)
obstacle_one.setPosition(0, 0)
obstacle_one.vx = 40
obstacle_one.vy = 40
obstacle_one.setBounceOnWall(true)
let obstacle_two = sprites.create(assets.image`column`, SpriteKind.Enemy)
obstacle_two.setPosition(25, 55)
obstacle_two.vy = -20
obstacle_two.setBounceOnWall(true)
let obstacle_three = sprites.create(assets.image`column`, SpriteKind.Enemy)
obstacle_three.setPosition(25, 85)
obstacle_three.vx = -10
obstacle_three.vy = -40
obstacle_three.setBounceOnWall(true)
