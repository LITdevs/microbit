input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    if (booting == 0) {
        basic.showLeds(`
            . . . # .
            # # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(50)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    if (booting == 0) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(50)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Eighth))
    if (booting == 0) {
        basic.showLeds(`
            . # . . .
            . # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(50)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
let booting = 0
booting = 1
music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.pause(1400)
music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.ForeverInBackground)
basic.showString(" Facey")
music.stopMelody(MelodyStopOptions.Background)
booting = 0
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
