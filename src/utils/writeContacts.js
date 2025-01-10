const fs = require('fs');
const path = require('path');

/**
 * Writes the provided data to the db.json file.
 * @param {any} data - The data to write to the file.
 * @returns {Promise<void>} A promise that resolves when the write operation completes.
 */
const writeContacts = (data) => {
    return new Promise((resolve, reject) => {
        const filePath = path.resolve(__dirname, '../db/db.json');
        const jsonData = JSON.stringify(data, null, 2); // Pretty format for readability
        fs.writeFile(filePath, jsonData, 'utf8', (err) => {
            if (err) {
                return reject(`Error writing to file: ${err.message}`);
            }
            resolve();
        });
    });
};

module.exports = writeContacts;
