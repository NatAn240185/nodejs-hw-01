import { PATH_DB } from "../constants/contacts.js";
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from "node:fs/promises";

export const addOneContact = async () => {
  try {
      let contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
      let newContact = createFakeContact();
      contacts.push(newContact);
  
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
      console.log('An error occurred:', error);
  }
};

addOneContact();
