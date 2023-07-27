// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged , signOut} from "firebase/auth"
import {getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs} from "firebase/firestore"



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASukZ6RN3An_Cq_dSvmBisBsH6HkU0Xak",
  authDomain: "crwn-clothing-aac7b.firebaseapp.com",
  projectId: "crwn-clothing-aac7b",
  storageBucket: "crwn-clothing-aac7b.appspot.com",
  messagingSenderId: "208513945738",
  appId: "1:208513945738:web:27c4d4b69e21e0ba8fdd73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const addCollectionAndDocuments = async (collectionKey, objects) =>{
  const collectionRef = collection(db, collectionKey)

  // batch = transaction
  const batch = writeBatch(db);
  objects.forEach((object) => {
    // reference from collection in doc into object.title documents
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log("success")
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");

  // query -> selecting documents
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const {title, items} = docSnapshot.data()
    // dari initial value = {}. Update terus dengan key title.toLowerCase()
    // dengan value items. acc -> value yang sudah terakumulasi atau hasil
    // paling update dari setiap penambahan data
    acc[title.toLowerCase()] = items
    return acc
  }, {})
  return categoryMap
}


export const auth = getAuth();
export const db = getFirestore(app);
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, provider)
} 

export const SignIn = async (email, password) => {
  try{
    const {user} = await signInWithEmailAndPassword(auth, email, password)
    
    return user
  }catch(e) {
    if (e.code === "auth/invalid-email" || e.code === "auth/wrong-password"){
      alert("Wrong user credentials")
    }
    console.log(e)
    return null
  }
    
} 


export const insertUserData = async (userData, customData= {}) => {
    
    const userDocRef = doc(db, 'users', userData.uid)
   
    const curData = await getDoc(userDocRef)
    
    const {displayName, email} = userData
    const createdAt = new Date()
    if(!curData.exists()) {
      try{
        
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt, ...customData
        })
      }catch(e){
          alert(e)
      }
    }
    return userDocRef
} 

export const createUserBasic = async (email, password) => {
    if(!email || !password) return
    try{
      const data = createUserWithEmailAndPassword(auth, email, password)
      
      return data
    }catch(e){
      console.log("error : ", e)
      alert(e)
    }
    
}

export const authStateListener = (callback) => onAuthStateChanged(auth, callback)

export const signOutFunc = async () => {
    try{
      signOut(auth)
    }catch(e){
      alert(e)
    }
}