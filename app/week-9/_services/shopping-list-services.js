import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
    try {
      const itemsCollectionRef = collection(db, "users", userId, "items");
      const itemsSnapshot = await getDocs(itemsCollectionRef);
  
      const mappedItems = itemsSnapshot.docs.map((itemsDoc) => ({
        id: itemsDoc.id,
        ...itemsDoc.data(),
      }));
  
      return mappedItems;
    } catch (fetchItemsError) {
      console.error("Error in fetchAllItems: ", fetchItemsError);
    }
  };

export const addItem = async (userId, item) => {
    try {
        const itemsCollectionRef = collection(db, "users", userId, "items");
        const itemDocRef = await addDoc(itemsCollectionRef, item);
        return itemDocRef;
    } catch (addItemError) {
        console.error("Error adding document: ", addItemError);
    }
    };