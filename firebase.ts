import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAgPjSMQJyA4y_IpNLLW2Nr8PtE8unN768',
	authDomain: 'shivam-chatgpt.firebaseapp.com',
	projectId: 'shivam-chatgpt',
	storageBucket: 'shivam-chatgpt.appspot.com',
	messagingSenderId: '381052645619',
	appId: '1:381052645619:web:3197773a34ef49b25a4786',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
