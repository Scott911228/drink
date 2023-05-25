import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDoc, getDocs, deleteDoc, query, where } from "firebase/firestore/lite"
import products from "../json/products.json";

const firebaseConfig = {
    apiKey: "AIzaSyDbCpqEUtHARoTlsVWyvvDDU51-Gsf_0kg",
    authDomain: "drink-fb-49472.firebaseapp.com",
    projectId: "drink-fb-49472",
    storageBucket: "drink-fb-49472.appspot.com",
    messagingSenderId: "530238449272",
    appId: "1:530238449272:web:58097806939a1ef8112f8d"
  };

  const app_length = getApps().length > 0;

  // Initialize Firebase
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const productsCollection = collection(db, "products"); 
products.forEach(async(doc)=>{
    await addDoc(productsCollection, doc);
})

export const feedProducts = async () => {
  // DELETE ALL EXISTING DOCS
  // const querySnapshot = await getDocs(productsCollection);
  // querySnapshot.forEach(async (product) => {
  //   await deleteDoc(doc(db, "products", product.id));
  // });
  // ADD NEW DOCS
  products.forEach(async (product) => {
    const docRef = await doc(productsCollection);
    await setDoc(docRef, { ...product, id: docRef.id });
  });
};