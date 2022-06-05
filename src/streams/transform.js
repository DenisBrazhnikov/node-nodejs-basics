import {open} from 'fs/promises';
import {Transform} from 'stream';

export const transform = async () => {
    const writeable = (
        await open(
            new URL('./files/fileToWrite.txt', import.meta.url), 'w+'
        )
    ).createWriteStream();

    const reverseStream = new Transform({
        transform (data, encoding, callback) {
            const reversedData = data.toString().split("").reverse().join("");
            this.push(reversedData);
            callback();
        }
    });

    process.stdin.pipe(reverseStream).pipe(writeable);
};

transform();