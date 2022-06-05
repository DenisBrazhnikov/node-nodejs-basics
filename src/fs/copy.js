import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const copy = async () => {
    const basePath = path.dirname(fileURLToPath(import.meta.url));

    try {
        await fs.cp(
            path.join(basePath, '/files'),
            path.join(basePath, '/files_copy'),
            {
                errorOnExist: true,
                recursive: true,
                force: false
            }
        );
    } catch (e) {
        if (e.code === 'ERR_FS_CP_EEXIST' || e.code === 'ENOENT') {
            console.error(new Error('FS operation failed'));
        }
    }
};

copy();