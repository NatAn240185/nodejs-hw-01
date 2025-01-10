const readContacts = require('../utils/readContacts');

/**
 * Retrieves all contacts from the db.json file and logs them to the console.
 * @returns {Promise<void>}
 */
const getAllContacts = async () => {
    try {
        // Read contacts from the file
        const contacts = await readContacts();

        // Log the contacts to the console
        console.log('Contacts:', contacts);
    } catch (error) {
        console.error(`Error retrieving contacts: ${error.message}`);
    }
};

// Execute the function
getAllContacts();
