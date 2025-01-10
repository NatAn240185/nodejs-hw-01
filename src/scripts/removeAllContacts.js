import { writeContacts } from '../utils/writeContacts.js';

const removeAllContacts = () => {
  writeContacts([]);
};

module.exports = removeAllContacts;
