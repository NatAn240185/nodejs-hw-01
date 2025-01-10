const fs = require('fs');
const PATH_DB = require('../constants/contacts').PATH_DB;

const writeContacts = (contacts) => {
  fs.writeFileSync(PATH_DB, JSON.stringify(contacts, null, 2));
};

module.exports = writeContacts;

