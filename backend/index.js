const path = require('node:path');
const { start } = require('@teletron/magic-mirror-wrapper-node');

async function extensionStart(extensionManager) {
  await start(
    'weather',
    'mm-weather',
    extensionManager,
    path.join(__dirname, '../mm-weather')
  );

  // Add the component configuration
  extensionManager.components.add({
    name: 'weather',
    displayName: 'Weather',
    configuration: {
      fields: [
        {
          attribute: 'weatherProvider',
          type: 'enum',
          options: {
            openweathermap: 'OpenWeatherMap',
            weathergov: 'WeatherGov',
            ukmetofficedatahub: 'Met Office Weather DataHub',
            ukmetoffice: 'Met Office',
            weatherbit: 'Weatherbit',
            envcanda: 'Environment Canada',
            weatherflow: 'Weatherflow',
          },
          initialValue: 'openweathermap',
          required: true,
          label: 'Which weather provider should be used',
          help: 'Different configurations values should be set depending on which provider you choose. See https://docs.magicmirror.builders/modules/weather.html for more information.',
        },
        {
          attribute: 'type',
          type: 'enum',
          options: {
            current: 'Current weather',
            hourly: 'Hourly',
            daily: 'Daily',
            forecast: 'Forecast',
          },
          required: true,
          initialValue: 'current',
          label: 'Which type of weather data should be displayed',
          help: 'The `daily` type is another name for the `forecast` type, and the two are interchangeable.  The `hourly` type is currently only implemented for:  Environment Canada, OpenWeatherMap, and only when `/onecall` is used as the specified endpoint.',
        },
        {
          attribute: 'units',
          type: 'enum',
          options: {
            celsius: 'Celsius',
            default: 'Kelvin',
            imperial: 'Fahrenheit',
          },
          required: false,
          label: 'What unit to use to display the information',
        },
        {
          attribute: 'tempUnits',
          type: 'enum',
          options: {
            celsius: 'Celsius',
            default: 'Kelvin',
            imperial: 'Fahrenheit',
          },
          required: false,
          label: 'What units to use for temperature',
        },
        {
          attribute: 'windUnits',
          type: 'enum',
          options: {
            mps: 'Meters per second',
            kmh: 'Kilometers per second',
            mph: 'Miles per hour',
          },
          required: false,
          label: 'What units to use for wind speed',
        },
        {
          attribute: 'roundTemp',
          type: 'boolean',
          required: false,
          initialValue: false,
          label: 'Round temperature value to nearest integer',
        },
        {
          attribute: 'degreeLabel',
          type: 'boolean',
          required: false,
          label:
            'Show the degree label for your chosen units (Metric = C, Imperial = F, Kelvin = K).',
        },
        {
          attribute: 'updateInterval',
          type: 'number',
          required: false,
          initialValue: 600000,
          label:
            'How often does the content needs to be fetched? (in milliseconds)',
          help: 'Possible values: `1000` - `86400000`  Default value: `600000` (10 minutes)',
        },
        {
          attribute: 'animationSpeed',
          type: 'number',
          required: false,
          initialValue: 1000,
          label: 'Speed of the update animation. (Milliseconds)',
          help: 'Possible values: `0` - `5000`  Default value: `1000` (1 second)',
        },
        {
          attribute: 'timeFormat',
          type: 'enum',
          options: { 24: '24', 12: '12' },
          required: false,
          label: ' Use 12 or 24 hour format',
        },
        {
          attribute: 'showPeriod',
          type: 'boolean',
          required: false,
          label: 'Show the period (am/pm) with 12 hour format',
        },
        {
          attribute: 'showPeriodUpper',
          type: 'boolean',
          required: false,
          label: 'Show the period (AM/PM) with 12 hour format as uppercase',
        },
        {
          attribute: 'lang',
          type: 'text',
          required: false,
          label: 'The language for the days',
          help: 'Possible values: `en`, `nl`, `fr`, etc ...',
        },
        {
          attribute: 'decimalSymbol',
          type: 'text',
          required: false,
          initialValue: '.',
          label:
            ' The decimal symbol to use. Possible values: `.`, `,` or any other symbol.',
        },
        {
          attribute: 'useCorsProxy',
          type: 'boolean',
          required: false,
          label: 'Enable CORS proxy',
          help: 'Some weather modules need a cors proxy to get their api running. Default value is false, except for Environment Canada, there it is enabled by default.',
        },
        {
          attribute: 'onlyTemp',
          type: 'boolean',
          required: false,
          label:
            'Show only current Temperature and weather icon without windspeed, sunset, sunrise time and feels like.',
        },
        {
          attribute: 'useBeaufort',
          type: 'boolean',
          required: false,
          label:
            'Pick between using the Beaufort scale for wind speed or using the default units.',
        },
        {
          attribute: 'showWindDirection',
          type: 'boolean',
          required: false,
          initialValue: true,
          label: ' Show the wind direction next to the wind speed',
        },
        {
          attribute: 'showWindDirectionAsArrow',
          type: 'boolean',
          required: false,
          initialValue: false,
          label: 'Show the wind direction as an arrow instead of abbreviation',
        },
        {
          attribute: 'showHumidity',
          type: 'boolean',
          required: false,
          label: 'Show the current humidity',
        },
        {
          attribute: 'showFeelsLike',
          type: 'boolean',
          required: false,
          initialValue: true,
          label: 'Shows the Feels like temperature weather',
        },
        {
          attribute: 'showSun',
          type: 'boolean',
          required: false,
          initialValue: true,
          label: 'Shows Sunrise and Sunset time',
        },
        {
          attribute: 'colored',
          type: 'boolean',
          required: false,
          label: 'Color code the min and max temperature are color coded',
        },
        {
          attribute: 'showPrecipitationAmount',
          type: 'boolean',
          required: false,
          label: 'Show the amount of rain/snow in the forecast',
        },
        {
          attribute: 'fade',
          type: 'boolean',
          required: false,
          label: 'Fade the future events to black. (Gradient)',
        },
        {
          attribute: 'fadePoint',
          type: 'text',
          required: false,
          initialValue: '0.25',
          label:
            'Where to start the fade? Possible values: `0` (top of the list) - `1` (bottom of list)',
        },
        {
          attribute: 'maxNumberOfDays',
          type: 'number',
          required: false,
          label:
            'How many days of forecast to return. Possible values: `1` - `16`.',
          help: 'This value is optional. By default the weather module will return 5 days.',
        },
        {
          attribute: 'maxEntries',
          type: 'number',
          required: false,
          label:
            'How many entries of an OpenWeatherMap One Call hourly or daily forecast type to return.',
          help: "Possible values: `1` - `48` for `'hourly'` , `1` - `7` for `'daily'`. This value is optional and specifically meant to be used with the OpenWeatherMap provider and its `'/onecall'` endpoint. By default the weather module will return 5 entries. Intended to act as a more generalized of the `maxNumberOfDays` option.",
        },
        {
          attribute: 'ignoreToday',
          type: 'boolean',
          required: false,
          label: "If set to `true`, today's weather will not be displayed",
        },
        {
          attribute: 'apiVersion',
          type: 'text',
          required: false,
          label: 'The OpenWeatherMap API version to use',
          help: 'By default version `2.5` is used',
        },
        {
          attribute: 'apiBase',
          type: 'text',
          required: false,
          label: 'The OpenWeatherMap base URL',
          help: "Openweathermap/weather.gov/Met Office/Met Office Datahub/Weatherbit/Weatherflow: By default `'https://api.openweathermap.org/data/'` is used for openweathermap. The weather.gov base URL.  Possible value: `'https://api.weather.gov/points/'`. The UKMO base URL.  Possible value: `'https://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/'`. The UKMO DataHub base URL. Possible value: `'https://api-metoffice.apiconnect.ibmcloud.com/metoffice/production/v0/forecasts/point/'`. The Weatherbit base URL. Possible value: `https://api.weatherbit.io/v2.0`. The Weatherflow base URL. Possible value: `https://swd.weatherflow.com/swd/rest/`",
        },
        {
          attribute: 'weatherEndpoint',
          type: 'text',
          required: false,
          label: 'The OpenWeatherMap API endPoint',
          help: "`'/weather'` , `'/onecall'` , `'/forecast'` (free users) or `'/forecast/daily'` (paying users or old apiKey only)  Default value: `'/weather'`",
        },
        {
          attribute: 'locationID',
          type: 'text',
          required: false,
          label:
            'Location ID from OpenWeatherMap: (https://openweathermap.org/find)',
          help: 'Openweathermap/Met Office: This will override anything you put in location. Leave blank if you want to use location. Example: `1234567`, Default value: `false`. Note: When the `location` and `locationID` are both not set, the location will be based on the information provided by the calendar module. The first upcoming event with location data will be used. Met Office: The UKMO API location code.  Possible values: `322942`',
        },
        {
          attribute: 'location',
          type: 'text',
          required: false,
          label: 'The location used for weather information',
          help: "Openweathermap/Environment Canada: Example: `'Amsterdam,Netherlands'`  Default value: `false`  Note: When the `location` and `locationID` are both not set, the location will be based on the information provided by the calendar module. The first upcoming event with location data will be used. Environment Canada: The free-format text string intended to hold a location name (e.g. city) that should appear in the module header.  Example: `location: 'Toronto, ON'`",
        },
        {
          attribute: 'lat',
          type: 'text',
          required: false,
          label: 'Latitude of the location used for weather information',
          help: "Openweathermap/weather.gov/Met Office Datahub/Weatherbit: Example: `40.7128`  Default value: `0`  Note: Latitude and longitude are REQUIRED if `weatherEndpoint` is set to `'/onecall'`. The `locationID` and `location` options are ignored when the OpenWeatherMap One Call API is used.",
        },
        {
          attribute: 'lon',
          type: 'text',
          required: false,
          label: ' Longitude of the location used for weather information',
          help: "Openweathermap/weather.gov/Met Office Datahub/Weatherbit: Example: `-74.0060`  Default value: `0`  Note: Latitude and longitude are REQUIRED if `weatherEndpoint` is set to `'/onecall'`. The `locationID` and `location` options are ignored when the OpenWeatherMap One Call API is used.",
        },
        {
          attribute: 'apiKey',
          type: 'text',
          required: false,
          label: "The providers' API key",
          help: 'Openweathermap/Met Office/Met Office Datahub/Weatherbit: This can be obtained by creating an OpenWeatherMap account, https://home.openweathermap.org. Or the UK Met Office, https://www.metoffice.gov.uk/datapoint/getting-started, API key, which can be obtained by creating an UKMO Datapoint account. Your API key (MetOffice API ClientID). See the Getting Started, https://metoffice.apiconnect.ibmcloud.com/metoffice/production/start, guide on the Met Office website for creating a new account. The Weatherbit API, https://www.weatherbit.io key which can be obtained by creating an WeatherBit account',
        },
        {
          attribute: 'apiSecret',
          type: 'text',
          required: false,
          label: 'Your API secret (MetOffice API ClientSecret)',
        },
        {
          attribute: 'weatherEndpoint',
          type: 'text',
          required: false,
          label:
            ' The Weatherbit API endPoint. Possible values: `/current`, `/forecast/daily`  This value is REQUIRED ',
        },
        {
          attribute: 'siteCode',
          type: 'text',
          required: false,
          label:
            'The city/town unique identifier for which weather is to be displayed.',
          help: "Environment Canada: Example: `siteCode: 's0000458'` is the value for Toronto, Ontario  To determine the `siteCode` value for a Canadian city/town, look at the Environment Canada document at https://dd.weather.gc.ca/citypage_weather/docs/site_list_en.csv (or site_list_fr.csv). There you will find a table with city/town names you can search under column B (English Names), with the corresponding `siteCode` under column A (Codes)",
        },
        {
          attribute: 'provCode',
          type: 'text',
          required: false,
          label:
            'The 2-character province code for the selected city/town `siteCode`.',
          help: "Environment Canada: Example: `provCode: 'ON'` is the value for Toronto, Ontario  To determine the `provCode` value for a Canadian city/town, look at the Environment Canada document at https://dd.weather.gc.ca/citypage_weather/docs/site_list_en.csv (or site_list_fr.csv). There you will find a table with city/town names you can search under column B (English Names), with the corresponding `provCode` under column C (Province) - and of course the `siteCode` under column A (Codes)",
        },
        {
          attribute: 'siteCode',
          type: 'text',
          required: false,
          label:
            'The city/town unique identifier for which weather is to be displayed.',
          help: "Example: `siteCode: 's0000458'` is the value for Toronto, Ontario  To determine the `siteCode` value for a Canadian city/town, look at the Environment Canada document at https://dd.weather.gc.ca/citypage_weather/docs/site_list_en.csv (or site_list_fr.csv). There you will find a table with city/town names you can search under column B (English Names), with the corresponding `siteCode` under column A (Codes).",
        },
        {
          attribute: 'provCode',
          type: 'text',
          required: false,
          label:
            'The 2-character province code for the selected city/town `siteCode`.',
          help: "Example: `provCode: 'ON'` is the value for Toronto, Ontario  To determine the `provCode` value for a Canadian city/town, look at the Environment Canada document at https://dd.weather.gc.ca/citypage_weather/docs/site_list_en.csv (or site_list_fr.csv). There you will find a table with city/town names you can search under column B (English Names), with the corresponding `provCode` under column C (Province) - and of course the `siteCode` under column A (Codes).",
        },
        {
          attribute: 'token',
          type: 'text',
          required: false,
          label:
            'The Weatherflow API token, https://weatherflow.github.io/Tempest/api/, which can be obtained in the webapp of Weatherflow.',
        },
        {
          attribute: 'stationid',
          type: 'text',
          required: false,
          label:
            'The id of your weatherflow station from wich you want to show the data. This also can be obtained in the webapp of Weatherflow',
        },
      ],
    },
  });

  // Tell Teletron where to read the web scripts, the folder is ./web in this example. The second parameter is the files to load.
  // web.umd.js is the umd version of the @teletron/magic-mirror-wrapper-web, web.js is the custom initialization script, and web.css
  // is the css file, also from the @teletron/magic-mirror-wrapper-web package.
  extensionManager.assets(path.join(__dirname, '../web'), [
    'web.umd.js',
    'web.js',
    'web.css',
  ]);
}

module.exports = extensionStart;
