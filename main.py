def on_a_pressed():
    global main_character, obstacle_one, obstacle_two, obstacle_three
    sprites.destroy(main_character, effects.spray, 500)
    pause(500)
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
    
    def on_a_pressed_level_one():
        global projectile
        projectile = sprites.create_projectile_from_sprite(assets.image("""
            orange
        """), main_character, 50, -15)
        main_character.say_text("It's 100% pulp!!", 500, False)
    controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed_level_one)
    
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_overlap(sprite2, otherSprite2):
    game.set_game_over_effect(True, effects.clouds)
    game.game_over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    sprites.destroy(otherSprite, effects.spray, 500)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap2)

obstacle_three: Sprite = None
obstacle_two: Sprite = None
obstacle_one: Sprite = None
projectile: Sprite = None
main_character: Sprite = None
# Start Page routine
tiles.set_current_tilemap(tilemap("""
    StartScreen
"""))
main_character = sprites.create(assets.image("""
    girl_forward
"""), SpriteKind.player)
main_character.set_position(0, 110)
animation.run_movement_animation(main_character,
    animation.animation_presets(animation.ease_right),
    1500,
    False)
pause(3000)
animation.run_movement_animation(main_character,
    animation.animation_presets(animation.ease_right),
    1500,
    False)
pause(3000)
animation.run_movement_animation(main_character,
    animation.animation_presets(animation.ease_left),
    1500,
    False)
pause(3000)
effects.confetti.start_screen_effect(5000)
animation.run_movement_animation(main_character,
    animation.animation_presets(animation.shake),
    5000,
    False)
pause(5000)
main_character.say_text("Welcome to Mizzou Traditions!", 3000, True)
pause(3020)
main_character.say_text("We've got a lot of traditions to get to.", 3000, True)
pause(3020)
main_character.say_text("Do you think you've got what it takes?", 3000, True)
pause(3020)
main_character.say_text("Press A to get started!", 5000, False)