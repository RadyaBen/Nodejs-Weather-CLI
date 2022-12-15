import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
};

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		dedent`${chalk.bgCyan(' HELP ')}
		'Without parameters - weather output'
		'-s [CITY] to set the city'
		-h to get help
		-t [API_KEY] to save tokens
		`
	);
};

export { 
	printError, 
	printSuccess, 
	printHelp 
};