import fs from 'fs/promises';

export const list = async () => {
    try {
        console.log(await fs.readdir(new URL('./files', import.meta.url)));
    } catch (e) {
        if (e.code === 'ENOENT') {
            console.error(new Error('FS operation failed'));
        }
    }
};

list();