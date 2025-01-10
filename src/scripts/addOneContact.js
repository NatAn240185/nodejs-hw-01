import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


const addOneContact = () => {
  const contacts = readContacts();
  contacts.push(createFakeContact());
  writeContacts(contacts);
};

module.exports = addOneContact;
