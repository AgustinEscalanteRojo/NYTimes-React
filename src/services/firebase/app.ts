import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: 'nytimes-dd655.appspot.com',
  messagingSenderId: '281579209731',
  appId: '1:281579209731:web:6e878a1414260a1128fa36',
}

const app = initializeApp(firebaseConfig)

export default app
