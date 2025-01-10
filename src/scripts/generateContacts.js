import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = (count) => {
  const contacts = readContacts();
  for (let i = 0; i < count; i++) {
    contacts.push(createFakeContact());
  }
  writeContacts(contacts);
};

module.exports = generateContacts;

