const weatherObject = {
  latitude: -34.625,
  longitude: -58.5,
  generationtime_ms: 1.011967658996582,
  utc_offset_seconds: -10800,
  timezone: 'America/Argentina/Buenos_Aires',
  timezone_abbreviation: '-03',
  elevation: 23,
  current_weather: {
    temperature: 28.1,
    windspeed: 6.3,
    winddirection: 66,
    weathercode: 95,
    time: '2023-03-15T17:00',
  },
  daily_units: {
    time: 'iso8601',
    temperature_2m_max: '°C',
    temperature_2m_min: '°C',
    weathercode: 'wmo code',
    precipitation_probability_mean: '%',
    windspeed_10m_max: 'km/h',
  },
  daily: {
    time: [
      '2023-03-15',
      '2023-03-16',
      '2023-03-17',
      '2023-03-18',
      '2023-03-19',
      '2023-03-20',
      '2023-03-21',
    ],
    temperature_2m_max: [29.1, 28.9, 29.4, 27.7, 27.3, 28.6, 26.3],
    temperature_2m_min: [25.1, 23.4, 23.9, 20.9, 19.8, 22.7, 22.1],
    weathercode: [95, 80, 80, 3, 3, 95, 96],
    precipitation_probability_mean: [90, 29, 16, 19, 32, 61, 58],
    windspeed_10m_max: [8.1, 8.1, 6.5, 16.9, 11.6, 8.2, 12.2],
  },
};

export default weatherObject;
