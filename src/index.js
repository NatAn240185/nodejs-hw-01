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