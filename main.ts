// constants
let max_temp = 50
let max_accel = 1023
let max_light = 255
let max_mg_field = 0
let max_rotation = 360
let max_sound = 255
//  variables
let current_temp = 0
let current_accel = 0
let current_light = 0
let mg_field = 0
let current_rotation = 0
let current_sound = 0
let modes = 6
let mode = 1
basic.forever(function on_forever() {
    let current_temp: number;
    let current_accel: number;
    if (mode == 0) {
        current_temp = input.temperature()
        draw_temp_graph()
    } else if (mode == 1) {
        current_accel = input.acceleration(Dimension.X)
        draw_accel_graph()
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let mode = (mode + 1) % modes
})
function draw_temp_graph() {
    led.plotBarGraph(current_temp, max_temp, true)
}

function draw_accel_graph() {
    led.plotBarGraph(current_accel, max_accel, true)
}

