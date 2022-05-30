input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
})
input.onButtonPressed(Button.B, function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(100)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(100)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(5000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
    basic.pause(100)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
})
basic.showString("Rayo Mqueen Cachau")
basic.showLeds(`
    # # # # #
    # . # . #
    # # # # #
    . # # # .
    . # # # .
    `)
