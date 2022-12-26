<div align='center'>
	<br>
	<h1>Nodejs-Weather-CLI</h1>
</div>

<!-- PROJECT SHIELDS -->
<div align='center'>

   ![npm](https://img.shields.io/npm/v/cli-weather-forecast?style=flat-square)

</div>

<!-- ABOUT -->
## About
A simple command-line weather tool that allows you to get current weather information about the given location. The application is written in JavaScript and uses the OpenWeatherMap API to fetch weather data for one day.

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/download/)
* [npm](http://npmjs.com)

### Installation

```sh
# Install it globally
$ npm install -g cli-weather-forecast
```

<!-- USAGE -->
## Usage

To use the application, first you need to get an API key from [OpenWeatherMap API](https://openweathermap.org/api/). A free account is all that is needed. Once you have your API key, you can use it to get the weather forecast.

```shell
Usage: 
  $ weather 

Options:
  Without parameters - weather output
  -c [CITY_NAME] Set the city name
  -h             Print this help text
  -t [API_KEY]   Save the API token
```

Example using the weather command:

```
weather -c kiev -t YOUR_API_KEY
```

Optionally, you can omit the API key and city name.
In order to do that, you have to set the environment variables simultaneously.

How to do it in Windows:

```
TOKEN=YOUR_API_KEY 

CITY=YOUR_CITY_NAME
```
