input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.M2)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.M1)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
})
basic.showString("Rayo Mqueen Cachau")
basic.showLeds(`
    # # # # #
    # . # . #
    # # # # #
    . # # # .
    . # # # .
    `)
basic.forever(function () {
	
})
