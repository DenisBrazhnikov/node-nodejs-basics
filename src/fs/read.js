import fs from 'fs/promises';

export const read = async () => {
    try {
        console.log((await fs.readFile(new URL('./files/fileToRead.txt', import.meta.url))).toString());
    } catch (e) {
        if (e.code === 'ENOENT') {
            console.error(new Error('FS operation failed'));
        }
    }
};

read();