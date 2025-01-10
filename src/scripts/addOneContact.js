const createFakeContact = require('../utils/createFakeContact');
const readContacts = require('../utils/readContacts');
const writeContacts = require('../utils/writeContacts');

const addOneContact = () => {
  const contacts = readContacts();
  contacts.push(createFakeContact());
  writeContacts(contacts);
};

module.exports = addOneContact;
