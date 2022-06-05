import fs from 'fs/promises';

export const remove = async () => {

    try {
        await fs.rm(new URL('./files/fileToRemove.txt', import.meta.url));
    } catch (e) {
        if (e.code === 'ENOENT') {
            console.error(new Error('FS operation failed'));
        }
    }
};

remove();