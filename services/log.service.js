import chalk from 'chalk';
import dedent from 'dedent-js';

import { convertCelsiusToFahrenheit } from '../helpers/convertCelsius.js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan(' HELP ')}
		Without parameters - weather output
		-c [CITY_NAME]  Set the city name
		-h              Print this help text
		-t [API_KEY]    Save the API token
		`
	);
};

const printWeather = (res, icon) => {
	const cityName = chalk.blue(res.name),
		weatherDesc = res.weather[0].description,
		mainTemp = chalk.bold.yellowBright(res.main.temp + '°' + 'C'),
		convertedMainTemp = chalk.bold.blueBright(convertCelsiusToFahrenheit(res.main.temp) + '°' + 'F'),
		feelsLike = chalk.bold.yellowBright(res.main.feels_like + '°' + 'C'),
		convertedFeelsLike = chalk.bold.blueBright(convertCelsiusToFahrenheit(res.main.feels_like) + '°' + 'F'),
		maxTemp = chalk.bold.yellowBright(res.main.temp_max + '°' + 'C'),
		convertedMaxTemp = chalk.bold.blueBright(convertCelsiusToFahrenheit(res.main.temp_max) + '°' + 'F'),
		minTemp = chalk.bold.yellowBright(res.main.temp_min + '°' + 'C'),
		convertedMinTemp = chalk.bold.blueBright(convertCelsiusToFahrenheit(res.main.temp_min) + '°' + 'F'),
		humidityPercent = res.main.humidity;

	console.log(
		dedent`${chalk.bgMagenta(' WEATHER ')}
		🌎 Weather in ${cityName}
		${icon}  Description: ${weatherDesc}
		${icon}  Temperature: ${mainTemp} / ${convertedMainTemp}
		${icon}  Feels like ${feelsLike} / ${convertedFeelsLike}
		📈 Maximum temperature: ${maxTemp} / ${convertedMaxTemp}
		📉 Minimum temperature: ${minTemp} / ${convertedMinTemp}
		🌊 Humidity: ${humidityPercent}%
		`
	);
};

export {
	printError,
	printSuccess,
	printHelp,
	printWeather
};