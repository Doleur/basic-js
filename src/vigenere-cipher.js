const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(bul) {
        if (bul === undefined) bul = true;
        this.bul = bul;
    }
    encrypt(message, key) {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let encryptWord = '';
        message = message.toUpperCase();
        key = key.toUpperCase();
        for (let i = 0, j = 0; i < message.length; i++) {
            if (message[i].replace(/[^A-Z]/g, '') !== message[i]) {
                encryptWord += message[i];
            } else {
                encryptWord += alphabet.charAt((alphabet.indexOf(message.charAt(i)) + alphabet.indexOf(key.charAt(j % key.length))) % alphabet.length);
                j++;
            }
        }
        return encryptWord;
    }
    decrypt(message, key) {
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let decryptWord = '';
        message = message.toUpperCase();
        key = key.toUpperCase();
        if (!this.bul) message = message.split('').reverse().join('');
        for (let i = 0, j = 0; i < message.length; i++) {
            if (message[i].replace(/[^A-Z]/g, '') !== message[i]) {
                decryptWord += message[i];
            } else {
                decryptWord += alphabet.charAt(((alphabet.indexOf(message.charAt(i)) + alphabet.length) - alphabet.indexOf(key.charAt(j % key.length))) % alphabet.length);
                j++;
            }
        }
        if (!this.bul) decryptWord = decryptWord.split('').reverse().join('');
        return decryptWord;
    }
}
module.exports = VigenereCipheringMachine;