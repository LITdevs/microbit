function loader () {
    basic.pause(100)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        # . # . .
        `)
    basic.pause(50)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        # . # . #
        `)
    basic.pause(50)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1500)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . . . . .
        `)
}
input.onButtonPressed(Button.A, function () {
    radio.sendValue("mc-a", microchat_ID)
})
input.onGesture(Gesture.Shake, function () {
    if (booting == 0) {
        basic.showString(" Your ID: " + convertToText(microchat_ID))
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("mc-ab", microchat_ID)
})
input.onButtonPressed(Button.B, function () {
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
let microchat_ID = 0
let booting = 0
booting = 1
let version_number = "7"
radio.sendString("mc-emu")
basic.showLeds(`
    # . . . #
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    `)
microchat_ID = randint(1, 99)
basic.showString(" micro:chat v" + version_number)
for (let index = 0; index < randint(2, 4); index++) {
    loader()
}
basic.showIcon(IconNames.Fabulous)
basic.showString(" Your ID: " + convertToText(microchat_ID))
booting = 0
radio.sendValue("mc-s", microchat_ID)
