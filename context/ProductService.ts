import { collection, addDoc, getDocs, deleteDoc, doc, query, where, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export interface UserProduct {
  id?: string;
  userId: string;
  title: string;
  description: string;
  imageUrl: string;
  creator: string;
  createdAt?: Date;
}

export const addProduct = async (userId: string, product: Omit<UserProduct, 'userId' | 'id' | 'createdAt'>) => {
  return await addDoc(collection(db, 'userProducts'), {
    ...product,
    userId,
    createdAt: new Date()
  });
};

export const getUserProducts = async (userId: string) => {
  const q = query(collection(db, 'userProducts'), where('userId', '==', userId));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getAllPublicProducts = async () => {
  const snapshot = await getDocs(collection(db, 'userProducts'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const deleteProduct = async (productId: string) => {
  await deleteDoc(doc(db, 'userProducts', productId));
};

export const updateProduct = async (productId: string, updates: Partial<UserProduct>) => {
  await updateDoc(doc(db, 'userProducts', productId), updates);
};
