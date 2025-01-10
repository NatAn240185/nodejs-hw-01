const readContacts = require('../utils/readContacts');

/**
 * Counts the number of contacts in the db.json file and logs the result.
 * @returns {Promise<void>}
 */
const countContacts = async () => {
    try {
        // Read contacts from the file
        const contacts = await readContacts();

        // Count the number of contacts
        const count = contacts.length;

        // Log the count to the console
        console.log(`Total number of contacts: ${count}`);
    } catch (error) {
        console.error(`Error counting contacts: ${error.message}`);
    }
};

// Execute the function
countContacts();
