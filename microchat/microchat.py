def loader():
    basic.pause(100)
    basic.show_leds("""
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        # . . . .
        """)
    basic.pause(50)
    basic.show_leds("""
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        # . # . .
        """)
    basic.pause(50)
    basic.show_leds("""
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        # . # . #
        """)
    basic.pause(50)
    basic.show_leds("""
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        """)
    basic.pause(1500)
    basic.show_leds("""
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . . . . .
        """)

def on_button_pressed_a():
    radio.send_value("mc-a", microchat_ID)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    if booting == 0:
        basic.show_string(" Your ID: " + convert_to_text(microchat_ID))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_button_pressed_ab():
    radio.send_value("mc-ab", microchat_ID)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
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

microchat_ID = 0
booting = 0
booting = 1
version_number = "6"
radio.send_string("mc-emu")
basic.show_leds("""
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    """)
microchat_ID = randint(1, 99)
basic.show_string(" micro:chat v" + version_number)
for index in range(randint(2, 4)):
    loader()
basic.show_icon(IconNames.FABULOUS)
booting = 0
basic.show_string(" Your ID: " + convert_to_text(microchat_ID))
radio.send_value("mc-s", microchat_ID)