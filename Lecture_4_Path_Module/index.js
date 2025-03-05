import path from 'path';

// join two or more file
const fullPath = path.join('/path', 'index.py', 'file.java');
console.log("files join = ", fullPath);

// absolute path
const absolutePath = path.resolve();
console.log(absolutePath);

// extension name
const extname = path.extname('resume.pdf');
console.log(extname);
