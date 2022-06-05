import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const rename = async () => {
    const basePath = path.dirname(fileURLToPath(import.meta.url));

    try {
        await fs.rename(
            path.join(basePath, '/files', 'wrongFileName.txt'),
            path.join(basePath, '/files', 'properFilename.md')
        );
    } catch (e) {
        if (e.code === 'ENOENT') {
            console.error(new Error('FS operation failed'));
        }
    }
};

rename();