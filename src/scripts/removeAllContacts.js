import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";

export const removeAllContacts = async () => {
    try {
       let contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
        contacts = [];
    
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
    } catch (error) {
        console.log('An error occurred:', error);
    }
};

removeAllContacts();