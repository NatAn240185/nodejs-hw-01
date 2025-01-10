const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');

const removeLastContact = () => {
  const contacts = readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    writeContacts(contacts);
  }
};

module.exports = removeLastContact;
