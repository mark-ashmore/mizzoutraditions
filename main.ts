controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    sprites.destroy(main_character, effects.spray, 500)
    pause(500)
    tiles.setCurrentTilemap(tilemap`
        level1
    `)
    main_character = sprites.create(assets.image`
        girl_forward
    `, SpriteKind.Player)
    controller.moveSprite(main_character)
    scene.cameraFollowSprite(main_character)
    obstacle_one = sprites.create(assets.image`
        column
    `, SpriteKind.Enemy)
    obstacle_one.startEffect(effects.trail, 5000)
    obstacle_one.setPosition(0, 0)
    obstacle_one.vx = 40
    obstacle_one.vy = 40
    obstacle_one.setBounceOnWall(true)
    obstacle_two = sprites.create(assets.image`
        column
    `, SpriteKind.Enemy)
    obstacle_two.setPosition(25, 55)
    obstacle_two.vy = -20
    obstacle_two.setBounceOnWall(true)
    obstacle_three = sprites.create(assets.image`
        column
    `, SpriteKind.Enemy)
    obstacle_three.setPosition(25, 85)
    obstacle_three.vx = -10
    obstacle_three.vy = -40
    obstacle_three.setBounceOnWall(true)
    controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed_level_one() {
        
        projectile = sprites.createProjectileFromSprite(assets.image`
            orange
        `, main_character, 50, -15)
        main_character.sayText("It's 100% pulp!!", 500, false)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function on_on_overlap(sprite2: Sprite, otherSprite2: Sprite) {
    game.setGameOverEffect(true, effects.clouds)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_on_overlap2(sprite: Sprite, otherSprite: Sprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
})
let obstacle_three : Sprite = null
let obstacle_two : Sprite = null
let obstacle_one : Sprite = null
let projectile : Sprite = null
let main_character : Sprite = null
//  Start Page routine
tiles.setCurrentTilemap(tilemap`
    StartScreen
`)
main_character = sprites.create(assets.image`
    girl_forward
`, SpriteKind.Player)
main_character.setPosition(0, 110)
animation.runMovementAnimation(main_character, animation.animationPresets(animation.easeRight), 1500, false)
pause(3000)
animation.runMovementAnimation(main_character, animation.animationPresets(animation.easeRight), 1500, false)
pause(3000)
animation.runMovementAnimation(main_character, animation.animationPresets(animation.easeLeft), 1500, false)
pause(3000)
effects.confetti.startScreenEffect(5000)
animation.runMovementAnimation(main_character, animation.animationPresets(animation.shake), 5000, false)
pause(5000)
main_character.sayText("Welcome to Mizzou Traditions!", 3000, true)
pause(3020)
main_character.sayText("We've got a lot of traditions to get to.", 3000, true)
pause(3020)
main_character.sayText("Do you think you've got what it takes?", 3000, true)
pause(3020)
main_character.sayText("Press A to get started!", 5000, false)
