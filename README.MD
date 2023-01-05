# Magic Mirror Weather extension

This extension is a wrapper around the Magic Mirror [weather module](https://docs.magicmirror.builders/modules/weather.html).

All credits for its implementation go to its original author(s). Read the software's [copyright notice](https://github.com/MichMich/MagicMirror/blob/master/LICENSE.md). More information on the module can be found in the [MagicMirror docs](https://docs.magicmirror.builders/modules/clock.html).

This extension wraps the Magic Mirror weather module to work with [Teletron](https://www.teletron.me) as an extension.

![current weather](docs/weather_current.png)

An example of the current weather

![forecast weather](docs/weather_forecast.png)

An example of the weather forecast

## Features

This weather extension has an extended array of features. It can:

1. Use different providers as the source
   1. OpenWeatherMap
   2. WeatherGov
   3. Met Office Weather DataHub
   4. Met Office
   5. Weatherbit,
   6. Environment Canada
   7. Weatherflow
2. Show current weather, hourly forecast, general forecast
3. Display information in metric or imperial units
4. Customizable list information to display (wind, humidity, wind chill)

# Providers

The [Magic Mirror configuration page](https://docs.magicmirror.builders/modules/weather.html#configuration-options) provides
extended information on the configuration options for each provider.

Below is some more provider specific information.

## Environment Canada

It supports Canadian locations only.

When using the `type: "forecast"` config, the module can display a max of 6 days (Today + the next 5 days). The forecast for each day reflects the daytime forecast. The Today forecast is a special case that will reflect the daytime forecast until late afternoon, after which Today will be reflecting the nightime forecast for the current day.

When using the `type: "hourly"` config, the module can display a max of 24 hours.
