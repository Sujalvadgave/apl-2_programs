const fs = require('fs');
const path = require('path');

// File paths
const inputFile = path.join(__dirname, 'sample.txt');
const outputFile = path.join(__dirname, 'output.txt');
const appendFile = path.join(__dirname, 'outputAppend.txt');

// 1. Create a readable stream from an existing file (asynchronously read)
const readStream = fs.createReadStream(inputFile, 'utf8');

// Handle errors with the readable stream
readStream.on('error', (err) => {
    console.error('Error reading file:', err);
});

// Read the file and log content to the console
readStream.on('data', (chunk) => {
    console.log('Read chunk:', chunk);
});

readStream.on('end', () => {
    console.log('Finished reading file.');
});

// 2. Create a writable stream to a new file (writing data)
const writeStream = fs.createWriteStream(outputFile, 'utf8');

// Handle errors with the writable stream
writeStream.on('error', (err) => {
    console.error('Error writing file:', err);
});

// Write data to the file
const contentToWrite = 'This is a sample content written using a writable stream!';
writeStream.write(contentToWrite, 'utf8', () => {
    console.log('Data written to output.txt successfully.');
});

// End the writable stream
writeStream.end();

// 3. Append data to an existing file using a writable stream
const appendStream = fs.createWriteStream(appendFile, { flags: 'a', encoding: 'utf8' });

// Append content to the file
const contentToAppend = '\nThis is the appended content!';
appendStream.write(contentToAppend, 'utf8', () => {
    console.log('Data appended to outputAppend.txt successfully.');
});

// End the append stream
appendStream.end();

// 4. Pipe data from a readable stream to a writable stream
const pipeStream = fs.createReadStream(inputFile, 'utf8');
const pipeToStream = fs.createWriteStream('pipedOutput.txt', 'utf8');

// Pipe the readable stream directly to the writable stream
pipeStream.pipe(pipeToStream);

// Handle stream errors
pipeToStream.on('error', (err) => {
    console.error('Error piping data:', err);
});

// Log when piping is done
pipeStream.on('end', () => {
    console.log('Data has been piped to pipedOutput.txt');
});

// 5. Handle piping with a transform operation (e.g., convert text to uppercase)
const { Transform } = require('stream');

// Create a custom transform stream that converts data to uppercase
const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

// Pipe the readable stream through the transform stream to modify data
const transformStream = fs.createReadStream(inputFile, 'utf8');
const outputUpperCaseStream = fs.createWriteStream('uppercaseOutput.txt', 'utf8');

transformStream.pipe(upperCaseTransform).pipe(outputUpperCaseStream);

outputUpperCaseStream.on('finish', () => {
    console.log('Data transformed to uppercase and saved to uppercaseOutput.txt');
});
