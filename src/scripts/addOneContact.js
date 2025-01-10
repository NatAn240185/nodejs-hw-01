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
 * Adds a single generated contact to the contacts in db.json.
 * @returns {Promise<void>}
 */
const addOneContact = async () => {
    try {
        // Read existing contacts from the file
        const contacts = await readContacts();

        // Generate one new contact
        const newContact = createFakeContact();

        // Append the new contact to the existing ones
        const updatedContacts = [...contacts, newContact];

        // Write the updated contacts back to the file
        await writeContacts(updatedContacts);

        console.log(`Contact added successfully:`, newContact);
    } catch (error) {
        console.error(`Error adding contact: ${error.message}`);
    }
};

// Execute the function
addOneContact();

