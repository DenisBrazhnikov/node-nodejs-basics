import {argv} from 'process';

export const parseArgs = () => {
    const outputArray = [];

    argv.slice(2).forEach((value, key) => {
        outputArray.push(key + ' is ' + value);
    })

    console.log(outputArray.join(', '));
};

parseArgs();