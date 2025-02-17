import { PATH_DB } from '../constants/contacts.js';
import * as fs from "node:fs/promises";

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
         const todos = JSON.parse(data);
         return todos;  
    } catch (err) {
        console.error('Помилка запису у файл:', err);
    }

};
