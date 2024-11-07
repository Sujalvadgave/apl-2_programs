const fs = require('fs');

// 1. Asynchronous File Reading
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file asynchronously:', err);
    } else {
        console.log('Asynchronous Read File Content:', data);
    }
});

// 2. Synchronous File Reading
try {
    const syncData = fs.readFileSync('sample.txt', 'utf8');
    console.log('Synchronous Read File Content:', syncData);
} catch (err) {
    console.error('Error reading file synchronously:', err);
}

// 3. Asynchronous File Writing
const writeContent = 'This content is written asynchronously into the file!';

fs.writeFile('output.txt', writeContent, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file asynchronously:', err);
    } else {
        console.log('Asynchronous Write File Success!');
    }
});

// 4. Synchronous File Writing
const syncWriteContent = 'This content is written synchronously into the file!';
try {
    fs.writeFileSync('outputSync.txt', syncWriteContent, 'utf8');
    console.log('Synchronous Write File Success!');
} catch (err) {
    console.error('Error writing file synchronously:', err);
}

// 5. Asynchronous File Appending
const appendContent = '\nThis content is appended asynchronously!';

fs.appendFile('output.txt', appendContent, 'utf8', (err) => {
    if (err) {
        console.error('Error appending file asynchronously:', err);
    } else {
        console.log('Asynchronous Append File Success!');
    }
});

// 6. Synchronous File Appending
const syncAppendContent = '\nThis content is appended synchronously!';

try {
    fs.appendFileSync('outputSync.txt', syncAppendContent, 'utf8');
    console.log('Synchronous Append File Success!');
} catch (err) {
    console.error('Error appending file synchronously:', err);
}

// 7. Asynchronous File Deletion
fs.unlink('output.txt', (err) => {
    if (err) {
        console.error('Error deleting file asynchronously:', err);
    } else {
        console.log('Asynchronous File Deletion Success!');
    }
});

// 8. Synchronous File Deletion
try {
    fs.unlinkSync('outputSync.txt');
    console.log('Synchronous File Deletion Success!');
} catch (err) {
    console.error('Error deleting file synchronously:', err);
}
