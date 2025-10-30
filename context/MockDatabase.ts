// Mock Database - Stores products in memory with IndexedDB persistence
// Simulates Firestore but works completely offline

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  userId: string;
  createdAt: number;
}

class MockDatabase {
  private products: Map<string, Product> = new Map();
  private listeners: ((products: Product[]) => void)[] = [];
  private dbName = 'VaxTopDB';
  private storeName = 'products';

  constructor() {
    this.initializeDB();
  }

  private async initializeDB() {
    // Load products from IndexedDB on initialization
    await this.loadFromIndexedDB();
  }

  private async saveToIndexedDB() {
    try {
      const db = await this.openDB();
      const tx = db.transaction(this.storeName, 'readwrite');
      const store = tx.objectStore(this.storeName);
      
      // Clear existing data
      await store.clear();
      
      // Add all current products
      for (const product of this.products.values()) {
        await store.add(product);
      }
      
      await tx.done;
    } catch (error) {
      console.error('Failed to save to IndexedDB:', error);
    }
  }

  private async loadFromIndexedDB() {
    try {
      const db = await this.openDB();
      const tx = db.transaction(this.storeName, 'readonly');
      const store = tx.objectStore(this.storeName);
      const allRecords = await store.getAll();
      
      for (const record of allRecords) {
        this.products.set(record.id, record);
      }
    } catch (error) {
      console.error('Failed to load from IndexedDB:', error);
    }
  }

  private openDB(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, 1);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
      
      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;
        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, { keyPath: 'id' });
        }
      };
    });
  }

  async addProduct(product: Product): Promise<void> {
    this.products.set(product.id, product);
    await this.saveToIndexedDB();
    this.notifyListeners();
  }

  async getProduct(id: string): Promise<Product | null> {
    return this.products.get(id) || null;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async updateProduct(id: string, updates: Partial<Product>): Promise<void> {
    const product = this.products.get(id);
    if (product) {
      const updated = { ...product, ...updates, id: product.id };
      this.products.set(id, updated);
      await this.saveToIndexedDB();
      this.notifyListeners();
    }
  }

  async deleteProduct(id: string): Promise<void> {
    this.products.delete(id);
    await this.saveToIndexedDB();
    this.notifyListeners();
  }

  subscribe(listener: (products: Product[]) => void): () => void {
    this.listeners.push(listener);
    // Immediately call listener with current data
    listener(Array.from(this.products.values()));
    
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notifyListeners() {
    const products = Array.from(this.products.values());
    this.listeners.forEach(listener => listener(products));
  }
}

// Global database instance
let dbInstance: MockDatabase;

export function getMockDatabase(): MockDatabase {
  if (!dbInstance) {
    dbInstance = new MockDatabase();
  }
  return dbInstance;
}

export default MockDatabase;
