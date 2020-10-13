function loader () {
    for (let index = 0; index < 4; index++) {
        sprite.move(1)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        sprite.move(-1)
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    radio.sendValue("mc-a", microchat_ID)
})
input.onGesture(Gesture.Shake, function () {
    if (booting == 0) {
        basic.showString(" Your ID: " + convertToText(microchat_ID))
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    radio.sendValue("mc-ab", microchat_ID)
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    radio.sendValue("mc-b", microchat_ID)
})
radio.onReceivedValue(function (name, value) {
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
let sprite: game.LedSprite = null
let microchat_ID = 0
let booting = 0
booting = 1
let version_number = "8"
radio.sendString("mc-emu")
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    `)
microchat_ID = randint(1, 99)
basic.showString(" micro:chat v" + version_number)
sprite = game.createSprite(1, 5)
for (let index = 0; index < randint(2, 4); index++) {
    loader()
}
sprite.delete()
basic.showIcon(IconNames.Yes)
basic.showString(" Your ID: " + convertToText(microchat_ID))
booting = 0
radio.sendValue("mc-s", microchat_ID)
