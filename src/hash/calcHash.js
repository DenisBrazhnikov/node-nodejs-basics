import crypto from 'crypto';
import fs from 'fs/promises';

export const calculateHash = async () => {
    const hashSum = crypto.createHash('sha256');

    hashSum.update(await fs.readFile(new URL('./files/fileToCalculateHashFor.txt', import.meta.url)));

    console.log(hashSum.digest('hex'));
};

calculateHash();