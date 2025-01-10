const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');

/**
 * Generates a fake contact object.
 * Replace this stub with the actual implementation of createFakeContact.
 * @returns {Object} A fake contact object.
 */
const createFakeContact = () => {
    const faker = require('faker');
    return {
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
    };
};

/**
 * Generates the specified number of contacts and appends them to the contacts in db.json.
 * @param {number} count - The number of contacts to generate.
 * @returns {Promise<void>}
 */
const generateContacts = async (count) => {
    try {
        // Read existing contacts from the file
        const contacts = await readContacts();

        // Generate new contacts
        const newContacts = Array.from({ length: count }, createFakeContact);

        // Append the new contacts to the existing ones
        const updatedContacts = [...contacts, ...newContacts];

        // Write the updated contacts back to the file
        await writeContacts(updatedContacts);

        console.log(`${count} contacts successfully added to db.json.`);
    } catch (error) {
        console.error(`Error generating contacts: ${error.message}`);
    }
};

// Run the function with a count passed as an argument (e.g., npm run generate 5)
const count = parseInt(process.argv[2], 10) || 5; // Default to 5 contacts if no argument is provided
generateContacts(count);

