const writeContacts = require('../utils/writeContacts');

/**
 * Removes all contacts by clearing the db.json file.
 * @returns {Promise<void>}
 */
const removeAllContacts = async () => {
    try {
        // Write an empty array to the file to clear all contacts
        await writeContacts([]);

        console.log('All contacts have been successfully removed.');
    } catch (error) {
        console.error(`Error removing contacts: ${error.message}`);
    }
};

// Execute the function
removeAllContacts();
