// create variable to hold db connection
let db;
// establish a connection to indexedDB database set to version 1
const request = indexedDB.open('budget-tracker', 1);