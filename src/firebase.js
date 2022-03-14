import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, orderBy } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// Getting data

export async function getProducts() {
    const products = [];
    const col = collection(db, 'item');
    const q = query(col, where("active", "==", true) , orderBy("name", "asc"));
    const snapshot = await getDocs(q); 
    const list = snapshot.docs.map(doc => doc.data());
    list.forEach(item => {
        item.active && products.push({
            name: item.name, additionalInfo: item.additional_info, price: item.price, active: item.active
        })
    });
    return products;
}