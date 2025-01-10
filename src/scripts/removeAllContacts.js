const writeContacts = require('../utils/writeContacts');

const removeAllContacts = () => {
  writeContacts([]);
};

module.exports = removeAllContacts;
