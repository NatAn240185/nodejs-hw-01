const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');

/**
 * Removes the last contact from the db.json file.
 * @returns {Promise<void>}
 */
const removeLastContact = async () => {
    try {
        // Read existing contacts from the file
        const contacts = await readContacts();

        // Check if the array is not empty
        if (contacts.length === 0) {
            console.log('No contacts to remove.');
            return;
        }

        // Remove the last contact
        const updatedContacts = contacts.slice(0, -1);

        // Write the updated contacts back to the file
        await writeContacts(updatedContacts);

        console.log('Last contact has been successfully removed.');
    } catch (error) {
        console.error(`Error removing the last contact: ${error.message}`);
    }
};

// Execute the function
removeLastContact();
