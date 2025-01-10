import { readContacts } from '../utils/readContacts.js';

const getAllContacts = () => {
  const contacts = readContacts();
  console.log(contacts);
};

module.exports = getAllContacts;

