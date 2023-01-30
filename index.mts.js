import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const runAnimation = () => {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
};
const welcome = async () => {
    let animation = chalkAnimation.rainbow('Now Start Calculation:');
    await runAnimation();
    animation.stop();
    return startAgain();
};
welcome();
const question = async () => {
    const operators = await inquirer.prompt([
        {
            name: 'operator',
            type: 'list',
            message: 'Please Select your Operator: \n',
            choices: [
                'Addition',
                'Subtraction',
                'Multiplication',
                'Division',
                'Power',
            ],
        },
        {
            name: 'number1',
            type: 'number',
            message: 'Enter Your Number 1',
            default: () => 0,
        },
        {
            name: 'number2',
            type: 'number',
            message: 'Enter Your Number 2',
            default: () => 0,
        },
    ]);
    return calculation(operators.operator, operators.number1, operators.number2);
};
const calculation = (isOperator, number1, number2) => {
    let result = 0;
    switch (isOperator) {
        case 'Addition':
            result = number1 + number2;
            console.log(chalk.cyan(`Your Result ${number1} + ${number2} = ${result}`));
            break;
        case 'Subtraction':
            result = number1 - number2;
            console.log(chalk.cyan(`Your Result ${number1} - ${number2} = ${result}`));
            break;
        case 'Multiplication':
            result = number1 * number2;
            console.log(chalk.cyan(`Your Result ${number1} * ${number2} = ${result}`));
            break;
        case 'Division':
            result = number1 / number2;
            console.log(chalk.cyan(`Your Result ${number1} / ${number2} = ${result}`));
            break;
        case 'Power':
            result = number1 ** number2;
            console.log(chalk.cyan(`Your Result ${number1} ** ${number2} = ${result}`));
            break;
        default:
            break;
    }
};
const startAgain = async () => {
    let againCal;
    do {
        await question();
        againCal = await inquirer.prompt({
            type: 'input',
            name: 'restart',
            message: 'Do you want to continue? Press y or n: ',
        });
    } while (againCal.restart === 'y' || againCal.restart === 'Y');
};
