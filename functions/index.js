const functions = require("firebase-functions");

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//

// Test: first function
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// Test: cron job function
exports.scheduledFunction = functions.pubsub.schedule('every 1 minutes').onRun((context) => {
  console.log('This will be run every 1 minutes!');
  return null;
});