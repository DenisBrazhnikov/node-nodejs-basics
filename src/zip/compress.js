import zlib from 'zlib';
import {open} from 'fs/promises';

export const compress = async () => {
    const source = (await open(new URL('./files/fileToCompress.txt', import.meta.url))).createReadStream();
    const destination = (await open(new URL('./files/archive.gz', import.meta.url), 'w+')).createWriteStream();

    source.pipe(zlib.createGzip()).pipe(destination);
};

compress();