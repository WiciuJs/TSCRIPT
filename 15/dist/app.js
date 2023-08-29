"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
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
const readAndAnalyzeFile = (filePath) => {
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
            }
            else {
                console.error('Error reading file:', err);
            }
            return;
        }
        console.log('File content:', data);
    });
};
readAndAnalyzeFile(filePath);
