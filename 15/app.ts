import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, 'textfile.txt');

const generateRandomText = () => {
  const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomText = '';

  for (let i = 0; i < 100; i++) {
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    randomText += possibleCharacters[randomIndex];
  }

  return randomText;
};

const readAndAnalyzeFile = (filePath: string): void => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        const randomText = generateRandomText();
        fs.writeFile(filePath, randomText, (writeErr) => {
          if (writeErr) {
            console.error('Error writing file:', writeErr);
            return;
          }
          console.log('Created and wrote random text to file.');
        });
      } else {
        console.error('Error reading file:', err);
      }
      return;
    }
    console.log('File content:', data);
  });
};

readAndAnalyzeFile(filePath);
