import fs from 'fs/promises';

export const create = async () => {
    try {
        await fs.writeFile(
            new URL('./files/fresh.txt', import.meta.url),
            'I am fresh and young',
            {
                flag: 'wx'
            }
        );
    } catch (e) {
        if (e.code === 'EEXIST') {
            console.error(new Error('FS operation failed'));
        }
    }
};

create();