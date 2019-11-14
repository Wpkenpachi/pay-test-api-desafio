const getAvailableIds = [3992619, 3531732];

const firstWeatherObj = [
  {
    dt: 1489428000,
    temp: {
      day: 288.64,
      min: 285.82,
      max: 288.64,
      night: 285.82,
      eve: 288.64,
      morn: 288.64
    },
    pressure: 997.85,
    humidity: 67,
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04n"
      }
    ],
    speed: 2.96,
    deg: 28,
    clouds: 76,
    uvi: 8.7
  },
  {
    dt: 1489514400,
    temp: {
      day: 293.16,
      min: 285.16,
      max: 296.15,
      night: 287.94,
      eve: 295.56,
      morn: 285.16
    },
    pressure: 1001.17,
    humidity: 64,
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "sky is clear",
        icon: "01d"
      }
    ],
    speed: 6.73,
    deg: 160,
    clouds: 0,
    uvi: 7.59
  },
  {
    dt: 1489600800,
    temp: {
      day: 293.01,
      min: 282.8,
      max: 298.55,
      night: 291.53,
      eve: 298.22,
      morn: 282.8
    },
    pressure: 999.58,
    humidity: 72,
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "sky is clear",
        icon: "01d"
      }
    ],
    speed: 4.81,
    deg: 139,
    clouds: 0,
    uvi: 8.03
  },
  {
    dt: 1489687200,
    temp: {
      day: 295.58,
      min: 289.88,
      max: 299.98,
      night: 294.03,
      eve: 299.98,
      morn: 289.88
    },
    pressure: 980.69,
    humidity: 0,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    speed: 7.14,
    deg: 162,
    clouds: 6,
    rain: 0.86,
    uvi: 7.77
  },
  {
    dt: 1489773600,
    temp: {
      day: 298.11,
      min: 289.45,
      max: 301.36,
      night: 292.87,
      eve: 301.36,
      morn: 289.45
    },
    pressure: 978.1,
    humidity: 0,
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "sky is clear",
        icon: "01d"
      }
    ],
    speed: 5.58,
    deg: 153,
    clouds: 21,
    uvi: 7.75
  },
  {
    dt: 1489860000,
    temp: {
      day: 296.66,
      min: 288,
      max: 300.19,
      night: 293.7,
      eve: 300.19,
      morn: 288
    },
    pressure: 985.34,
    humidity: 0,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    speed: 4.04,
    deg: 123,
    clouds: 29,
    rain: 0.23,
    uvi: 7.16
  },
  {
    dt: 1489946400,
    temp: {
      day: 297,
      min: 288.97,
      max: 299.83,
      night: 295.5,
      eve: 299.83,
      morn: 288.97
    },
    pressure: 983.21,
    humidity: 0,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    speed: 6.3,
    deg: 156,
    clouds: 8,
    rain: 0.26,
    uvi: 7.75
  },
  {
    dt: 1490032800,
    temp: {
      day: 298.15,
      min: 291.47,
      max: 302.35,
      night: 295.81,
      eve: 302.35,
      morn: 291.47
    },
    pressure: 977.28,
    humidity: 0,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    speed: 5.7,
    deg: 156,
    clouds: 5,
    rain: 0.43,
    uvi: 8.36
  },
  {
    dt: 1490119200,
    temp: {
      day: 301.54,
      min: 291.67,
      max: 304.52,
      night: 298.04,
      eve: 304.52,
      morn: 291.67
    },
    pressure: 971.57,
    humidity: 0,
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "sky is clear",
        icon: "01d"
      }
    ],
    speed: 5,
    deg: 158,
    clouds: 7,
    uvi: 8.36
  },
  {
    dt: 1490205600,
    temp: {
      day: 298.61,
      min: 293.63,
      max: 301.45,
      night: 293.63,
      eve: 301.45,
      morn: 294.45
    },
    pressure: 967.7,
    humidity: 0,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    speed: 3.17,
    deg: 134,
    clouds: 95,
    rain: 0.41,
    uvi: 8.36
  },
  {
    dt: 1490292000,
    temp: {
      day: 289.37,
      min: 287.36,
      max: 291.7,
      night: 287.36,
      eve: 291.7,
      morn: 287.81
    },
    pressure: 979.13,
    humidity: 0,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    speed: 6.47,
    deg: 2,
    clouds: 59,
    rain: 0.5,
    uvi: 8.36
  },
  {
    dt: 1490378400,
    temp: {
      day: 286.91,
      min: 282.56,
      max: 287.06,
      night: 282.56,
      eve: 287.06,
      morn: 282.64
    },
    pressure: 983.61,
    humidity: 0,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    speed: 4.84,
    deg: 79,
    clouds: 64,
    rain: 0.58,
    uvi: 8.36
  },
  {
    dt: 1490464800,
    temp: {
      day: 285.87,
      min: 281.35,
      max: 285.87,
      night: 282.92,
      eve: 285.54,
      morn: 281.35
    },
    pressure: 980.74,
    humidity: 0,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    speed: 5.85,
    deg: 126,
    clouds: 80,
    rain: 2.35,
    uvi: 8.36
  },
  {
    dt: 1490551200,
    temp: {
      day: 288.03,
      min: 282.67,
      max: 294.95,
      night: 285.7,
      eve: 294.95,
      morn: 282.67
    },
    pressure: 977.56,
    humidity: 0,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    speed: 1.69,
    deg: 85,
    clouds: 38,
    rain: 1.79,
    uvi: 8.36
  },
  {
    dt: 1490637600,
    temp: {
      day: 293.01,
      min: 281.3,
      max: 296.59,
      night: 292.25,
      eve: 296.59,
      morn: 281.3
    },
    pressure: 974.9,
    humidity: 0,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    speed: 4.66,
    deg: 150,
    clouds: 20,
    rain: 0.32,
    uvi: 8.36
  },
  {
    dt: 1490724000,
    temp: {
      day: 300.85,
      min: 292.43,
      max: 303,
      night: 303,
      eve: 303,
      morn: 292.43
    },
    pressure: 970.41,
    humidity: 0,
    weather: [
      {
        id: 500,
        main: "Rain",
        description: "light rain",
        icon: "10d"
      }
    ],
    speed: 0.17,
    deg: 42,
    clouds: 0,
    rain: 0.7,
    uvi: 8.36
  }
];

const startDateWeather = [
  {
    dt: 1489773600,
    temp: {
      day: 298.11,
      min: 289.45,
      max: 301.36,
      night: 292.87,
      eve: 301.36,
      morn: 289.45
    },
    pressure: 978.1,
    humidity: 0,
    weather: [
      { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
    ],
    speed: 5.58,
    deg: 153,
    clouds: 21,
    uvi: 7.75
  },
  {
    dt: 1489860000,
    temp: {
      day: 296.66,
      min: 288,
      max: 300.19,
      night: 293.7,
      eve: 300.19,
      morn: 288
    },
    pressure: 985.34,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 4.04,
    deg: 123,
    clouds: 29,
    rain: 0.23,
    uvi: 7.16
  },
  {
    dt: 1489946400,
    temp: {
      day: 297,
      min: 288.97,
      max: 299.83,
      night: 295.5,
      eve: 299.83,
      morn: 288.97
    },
    pressure: 983.21,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 6.3,
    deg: 156,
    clouds: 8,
    rain: 0.26,
    uvi: 7.75
  },
  {
    dt: 1490032800,
    temp: {
      day: 298.15,
      min: 291.47,
      max: 302.35,
      night: 295.81,
      eve: 302.35,
      morn: 291.47
    },
    pressure: 977.28,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 5.7,
    deg: 156,
    clouds: 5,
    rain: 0.43,
    uvi: 8.36
  },
  {
    dt: 1490119200,
    temp: {
      day: 301.54,
      min: 291.67,
      max: 304.52,
      night: 298.04,
      eve: 304.52,
      morn: 291.67
    },
    pressure: 971.57,
    humidity: 0,
    weather: [
      { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
    ],
    speed: 5,
    deg: 158,
    clouds: 7,
    uvi: 8.36
  },
  {
    dt: 1490205600,
    temp: {
      day: 298.61,
      min: 293.63,
      max: 301.45,
      night: 293.63,
      eve: 301.45,
      morn: 294.45
    },
    pressure: 967.7,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 3.17,
    deg: 134,
    clouds: 95,
    rain: 0.41,
    uvi: 8.36
  },
  {
    dt: 1490292000,
    temp: {
      day: 289.37,
      min: 287.36,
      max: 291.7,
      night: 287.36,
      eve: 291.7,
      morn: 287.81
    },
    pressure: 979.13,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 6.47,
    deg: 2,
    clouds: 59,
    rain: 0.5,
    uvi: 8.36
  },
  {
    dt: 1490378400,
    temp: {
      day: 286.91,
      min: 282.56,
      max: 287.06,
      night: 282.56,
      eve: 287.06,
      morn: 282.64
    },
    pressure: 983.61,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 4.84,
    deg: 79,
    clouds: 64,
    rain: 0.58,
    uvi: 8.36
  },
  {
    dt: 1490464800,
    temp: {
      day: 285.87,
      min: 281.35,
      max: 285.87,
      night: 282.92,
      eve: 285.54,
      morn: 281.35
    },
    pressure: 980.74,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 5.85,
    deg: 126,
    clouds: 80,
    rain: 2.35,
    uvi: 8.36
  },
  {
    dt: 1490551200,
    temp: {
      day: 288.03,
      min: 282.67,
      max: 294.95,
      night: 285.7,
      eve: 294.95,
      morn: 282.67
    },
    pressure: 977.56,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 1.69,
    deg: 85,
    clouds: 38,
    rain: 1.79,
    uvi: 8.36
  },
  {
    dt: 1490637600,
    temp: {
      day: 293.01,
      min: 281.3,
      max: 296.59,
      night: 292.25,
      eve: 296.59,
      morn: 281.3
    },
    pressure: 974.9,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 4.66,
    deg: 150,
    clouds: 20,
    rain: 0.32,
    uvi: 8.36
  },
  {
    dt: 1490724000,
    temp: {
      day: 300.85,
      min: 292.43,
      max: 303,
      night: 303,
      eve: 303,
      morn: 292.43
    },
    pressure: 970.41,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 0.17,
    deg: 42,
    clouds: 0,
    rain: 0.7,
    uvi: 8.36
  }
];

const endDateWeather = [
  {
    dt: 1489428000,
    temp: {
      day: 288.64,
      min: 285.82,
      max: 288.64,
      night: 285.82,
      eve: 288.64,
      morn: 288.64
    },
    pressure: 997.85,
    humidity: 67,
    weather: [
      { id: 803, main: "Clouds", description: "broken clouds", icon: "04n" }
    ],
    speed: 2.96,
    deg: 28,
    clouds: 76,
    uvi: 8.7
  },
  {
    dt: 1489514400,
    temp: {
      day: 293.16,
      min: 285.16,
      max: 296.15,
      night: 287.94,
      eve: 295.56,
      morn: 285.16
    },
    pressure: 1001.17,
    humidity: 64,
    weather: [
      { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
    ],
    speed: 6.73,
    deg: 160,
    clouds: 0,
    uvi: 7.59
  },
  {
    dt: 1489600800,
    temp: {
      day: 293.01,
      min: 282.8,
      max: 298.55,
      night: 291.53,
      eve: 298.22,
      morn: 282.8
    },
    pressure: 999.58,
    humidity: 72,
    weather: [
      { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
    ],
    speed: 4.81,
    deg: 139,
    clouds: 0,
    uvi: 8.03
  },
  {
    dt: 1489687200,
    temp: {
      day: 295.58,
      min: 289.88,
      max: 299.98,
      night: 294.03,
      eve: 299.98,
      morn: 289.88
    },
    pressure: 980.69,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 7.14,
    deg: 162,
    clouds: 6,
    rain: 0.86,
    uvi: 7.77
  },
  {
    dt: 1489773600,
    temp: {
      day: 298.11,
      min: 289.45,
      max: 301.36,
      night: 292.87,
      eve: 301.36,
      morn: 289.45
    },
    pressure: 978.1,
    humidity: 0,
    weather: [
      { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
    ],
    speed: 5.58,
    deg: 153,
    clouds: 21,
    uvi: 7.75
  },
  {
    dt: 1489860000,
    temp: {
      day: 296.66,
      min: 288,
      max: 300.19,
      night: 293.7,
      eve: 300.19,
      morn: 288
    },
    pressure: 985.34,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 4.04,
    deg: 123,
    clouds: 29,
    rain: 0.23,
    uvi: 7.16
  },
  {
    dt: 1489946400,
    temp: {
      day: 297,
      min: 288.97,
      max: 299.83,
      night: 295.5,
      eve: 299.83,
      morn: 288.97
    },
    pressure: 983.21,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 6.3,
    deg: 156,
    clouds: 8,
    rain: 0.26,
    uvi: 7.75
  },
  {
    dt: 1490032800,
    temp: {
      day: 298.15,
      min: 291.47,
      max: 302.35,
      night: 295.81,
      eve: 302.35,
      morn: 291.47
    },
    pressure: 977.28,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 5.7,
    deg: 156,
    clouds: 5,
    rain: 0.43,
    uvi: 8.36
  },
  {
    dt: 1490119200,
    temp: {
      day: 301.54,
      min: 291.67,
      max: 304.52,
      night: 298.04,
      eve: 304.52,
      morn: 291.67
    },
    pressure: 971.57,
    humidity: 0,
    weather: [
      { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
    ],
    speed: 5,
    deg: 158,
    clouds: 7,
    uvi: 8.36
  }
];

const bothDatesWeather = [
  {
    dt: 1489773600,
    temp: {
      day: 298.11,
      min: 289.45,
      max: 301.36,
      night: 292.87,
      eve: 301.36,
      morn: 289.45
    },
    pressure: 978.1,
    humidity: 0,
    weather: [
      { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
    ],
    speed: 5.58,
    deg: 153,
    clouds: 21,
    uvi: 7.75
  },
  {
    dt: 1489860000,
    temp: {
      day: 296.66,
      min: 288,
      max: 300.19,
      night: 293.7,
      eve: 300.19,
      morn: 288
    },
    pressure: 985.34,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 4.04,
    deg: 123,
    clouds: 29,
    rain: 0.23,
    uvi: 7.16
  },
  {
    dt: 1489946400,
    temp: {
      day: 297,
      min: 288.97,
      max: 299.83,
      night: 295.5,
      eve: 299.83,
      morn: 288.97
    },
    pressure: 983.21,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 6.3,
    deg: 156,
    clouds: 8,
    rain: 0.26,
    uvi: 7.75
  },
  {
    dt: 1490032800,
    temp: {
      day: 298.15,
      min: 291.47,
      max: 302.35,
      night: 295.81,
      eve: 302.35,
      morn: 291.47
    },
    pressure: 977.28,
    humidity: 0,
    weather: [
      { id: 500, main: "Rain", description: "light rain", icon: "10d" }
    ],
    speed: 5.7,
    deg: 156,
    clouds: 5,
    rain: 0.43,
    uvi: 8.36
  },
  {
    dt: 1490119200,
    temp: {
      day: 301.54,
      min: 291.67,
      max: 304.52,
      night: 298.04,
      eve: 304.52,
      morn: 291.67
    },
    pressure: 971.57,
    humidity: 0,
    weather: [
      { id: 800, main: "Clear", description: "sky is clear", icon: "01d" }
    ],
    speed: 5,
    deg: 158,
    clouds: 7,
    uvi: 8.36
  }
];

module.exports = {
  getAvailableIds,
  firstWeatherObj,
  startDateWeather,
  endDateWeather,
  bothDatesWeather
};
