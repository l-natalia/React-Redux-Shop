const admin = require("firebase-admin");

var serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://react-shop-4dfbc.firebaseio.com",
});
const db = admin.firestore();

module.exports = { admin, db };
