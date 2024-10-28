#constants
max_temp = 50
max_accel = 1023
max_light = 255
max_mg_field = 0
max_rotation = 360
max_sound = 255

# variables
current_temp = 0
current_accel = 0
current_light = 0
mg_field = 0
current_rotation = 0
current_sound = 0

modes = 6
mode = 1

def on_forever():
    if mode == 0:
        current_temp = input.temperature()
        draw_temp_graph()
    elif mode == 1:
        current_accel = input.acceleration(Dimension.X)
        draw_accel_graph()
basic.forever(on_forever)

def on_button_pressed_a():
    mode = (mode + 1) % modes
input.on_button_pressed(Button.A, on_button_pressed_a)

def draw_temp_graph():
    led.plot_bar_graph(current_temp, max_temp, True)

def draw_accel_graph():
    led.plot_bar_graph(current_accel, max_accel, True)
