import {workerData, parentPort} from 'worker_threads';

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (n) => {
    return nthFibonacci(n);
};

parentPort.postMessage(sendResult(workerData));