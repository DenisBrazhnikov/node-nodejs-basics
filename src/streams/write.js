import {open} from 'fs/promises';

export const write = async () => {
    const writeable = (
        await open(
            new URL('./files/fileToWrite.txt', import.meta.url), 'w+'
        )
    ).createWriteStream();

    process.stdin.on('data', (buff) => {
        writeable.write(buff);
    });
};

write();