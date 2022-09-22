input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        # # # # #
        # . . . #
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.showIcon(IconNames.Target)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 1)
    RingbitCar.running_time(RingbitCar.Direction_run.backward, 1)
    basic.pause(500)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 100)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenUp, function () {
    RingbitCar.brake()
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 100; index++) {
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    basic.pause(500)
    basic.clearScreen()
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # . . . #
        . . . . .
        `)
    for (let index = 0; index < 2; index++) {
        RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 50)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 50)
    }
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 800)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.pause(5000)
    basic.clearScreen()
})
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
basic.showIcon(IconNames.Heart)
basic.pause(1000)
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Target)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.clearScreen()
for (let index = 0; index < 4; index++) {
    led.toggle(2, 2)
    basic.pause(500)
}
