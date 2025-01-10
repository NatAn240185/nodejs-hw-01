const createFakeContact = require('../utils/createFakeContact');
const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');

const generateContacts = (count) => {
  const contacts = readContacts();
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }
  writeContacts(contacts);
};

module.exports = generateContacts;

