// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAlOuM4YpC355FDHbY6yvPUvv_B4h9j9B0',
	authDomain: 'insta-clone-74a5e.firebaseapp.com',
	projectId: 'insta-clone-74a5e',
	storageBucket: 'insta-clone-74a5e.appspot.com',
	messagingSenderId: '374391636835',
	appId: '1:374391636835:web:b88b4dfd525d2dff664956',
	measurementId: 'G-YHB71375BK',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
