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
		-c [CITY] to set the city
		-h to get help
		-t [API_KEY] to save the token
		`
	);
};

const printWeather = (res, icon) => {
	const cityName = chalk.blue(res.name),
		weatherDesc = res.weather[0].description,
		mainTemp = chalk.bold.yellowBright(res.main.temp + 'C'),
		feelsLike = chalk.bold.yellowBright(res.main.feels_like + 'C'),
		maxTemp = chalk.bold.yellowBright(res.main.temp_max + 'C'),
		convertedMaxTemp = chalk.bold.blueBright(convertCelsiusToFahrenheit(res.main.temp_max) + 'F'),
		minTemp = chalk.bold.yellowBright(res.main.temp_min + 'C'),
		convertedMinTemp = chalk.bold.blueBright(convertCelsiusToFahrenheit(res.main.temp_min) + 'F'),
		humidityPercent = res.main.humidity;

	console.log(
		dedent`${chalk.bgMagenta(' WEATHER ')}
		🌎 Weather in ${cityName}
		${icon}  Description: ${weatherDesc}
		${icon}  Temperature: ${mainTemp} / Feels like ${feelsLike}
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