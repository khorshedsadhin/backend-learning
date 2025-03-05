import {readFile, writeFile, appendFile, mkdir} from 'fs/promises';

// readFile
const read_file = async (fileName) => {
    try {
        const data = await readFile(fileName, 'utf-8');
        console.log(data);
    } catch (error) {
        console.error(`Error reading file: ${error}`);
    }
};
// read_file('sample.txt');

// createFile
const create_file = async (fileName, content) => {
    await writeFile(fileName, content);
    console.log("File created successfully");
};
// create_file('ai.py', 'this is a testing file');

// add content to file
const append_file = async (fileName, content) => {
    await appendFile(fileName, content);
    console.log("extra content added successfully");
};
// append_file('sample.txt', " This is my extra content");

// create folder/directory
const create_dir = async (dir) => {
    await mkdir(dir, {recursive: true});
};
// create_dir('components');
// create_dir('src/components/java');

