import { PATH_DB } from '../constants/contacts';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, undefined, 2));  
  } catch (err) {
      console.error('Помилка запису у файл:', err);
  }
};

