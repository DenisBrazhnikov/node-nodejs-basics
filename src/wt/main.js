import {Worker} from 'worker_threads';
import {cpus} from "os";

export const performCalculations = async () => {
    const promises = [];

    const promise = (workerData) => () =>
        new Promise((resolve) => {
            new Worker(new URL('./worker.js', import.meta.url), {
                workerData,
            })
                .on('message', (data) => {
                    resolve({status: 'resolved', data: data});
                })
                .on('error', () => {
                    resolve({status: 'error', data: null});
                });
        });

    for (let n = 0; n < cpus().length; n++) {
        promises.push(promise(n + 10)());
    }

    return Promise.all(promises);
};

performCalculations().then(output => {
    console.log(output);
});