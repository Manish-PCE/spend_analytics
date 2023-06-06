const express = require('express');
const admin = require('firebase-admin');
const path = require('path');


const app = express();
app.use(express.json());

const serviceAccount = require(path.join(__dirname, 'spend-analytics-a6dcf-firebase-adminsdk-jaxy9-12334276f0.json'));
admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    
    const db = admin.firestore();
    const routes = require('./routes/routes');

app.use('/', routes);


const port = 3000; 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

