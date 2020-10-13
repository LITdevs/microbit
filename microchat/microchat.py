def loader():
    for index in range(4):
        sprite.move(1)
        basic.pause(100)
    for index2 in range(4):
        sprite.move(-1)
        basic.pause(100)

def on_button_pressed_a():
    music.play_tone(262, music.beat(BeatFraction.EIGHTH))
    radio.send_value("mc-a", microchat_ID)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    if booting == 0:
        basic.show_string(" Your ID: " + convert_to_text(microchat_ID))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    music.play_tone(262, music.beat(BeatFraction.EIGHTH))
    radio.send_value("mc-ab", microchat_ID)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    music.play_tone(262, music.beat(BeatFraction.EIGHTH))
    radio.send_value("mc-b", microchat_ID)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_received_value(name, value):
    if booting == 0:
        if name == "mc-s":
            basic.show_icon(IconNames.HOUSE)
            basic.pause(1000)
            basic.show_string(" -" + convert_to_text(value))
        elif name == "mc-a":
            basic.show_icon(IconNames.HAPPY)
            basic.pause(1000)
            basic.show_string(" -" + convert_to_text(value))
        elif name == "mc-ab":
            basic.show_icon(IconNames.DUCK)
            basic.pause(1000)
            basic.show_string(" -" + convert_to_text(value))
        elif name == "mc-b":
            basic.show_icon(IconNames.SAD)
            basic.pause(1000)
            basic.show_string(" -" + convert_to_text(value))
radio.on_received_value(on_received_value)

sprite: game.LedSprite = None
microchat_ID = 0
booting = 0
booting = 1
version_number = "9"
radio.send_string("mc-emu")
music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
basic.show_leds("""
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    """)
basic.pause(1700)
microchat_ID = randint(1, 99)
music.start_melody(music.built_in_melody(Melodies.PRELUDE),
    MelodyOptions.FOREVER_IN_BACKGROUND)
basic.show_string(" micro:chat v" + version_number)
music.stop_melody(MelodyStopOptions.BACKGROUND)
sprite = game.create_sprite(1, 5)
music.start_melody(music.built_in_melody(Melodies.BLUES),
    MelodyOptions.FOREVER_IN_BACKGROUND)
for index3 in range(randint(2, 4)):
    loader()
sprite.delete()
music.stop_melody(MelodyStopOptions.BACKGROUND)
music.play_tone(622, music.beat(BeatFraction.EIGHTH))
basic.show_icon(IconNames.YES)
basic.show_string(" Your ID: " + convert_to_text(microchat_ID))
booting = 0
radio.send_value("mc-s", microchat_ID)