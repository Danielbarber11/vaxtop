import { getMockDatabase, Product } from './MockDatabase';

export interface UserProduct extends Product {
  userId: string;
}

const db = getMockDatabase();

// Add a new product
export const addProduct = async (
  userId: string,
  product: Omit<UserProduct, 'id' | 'userId' | 'createdAt'>
): Promise<string> => {
  const id = Date.now().toString();
  const newProduct: Product = {
    ...product,
    id,
    userId,
    createdAt: Date.now(),
  };
  await db.addProduct(newProduct);
  return id;
};

// Get all products for a specific user
export const getUserProducts = async (userId: string): Promise<Product[]> => {
  const allProducts = await db.getAllProducts();
  return allProducts.filter((p) => p.userId === userId);
};

// Get all public products (visible to all users)
export const getAllPublicProducts = async (): Promise<Product[]> => {
  return await db.getAllProducts();
};

// Get a single product by ID
export const getProduct = async (id: string): Promise<Product | null> => {
  return await db.getProduct(id);
};

// Update a product
export const updateProduct = async (
  id: string,
  updates: Partial<Product>
): Promise<void> => {
  await db.updateProduct(id, updates);
};

// Delete a product
export const deleteProduct = async (id: string): Promise<void> => {
  await db.deleteProduct(id);
};

// Subscribe to product updates
export const subscribeToProducts = (
  callback: (products: Product[]) => void
): (() => void) => {
  return db.subscribe(callback);
};

export default {
  addProduct,
  getUserProducts,
  getAllPublicProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  subscribeToProducts,
};
