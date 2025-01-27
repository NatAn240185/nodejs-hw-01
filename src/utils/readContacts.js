import fs from 'fs';
import path from 'path';

// Шлях до бази даних контактів
const PATH_DB = path.resolve('contacts.json');

export const readContacts = () => {
  const data = fs.readFileSync(PATH_DB, 'utf-8');
  return JSON.parse(data);
};
