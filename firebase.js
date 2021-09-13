import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp( {
        apiKey: "AIzaSyAcIqnlG1UFzLUGcYw9-8kOaerLyz90-Sc",

        authDomain: "clone-1a757.firebaseapp.com",
      
        projectId: "clone-1a757",
      
        storageBucket: "clone-1a757.appspot.com",
      
        messagingSenderId: "196632276743",
      
        appId: "1:196632276743:web:0390693460dd10a8e69fa2",
      
        measurementId: "G-W6CDK5902W"
});

export const auth = app.auth()

export default app