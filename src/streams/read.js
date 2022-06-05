import {open} from 'fs/promises';

export const read = async () => {
    const readable = (
        await open(
            new URL('./files/fileToRead.txt', import.meta.url)
        )
    ).createReadStream();

    readable.on('readable', () => {
        let chunk;

        while (null !== (chunk = readable.read())) {
            process.stdout.write(chunk.toString());
        }
    });
};

read();