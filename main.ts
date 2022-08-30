input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (luces) {
        luces = 0
        wuKong.setLightMode(wuKong.LightMode.OFF)
    } else {
        luces = 1
        wuKong.setLightMode(wuKong.LightMode.BREATH)
    }
})
input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(21, -21)
    basic.pause(2000)
    wuKong.stopAllMotor()
    basic.pause(500)
    wuKong.setAllMotor(0, -31)
    basic.pause(1000)
    wuKong.setAllMotor(24, 0)
    basic.pause(1000)
    wuKong.setAllMotor(-23, 23)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
        basic.pause(1000)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 131)
        basic.pause(1000)
    }
})
let luces = 0
let strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.showRainbow(randint(1, 360), randint(1, 360))
