def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
        orange
    """), main_character, 50, -15)
    main_character.say_text("It's 100% pulp!!", 500, False)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite, otherSprite):
    sprites.destroy(otherSprite, effects.spray, 500)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    game.set_game_over_effect(True, effects.clouds)
    game.game_over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

projectile: Sprite = None
obstacle_one: Sprite = None
main_character: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level1
"""))
main_character = sprites.create(assets.image("""
    girl_forward
"""), SpriteKind.player)
controller.move_sprite(main_character)
scene.camera_follow_sprite(main_character)
obstacle_one = sprites.create(assets.image("""
    column
"""), SpriteKind.enemy)
obstacle_one.start_effect(effects.trail, 5000)
obstacle_one.set_position(0, 0)
obstacle_one.vx = 40
obstacle_one.vy = 40
obstacle_one.set_bounce_on_wall(True)
obstacle_two = sprites.create(assets.image("""
    column
"""), SpriteKind.enemy)
obstacle_two.set_position(25, 55)
obstacle_two.vy = -20
obstacle_two.set_bounce_on_wall(True)
obstacle_three = sprites.create(assets.image("""
    column
"""), SpriteKind.enemy)
obstacle_three.set_position(25, 85)
obstacle_three.vx = -10
obstacle_three.vy = -40
obstacle_three.set_bounce_on_wall(True)