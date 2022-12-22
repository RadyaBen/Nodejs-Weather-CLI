#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather, getIcon } from './services/api.service.js';
import {
	printHelp,
	printSuccess,
	printError,
	printWeather
} from './services/log.service.js';
import {
	getKeyValue,
	saveKeyValue,
	TOKEN_DICTIONARY
} from './services/storage.service.js';

const saveToken = async (token) => {
	if (!token.length) {
		printError('No token was transferred');
		return;
	}

	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess('The token has been saved');
	} catch (e) {
		printError(e.message);
	}
};

const saveCity = async (city) => {
	if (!city.length) {
		printError('The city hasn\'t been transferred');
		return;
	}

	try {
		await saveKeyValue(TOKEN_DICTIONARY.city, city);
		printSuccess('The city has been saved');
	} catch (e) {
		printError(e.message);
	}
};

const getForcast = async () => {
	try {
		const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
		const weather = await getWeather(city);
		printWeather(weather, getIcon(weather.weather[0].icon));
	} catch (e) {
		if (e?.response?.status === 404) {
			printError('The city was entered incorrectly');
		} else if (e?.response?.status === 401) {
			printError('The token was entered incorrectly')
		} else {
			printError(e.message);
		}
	}
};

const initCLI = () => {
	const args = getArgs(process.argv);

	if (args.h) {
		return printHelp();
	}

	if (args.c) {
		return saveCity(args.c);
	}

	if (args.t) {
		return saveToken(args.t);
	}

	return getForcast();
};

initCLI();