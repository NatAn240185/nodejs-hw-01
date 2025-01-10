const readContacts = require('../utils/readContacts');

const getAllContacts = () => {
  const contacts = readContacts();
  console.log(contacts);
};

module.exports = getAllContacts;

