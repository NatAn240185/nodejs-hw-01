import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

const writeContacts = (contacts) => {
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
};

module.exports = writeContacts;

