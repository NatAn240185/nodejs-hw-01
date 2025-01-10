const readContacts = require('./utils/readContacts');
const writeContacts = require('./utils/writeContacts');

const manageContacts = async () => {
    try {
       
        const contacts = await readContacts();
        console.log('Contacts:', contacts);

        contacts.push({ id: 3, name: 'New Contact', phone: '123-456-7890' });

        await writeContacts(contacts);
        console.log('Contacts updated successfully!');
    } catch (error) {
        console.error(error);
    }
};

manageContacts();
const fs = require('fs');
const path = require('path');
const PATH_DB = path.resolve(__dirname, '../db/db.json');

fs.readFile(PATH_DB, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    const contacts = JSON.parse(data);
    console.log(contacts);
});