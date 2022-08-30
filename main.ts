input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    strip.showRainbow(randint(1, 360), randint(1, 360))
    strip.setBrightness(255)
})
input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(20, -20)
    basic.pause(1000)
    wuKong.stopAllMotor()
    basic.pause(500)
    wuKong.setAllMotor(0, -20)
    basic.pause(500)
    wuKong.setAllMotor(20, 0)
    basic.pause(500)
    wuKong.setAllMotor(-20, 20)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 189)
        basic.pause(1000)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 87)
        basic.pause(1000)
    }
})
let strip: neopixel.Strip = null
wuKong.setLightMode(wuKong.LightMode.BREATH)
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.setBrightness(1)
