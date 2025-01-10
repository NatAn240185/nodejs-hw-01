import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const removeLastContact = () => {
  const contacts = readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    writeContacts(contacts);
  }
};

module.exports = removeLastContact;
