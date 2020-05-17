// Imports
const functions = require('firebase-functions');
const admin = require('firebase-admin');

// Initializations
admin.initializeApp(functions.config().firebase);
