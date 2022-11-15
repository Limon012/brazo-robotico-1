basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        servos.P1.setAngle(180)
    } else if (input.buttonIsPressed(Button.B)) {
        servos.P1.setAngle(0)
    }
})
