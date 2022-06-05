import path from 'path';
import {release, version} from 'os';
import {createServer} from 'http';

import('./files/c.js');
import {fileURLToPath} from 'url';
import {readFile} from 'fs/promises';

const random = Math.random();

let unknownObject;
let jsonDataPath;
let metaUrl = fileURLToPath(import.meta.url);

jsonDataPath = random > 0.5 ? './files/a.json' : './files/b.json';

unknownObject = JSON.parse(await readFile(new URL(jsonDataPath, import.meta.url), 'utf8'));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${metaUrl}`);
console.log(`Path to current directory is ${path.dirname(metaUrl)}`);

const createMyServer = createServer((_, res) => {
    res.end('Request accepted');
});

