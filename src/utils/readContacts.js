const fs = require('fs');
const PATH_DB = require('../constants/contacts').PATH_DB;

const readContacts = () => {
  const data = fs.readFileSync(PATH_DB, 'utf-8');
  return JSON.parse(data);
};

module.exports = readContacts;
