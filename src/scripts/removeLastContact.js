import { PATH_DB } from "../constants/contacts.js";
import fs from 'fs/promises';

export const removeLastContact = async () => {
    try {
        let contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
        if (contacts.length > 0) {
            contacts.splice(contacts.length - 1, 1);
        } 
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
        } catch (error) {
        console.log('An error occurred:', error);
    }
};

removeLastContact();