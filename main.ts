let lage_x = 0
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    lage_x = Math.abs(input.acceleration(Dimension.X))
    led.plotBarGraph(
    lage_x,
    1024
    )
    music.ringTone(Math.map(lage_x, 0, 1023, 131, 988))
    music.setVolume(Math.map(lage_x, 0, 1023, 50, 255))
})
