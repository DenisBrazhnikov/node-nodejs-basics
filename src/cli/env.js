import {env} from 'process';

export const parseEnv = () => {
    const outputArray = [];

    Object.keys(env)
        .filter(key => {
            return key.startsWith('RSS');
        })
        .forEach(key => {
            outputArray.push(key + '=' + env[key]);
        })

    console.log(outputArray.join('; '));
};

parseEnv();