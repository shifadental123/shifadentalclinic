import fs from 'fs';
import path from 'path';

function walkDir(dir) {
    fs.readdirSync(dir).forEach(f => {
        const dirPath = path.join(dir, f);
        const isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (f !== 'node_modules' && f !== '.git' && f !== 'dist') walkDir(dirPath);
        } else {
            console.log(dirPath);
        }
    });
}
walkDir('.');
