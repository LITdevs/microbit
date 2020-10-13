function loader() {
    for (let index = 0; index < 4; index++) {
        sprite.move(1)
        basic.pause(100)
    }
    for (let index2 = 0; index2 < 4; index2++) {
        sprite.move(-1)
        basic.pause(100)
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    radio.sendValue("mc-a", microchat_ID)
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    if (booting == 0) {
        basic.showString(" Your ID: " + convertToText(microchat_ID))
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    radio.sendValue("mc-ab", microchat_ID)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    radio.sendValue("mc-b", microchat_ID)
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    if (booting == 0) {
        if (name == "mc-s") {
            basic.showIcon(IconNames.House)
            basic.pause(1000)
            basic.showString(" -" + convertToText(value))
        } else if (name == "mc-a") {
            basic.showIcon(IconNames.Happy)
            basic.pause(1000)
            basic.showString(" -" + convertToText(value))
        } else if (name == "mc-ab") {
            basic.showIcon(IconNames.Duck)
            basic.pause(1000)
            basic.showString(" -" + convertToText(value))
        } else if (name == "mc-b") {
            basic.showIcon(IconNames.Sad)
            basic.pause(1000)
            basic.showString(" -" + convertToText(value))
        }
        
    }
    
})
let sprite : game.LedSprite = null
let microchat_ID = 0
let booting = 0
booting = 1
let version_number = "9"
radio.sendString("mc-emu")
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.pause(1700)
microchat_ID = randint(1, 99)
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.ForeverInBackground)
basic.showString(" micro:chat v" + version_number)
music.stopMelody(MelodyStopOptions.Background)
sprite = game.createSprite(1, 5)
music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.ForeverInBackground)
for (let index3 = 0; index3 < randint(2, 4); index3++) {
    loader()
}
sprite.delete()
music.stopMelody(MelodyStopOptions.Background)
music.playTone(622, music.beat(BeatFraction.Eighth))
basic.showIcon(IconNames.Yes)
basic.showString(" Your ID: " + convertToText(microchat_ID))
booting = 0
radio.sendValue("mc-s", microchat_ID)
