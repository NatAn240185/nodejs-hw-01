const fs = require('fs');
const path = require('path');

/**
 * Reads the content of the db.json file and returns it as a JavaScript object.
 * @returns {Promise<any>} A promise that resolves to the parsed content of the file.
 */
const readContacts = () => {
    return new Promise((resolve, reject) => {
        const filePath = path.resolve(__dirname, '../db/db.json');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                return reject(`Error reading file: ${err.message}`);
            }
            try {
                const parsedData = JSON.parse(data);
                resolve(parsedData);
            } catch (parseErr) {
                reject(`Error parsing JSON: ${parseErr.message}`);
            }
        });
    });
};

module.exports = readContacts;
