import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'fs/promises';

export const generateContacts = async (number) => {
  try {
      let contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
      
      for (let i = 0; i < number; i++) {
          let newContact = createFakeContact();
          contacts.push(newContact);
      }
      
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
      console.log('An error occurred:', error);
  }
};

generateContacts(5);

