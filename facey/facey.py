def on_button_pressed_a():
    music.play_tone(262, music.beat(BeatFraction.EIGHTH))
    if booting == 0:
        basic.show_leds("""
            . . . # .
            # # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
        basic.pause(50)
        basic.show_leds("""
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    music.play_tone(262, music.beat(BeatFraction.EIGHTH))
    if booting == 0:
        basic.show_leds("""
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            """)
        basic.pause(50)
        basic.show_leds("""
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    music.play_tone(262, music.beat(BeatFraction.EIGHTH))
    if booting == 0:
        basic.show_leds("""
            . # . . .
            . # . # #
            . . . . .
            # . . . #
            . # # # .
            """)
        basic.pause(50)
        basic.show_leds("""
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
input.on_button_pressed(Button.B, on_button_pressed_b)

booting = 0
booting = 1
music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
basic.show_leds("""
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    """)
basic.pause(1400)
music.start_melody(music.built_in_melody(Melodies.PRELUDE),
    MelodyOptions.FOREVER_IN_BACKGROUND)
basic.show_string(" Facey")
music.stop_melody(MelodyStopOptions.BACKGROUND)
booting = 0
basic.show_leds("""
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    """)