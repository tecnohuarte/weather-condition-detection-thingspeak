OLED.init(128, 64)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("HUAWEI P30 lite", "ulises2020")
basic.forever(function () {
    OLED.clear()
    OLED.writeString("Light int. (%): ")
    OLED.writeNum(Environment.ReadLightIntensity(AnalogPin.P1))
    OLED.newLine()
    OLED.writeString("Temperature (C): ")
    OLED.writeNum(Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C))
    OLED.newLine()
    OLED.writeString("Humidity (%): ")
    OLED.writeNum(Environment.octopus_BME280(Environment.BME280_state.BME280_humidity))
    OLED.newLine()
    OLED.writeString("Pressure (hPa): ")
    OLED.writeNum(Environment.octopus_BME280(Environment.BME280_state.BME280_pressure))
    OLED.newLine()
    OLED.writeString("Altitude (m): ")
    OLED.writeNum(Environment.octopus_BME280(Environment.BME280_state.BME280_altitude))
    ESP8266_IoT.connectThingSpeak()
    ESP8266_IoT.setData(
    "04WS3UVDUW8M423E",
    Environment.ReadLightIntensity(AnalogPin.P1),
    Environment.octopus_BME280(Environment.BME280_state.BME280_temperature_C),
    Environment.octopus_BME280(Environment.BME280_state.BME280_humidity),
    Environment.octopus_BME280(Environment.BME280_state.BME280_pressure),
    Environment.octopus_BME280(Environment.BME280_state.BME280_altitude)
    )
    ESP8266_IoT.uploadData()
    basic.pause(60000)
})
