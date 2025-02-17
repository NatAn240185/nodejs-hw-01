import { PATH_DB } from "../constants/contacts.js";
import fs from "node:fs/promises";

export const countContacts = async () => {
        try {
        let contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
        return contacts.length;
    } catch (error) {
        console.log('An error occurred:', error);
    }
};

console.log(await countContacts());