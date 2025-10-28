// Ce fichier est généré automatiquement par scripts/generate-code-constants.mjs
// Ne pas modifier manuellement !

/**
 * Modèle Store
 * Source: src/app/presentations/signal-store/demo/common-code/models/store.model.ts
 */
export const storeModelTs = `export interface Store {
  id: number;
  name: string;
  city: string;
  country: string;
}
`;

/**
 * Modèle Client
 * Source: src/app/presentations/signal-store/demo/common-code/models/client.model.ts
 */
export const clientModelTs = `export interface Client {
  id: number;
  storeId: number;
  name: string;
  email: string;
}
`;

/**
 * Modèle Cart
 * Source: src/app/presentations/signal-store/demo/common-code/models/cart.model.ts
 */
export const cartModelTs = `export interface Cart {
  id: number;
  clientId: number;
  date: string;
  total: number;
}
`;

/**
 * Modèle Product
 * Source: src/app/presentations/signal-store/demo/common-code/models/product.model.ts
 */
export const productModelTs = `export interface Product {
  id: number;
  cartId: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
}
`;

/**
 * Mock Stores
 * Source: src/app/presentations/signal-store/demo/common-code/mocks/stores.mock.ts
 */
export const storesMockTs = `import { Store } from '../models/store.model';

export const MOCK_STORES: Store[] = [
  { id: 1, name: 'Auchan New York', city: 'New York', country: 'USA' },
  { id: 2, name: 'Auchan Singapour', city: 'Singapour', country: 'Singapour' },
  { id: 3, name: 'Auchan Paris', city: 'Paris', country: 'France' },
  { id: 4, name: 'Auchan Tokyo', city: 'Tokyo', country: 'Japon' },
  { id: 5, name: 'Auchan Londres', city: 'Londres', country: 'Royaume-Uni' },
  { id: 6, name: 'Auchan Sydney', city: 'Sydney', country: 'Australie' },
  { id: 7, name: 'Auchan Dubaï', city: 'Dubaï', country: 'EAU' },
  { id: 8, name: 'Auchan Shanghai', city: 'Shanghai', country: 'Chine' },
  { id: 9, name: 'Auchan Mumbai', city: 'Mumbai', country: 'Inde' },
  { id: 10, name: 'Auchan São Paulo', city: 'São Paulo', country: 'Brésil' }
];
`;

/**
 * Mock Clients
 * Source: src/app/presentations/signal-store/demo/common-code/mocks/clients.mock.ts
 */
export const clientsMockTs = `import { Client } from '../models/client.model';

export const MOCK_CLIENTS: Client[] = [
  // Auchan New York (storeId: 1)
  { id: 1, storeId: 1, name: 'Guy Li', email: 'guy.li@email.com' },
  { id: 2, storeId: 1, name: 'Sarah Croche', email: 'sarah.croche@email.com' },
  { id: 3, storeId: 1, name: 'Jean Bon', email: 'jean.bon@email.com' },
  { id: 4, storeId: 1, name: 'Marie Curie', email: 'marie.curie@email.com' },
  { id: 5, storeId: 1, name: 'Nikola Tesla', email: 'nikola.tesla@email.com' },
  { id: 6, storeId: 1, name: 'Ada Lovelace', email: 'ada.lovelace@email.com' },

  // Auchan Singapour (storeId: 2)
  { id: 7, storeId: 2, name: 'Alain Térieur', email: 'alain.terieur@email.com' },
  { id: 8, storeId: 2, name: 'Alex Térieur', email: 'alex.terieur@email.com' },
  { id: 9, storeId: 2, name: 'Albert Einstein', email: 'albert.einstein@email.com' },
  { id: 10, storeId: 2, name: 'Isaac Newton', email: 'isaac.newton@email.com' },
  { id: 11, storeId: 2, name: 'Charles Darwin', email: 'charles.darwin@email.com' },

  // Auchan Paris (storeId: 3)
  { id: 12, storeId: 3, name: 'Ella Vétiplein', email: 'ella.vetiplein@email.com' },
  { id: 13, storeId: 3, name: 'Harry Cover', email: 'harry.cover@email.com' },
  { id: 14, storeId: 3, name: 'Voltaire', email: 'voltaire@email.com' },
  { id: 15, storeId: 3, name: 'Jean-Jacques Rousseau', email: 'jj.rousseau@email.com' },
  { id: 16, storeId: 3, name: 'Denis Diderot', email: 'denis.diderot@email.com' },
  { id: 17, storeId: 3, name: 'Beaumarchais', email: 'beaumarchais@email.com' },

  // Auchan Tokyo (storeId: 4)
  { id: 18, storeId: 4, name: 'Mehdi Cament', email: 'mehdi.cament@email.com' },
  { id: 19, storeId: 4, name: 'Paul Ochon', email: 'paul.ochon@email.com' },
  { id: 20, storeId: 4, name: 'Galileo Galilei', email: 'galileo@email.com' },
  { id: 21, storeId: 4, name: 'Stephen Hawking', email: 'stephen.hawking@email.com' },
  { id: 22, storeId: 4, name: 'Wolfgang Amadeus Mozart', email: 'mozart@email.com' },

  // Auchan Londres (storeId: 5)
  { id: 23, storeId: 5, name: 'Jacques Eline', email: 'jacques.eline@email.com' },
  { id: 24, storeId: 5, name: 'Alan Turing', email: 'alan.turing@email.com' },
  { id: 25, storeId: 5, name: 'William Shakespeare', email: 'shakespeare@email.com' },
  { id: 26, storeId: 5, name: 'Jane Austen', email: 'jane.austen@email.com' },
  { id: 27, storeId: 5, name: 'Rosalind Franklin', email: 'rosalind.franklin@email.com' },

  // Auchan Sydney (storeId: 6)
  { id: 28, storeId: 6, name: 'Laure Ption', email: 'laure.ption@email.com' },
  { id: 29, storeId: 6, name: 'Antonio Vivaldi', email: 'vivaldi@email.com' },
  { id: 30, storeId: 6, name: 'Giacomo Casanova', email: 'casanova@email.com' },
  { id: 31, storeId: 6, name: 'Leonardo da Vinci', email: 'leonardo@email.com' },

  // Auchan Dubaï (storeId: 7)
  { id: 32, storeId: 7, name: 'Marc Etsou', email: 'marc.etsou@email.com' },
  { id: 33, storeId: 7, name: 'Omar Khayyam', email: 'omar.khayyam@email.com' },
  { id: 34, storeId: 7, name: 'Averroès', email: 'averroes@email.com' },
  { id: 35, storeId: 7, name: 'Al-Khwarizmi', email: 'al.khwarizmi@email.com' },
  { id: 36, storeId: 7, name: 'Avicenne', email: 'avicenne@email.com' },

  // Auchan Shanghai (storeId: 8)
  { id: 37, storeId: 8, name: 'Sam Suffit', email: 'sam.suffit@email.com' },
  { id: 38, storeId: 8, name: 'Confucius', email: 'confucius@email.com' },
  { id: 39, storeId: 8, name: 'Lao Tseu', email: 'lao.tseu@email.com' },
  { id: 40, storeId: 8, name: 'Sun Tzu', email: 'sun.tzu@email.com' },
  { id: 41, storeId: 8, name: 'Li Bai', email: 'li.bai@email.com' },

  // Auchan Mumbai (storeId: 9)
  { id: 42, storeId: 9, name: 'Tina Teur', email: 'tina.teur@email.com' },
  { id: 43, storeId: 9, name: 'Rabindranath Tagore', email: 'tagore@email.com' },
  { id: 44, storeId: 9, name: 'Srinivasa Ramanujan', email: 'ramanujan@email.com' },
  { id: 45, storeId: 9, name: 'Aryabhata', email: 'aryabhata@email.com' },

  // Auchan São Paulo (storeId: 10)
  { id: 46, storeId: 10, name: 'Vincent Time', email: 'vincent.time@email.com' },
  { id: 47, storeId: 10, name: 'Oscar Niemeyer', email: 'oscar.niemeyer@email.com' },
  { id: 48, storeId: 10, name: 'Heitor Villa-Lobos', email: 'villa.lobos@email.com' },
  { id: 49, storeId: 10, name: 'Machado de Assis', email: 'machado.assis@email.com' },
  { id: 50, storeId: 10, name: 'Santos Dumont', email: 'santos.dumont@email.com' }
];
`;

/**
 * Mock Carts
 * Source: src/app/presentations/signal-store/demo/common-code/mocks/carts.mock.ts
 */
export const cartsMockTs = `import { Cart } from '../models/cart.model';

export const MOCK_CARTS: Cart[] = [
  // Guy Li - New York (clientId: 1)
  { id: 1, clientId: 1, date: '2024-11-15', total: 156.50 },
  { id: 2, clientId: 1, date: '2024-12-20', total: 89.30 },
  { id: 3, clientId: 1, date: '2025-01-10', total: 234.80 },

  // Sarah Croche - New York (clientId: 2)
  { id: 4, clientId: 2, date: '2024-11-05', total: 312.40 },
  { id: 5, clientId: 2, date: '2024-12-28', total: 145.90 },

  // Jean Bon - New York (clientId: 3)
  { id: 6, clientId: 3, date: '2024-11-22', total: 67.80 },
  { id: 7, clientId: 3, date: '2025-01-03', total: 198.20 },
  { id: 8, clientId: 3, date: '2025-01-18', total: 89.50 },

  // Marie Curie - New York (clientId: 4)
  { id: 9, clientId: 4, date: '2024-12-01', total: 456.30 },
  { id: 10, clientId: 4, date: '2025-01-12', total: 123.70 },

  // Nikola Tesla - New York (clientId: 5)
  { id: 11, clientId: 5, date: '2024-11-18', total: 678.90 },
  { id: 12, clientId: 5, date: '2024-12-15', total: 234.50 },
  { id: 13, clientId: 5, date: '2025-01-05', total: 891.20 },

  // Ada Lovelace - New York (clientId: 6)
  { id: 14, clientId: 6, date: '2024-12-10', total: 345.60 },
  { id: 15, clientId: 6, date: '2025-01-20', total: 156.80 },

  // Alain Térieur - Singapour (clientId: 7)
  { id: 16, clientId: 7, date: '2024-11-12', total: 178.40 },
  { id: 17, clientId: 7, date: '2024-12-18', total: 267.90 },
  { id: 18, clientId: 7, date: '2025-01-08', total: 134.20 },

  // Alex Térieur - Singapour (clientId: 8)
  { id: 19, clientId: 8, date: '2024-11-25', total: 456.70 },
  { id: 20, clientId: 8, date: '2025-01-14', total: 189.30 },

  // Albert Einstein - Singapour (clientId: 9)
  { id: 21, clientId: 9, date: '2024-12-05', total: 567.80 },
  { id: 22, clientId: 9, date: '2024-12-22', total: 234.90 },
  { id: 23, clientId: 9, date: '2025-01-16', total: 345.20 },

  // Isaac Newton - Singapour (clientId: 10)
  { id: 24, clientId: 10, date: '2024-11-30', total: 123.40 },
  { id: 25, clientId: 10, date: '2025-01-07', total: 267.80 },

  // Charles Darwin - Singapour (clientId: 11)
  { id: 26, clientId: 11, date: '2024-12-12', total: 456.20 },
  { id: 27, clientId: 11, date: '2025-01-22', total: 198.50 },

  // Ella Vétiplein - Paris (clientId: 12)
  { id: 28, clientId: 12, date: '2024-11-08', total: 67.20 },
  { id: 29, clientId: 12, date: '2024-12-25', total: 145.80 },
  { id: 30, clientId: 12, date: '2025-01-19', total: 234.50 },

  // Harry Cover - Paris (clientId: 13)
  { id: 31, clientId: 13, date: '2024-11-20', total: 198.50 },
  { id: 32, clientId: 13, date: '2024-12-30', total: 312.70 },

  // Voltaire - Paris (clientId: 14)
  { id: 33, clientId: 14, date: '2024-12-08', total: 567.90 },
  { id: 34, clientId: 14, date: '2025-01-11', total: 234.60 },
  { id: 35, clientId: 14, date: '2025-01-25', total: 456.30 },

  // Jean-Jacques Rousseau - Paris (clientId: 15)
  { id: 36, clientId: 15, date: '2024-11-14', total: 178.90 },
  { id: 37, clientId: 15, date: '2024-12-19', total: 289.40 },

  // Denis Diderot - Paris (clientId: 16)
  { id: 38, clientId: 16, date: '2024-12-03', total: 345.70 },
  { id: 39, clientId: 16, date: '2025-01-13', total: 167.80 },
  { id: 40, clientId: 16, date: '2025-01-27', total: 423.90 },

  // Beaumarchais - Paris (clientId: 17)
  { id: 41, clientId: 17, date: '2024-11-27', total: 234.50 },
  { id: 42, clientId: 17, date: '2025-01-09', total: 178.60 },

  // Mehdi Cament - Tokyo (clientId: 18)
  { id: 43, clientId: 18, date: '2024-12-02', total: 456.80 },
  { id: 44, clientId: 18, date: '2025-01-15', total: 289.30 },

  // Paul Ochon - Tokyo (clientId: 19)
  { id: 45, clientId: 19, date: '2024-11-16', total: 167.90 },
  { id: 46, clientId: 19, date: '2024-12-24', total: 345.20 },
  { id: 47, clientId: 19, date: '2025-01-21', total: 198.70 },

  // Galileo Galilei - Tokyo (clientId: 20)
  { id: 48, clientId: 20, date: '2024-12-07', total: 678.40 },
  { id: 49, clientId: 20, date: '2025-01-04', total: 234.90 },

  // Stephen Hawking - Tokyo (clientId: 21)
  { id: 50, clientId: 21, date: '2024-11-23', total: 789.50 },
  { id: 51, clientId: 21, date: '2024-12-16', total: 456.20 },
  { id: 52, clientId: 21, date: '2025-01-17', total: 345.80 },

  // Wolfgang Amadeus Mozart - Tokyo (clientId: 22)
  { id: 53, clientId: 22, date: '2024-12-11', total: 234.60 },
  { id: 54, clientId: 22, date: '2025-01-23', total: 178.90 },

  // Jacques Eline - Londres (clientId: 23)
  { id: 55, clientId: 23, date: '2024-11-10', total: 312.40 },
  { id: 56, clientId: 23, date: '2024-12-27', total: 167.80 },

  // Alan Turing - Londres (clientId: 24)
  { id: 57, clientId: 24, date: '2024-12-04', total: 567.30 },
  { id: 58, clientId: 24, date: '2024-12-21', total: 289.60 },
  { id: 59, clientId: 24, date: '2025-01-06', total: 423.90 },

  // William Shakespeare - Londres (clientId: 25)
  { id: 60, clientId: 25, date: '2024-11-19', total: 198.70 },
  { id: 61, clientId: 25, date: '2025-01-12', total: 345.50 },

  // Jane Austen - Londres (clientId: 26)
  { id: 62, clientId: 26, date: '2024-12-09', total: 234.80 },
  { id: 63, clientId: 26, date: '2025-01-24', total: 167.30 },

  // Rosalind Franklin - Londres (clientId: 27)
  { id: 64, clientId: 27, date: '2024-11-28', total: 456.90 },
  { id: 65, clientId: 27, date: '2024-12-14', total: 289.40 },
  { id: 66, clientId: 27, date: '2025-01-18', total: 178.60 },

  // Laure Ption - Sydney (clientId: 28)
  { id: 67, clientId: 28, date: '2024-12-06', total: 312.70 },
  { id: 68, clientId: 28, date: '2025-01-10', total: 198.50 },

  // Antonio Vivaldi - Sydney (clientId: 29)
  { id: 69, clientId: 29, date: '2024-11-13', total: 567.80 },
  { id: 70, clientId: 29, date: '2024-12-23', total: 345.20 },
  { id: 71, clientId: 29, date: '2025-01-19', total: 234.90 },

  // Giacomo Casanova - Sydney (clientId: 30)
  { id: 72, clientId: 30, date: '2024-12-01', total: 456.40 },
  { id: 73, clientId: 30, date: '2025-01-14', total: 289.70 },

  // Leonardo da Vinci - Sydney (clientId: 31)
  { id: 74, clientId: 31, date: '2024-11-24', total: 789.30 },
  { id: 75, clientId: 31, date: '2024-12-17', total: 423.60 },
  { id: 76, clientId: 31, date: '2025-01-22', total: 567.80 },

  // Marc Etsou - Dubaï (clientId: 32)
  { id: 77, clientId: 32, date: '2024-12-13', total: 234.90 },
  { id: 78, clientId: 32, date: '2025-01-07', total: 178.40 },

  // Omar Khayyam - Dubaï (clientId: 33)
  { id: 79, clientId: 33, date: '2024-11-17', total: 456.70 },
  { id: 80, clientId: 33, date: '2024-12-26', total: 312.50 },
  { id: 81, clientId: 33, date: '2025-01-16', total: 234.80 },

  // Averroès - Dubaï (clientId: 34)
  { id: 82, clientId: 34, date: '2024-12-10', total: 567.90 },
  { id: 83, clientId: 34, date: '2025-01-20', total: 289.30 },

  // Al-Khwarizmi - Dubaï (clientId: 35)
  { id: 84, clientId: 35, date: '2024-11-21', total: 678.40 },
  { id: 85, clientId: 35, date: '2024-12-29', total: 345.60 },
  { id: 86, clientId: 35, date: '2025-01-13', total: 456.20 },

  // Avicenne - Dubaï (clientId: 36)
  { id: 87, clientId: 36, date: '2024-12-15', total: 234.50 },
  { id: 88, clientId: 36, date: '2025-01-25', total: 178.90 },

  // Sam Suffit - Shanghai (clientId: 37)
  { id: 89, clientId: 37, date: '2024-11-11', total: 312.80 },
  { id: 90, clientId: 37, date: '2024-12-20', total: 198.60 },

  // Confucius - Shanghai (clientId: 38)
  { id: 91, clientId: 38, date: '2024-12-05', total: 567.40 },
  { id: 92, clientId: 38, date: '2025-01-11', total: 345.70 },
  { id: 93, clientId: 38, date: '2025-01-26', total: 234.20 },

  // Lao Tseu - Shanghai (clientId: 39)
  { id: 94, clientId: 39, date: '2024-11-26', total: 456.30 },
  { id: 95, clientId: 39, date: '2025-01-08', total: 289.50 },

  // Sun Tzu - Shanghai (clientId: 40)
  { id: 96, clientId: 40, date: '2024-12-12', total: 678.90 },
  { id: 97, clientId: 40, date: '2024-12-31', total: 423.70 },
  { id: 98, clientId: 40, date: '2025-01-21', total: 345.40 },

  // Li Bai - Shanghai (clientId: 41)
  { id: 99, clientId: 41, date: '2024-11-29', total: 234.60 },
  { id: 100, clientId: 41, date: '2025-01-15', total: 178.30 },

  // Tina Teur - Mumbai (clientId: 42)
  { id: 101, clientId: 42, date: '2024-12-18', total: 312.50 },
  { id: 102, clientId: 42, date: '2025-01-09', total: 198.70 },

  // Rabindranath Tagore - Mumbai (clientId: 43)
  { id: 103, clientId: 43, date: '2024-11-15', total: 567.20 },
  { id: 104, clientId: 43, date: '2024-12-22', total: 345.80 },
  { id: 105, clientId: 43, date: '2025-01-17', total: 234.50 },

  // Srinivasa Ramanujan - Mumbai (clientId: 44)
  { id: 106, clientId: 44, date: '2024-12-08', total: 789.60 },
  { id: 107, clientId: 44, date: '2025-01-12', total: 456.30 },

  // Aryabhata - Mumbai (clientId: 45)
  { id: 108, clientId: 45, date: '2024-11-22', total: 678.80 },
  { id: 109, clientId: 45, date: '2024-12-28', total: 423.90 },
  { id: 110, clientId: 45, date: '2025-01-23', total: 345.60 },

  // Vincent Time - São Paulo (clientId: 46)
  { id: 111, clientId: 46, date: '2024-12-16', total: 234.40 },
  { id: 112, clientId: 46, date: '2025-01-05', total: 178.80 },

  // Oscar Niemeyer - São Paulo (clientId: 47)
  { id: 113, clientId: 47, date: '2024-11-18', total: 567.50 },
  { id: 114, clientId: 47, date: '2024-12-25', total: 345.30 },
  { id: 115, clientId: 47, date: '2025-01-18', total: 234.70 },

  // Heitor Villa-Lobos - São Paulo (clientId: 48)
  { id: 116, clientId: 48, date: '2024-12-11', total: 456.80 },
  { id: 117, clientId: 48, date: '2025-01-24', total: 289.60 },

  // Machado de Assis - São Paulo (clientId: 49)
  { id: 118, clientId: 49, date: '2024-11-25', total: 678.30 },
  { id: 119, clientId: 49, date: '2024-12-19', total: 423.50 },
  { id: 120, clientId: 49, date: '2025-01-14', total: 345.90 },

  // Santos Dumont - São Paulo (clientId: 50)
  { id: 121, clientId: 50, date: '2024-12-07', total: 234.80 },
  { id: 122, clientId: 50, date: '2025-01-22', total: 178.50 }
];
`;

/**
 * Mock Products
 * Source: src/app/presentations/signal-store/demo/common-code/mocks/products.mock.ts
 */
export const productsMockTs = `import { Product } from '../models/product.model';

export const MOCK_PRODUCTS: Product[] = [
  // Cart 1 - Guy Li
  { id: 1, cartId: 1, name: 'Mangoustan', category: 'Fruits exotiques', price: 12.50, quantity: 2 },
  { id: 2, cartId: 1, name: 'Panais', category: 'Légumes anciens', price: 3.20, quantity: 1 },
  { id: 3, cartId: 1, name: 'Topinambour', category: 'Légumes anciens', price: 4.80, quantity: 3 },
  { id: 4, cartId: 1, name: 'Huile de vidange 5W30', category: 'Automobile', price: 45.00, quantity: 1 },
  { id: 5, cartId: 1, name: 'Ramboutan', category: 'Fruits exotiques', price: 8.90, quantity: 1 },

  // Cart 2 - Guy Li
  { id: 6, cartId: 2, name: 'Durian', category: 'Fruits exotiques', price: 23.50, quantity: 1 },
  { id: 7, cartId: 2, name: 'Rutabaga', category: 'Légumes anciens', price: 2.40, quantity: 2 },
  { id: 8, cartId: 2, name: 'Liquide de refroidissement', category: 'Automobile', price: 18.90, quantity: 1 },
  { id: 9, cartId: 2, name: 'Crosne', category: 'Légumes anciens', price: 6.70, quantity: 1 },

  // Cart 3 - Sarah Croche
  { id: 10, cartId: 3, name: 'Pâte thermique CPU', category: 'Informatique', price: 12.90, quantity: 2 },
  { id: 11, cartId: 3, name: 'Câble HDMI doré premium', category: 'Informatique', price: 89.99, quantity: 1 },
  { id: 12, cartId: 3, name: 'Chervis', category: 'Légumes anciens', price: 5.30, quantity: 1 },
  { id: 13, cartId: 3, name: 'Kit réparation pneu', category: 'Automobile', price: 24.50, quantity: 1 },
  { id: 14, cartId: 3, name: 'Balai de sorcière certifié', category: 'Ménager', price: 67.80, quantity: 1 },

  // Cart 4 - Jean Bon
  { id: 15, cartId: 4, name: 'Litière pour chat parfum lavande', category: 'Animalerie', price: 15.90, quantity: 1 },
  { id: 16, cartId: 4, name: 'Cerfeuil tubéreux', category: 'Légumes anciens', price: 7.20, quantity: 1 },
  { id: 17, cartId: 4, name: 'Choucroute en spray', category: 'Épicerie', price: 8.50, quantity: 2 },

  // Cart 5 - Alain Térieur
  { id: 18, cartId: 5, name: 'Pierre philosophale starter pack', category: 'Spiritualité', price: 99.99, quantity: 1 },
  { id: 19, cartId: 5, name: 'Eau déminéralisée premium', category: 'Automobile', price: 3.50, quantity: 5 },
  { id: 20, cartId: 5, name: 'Gants tactiques ninja', category: 'Sport', price: 34.90, quantity: 1 },

  // Cart 6 - Alex Térieur
  { id: 21, cartId: 6, name: 'Détecteur de métaux pour plage', category: 'Loisirs', price: 156.00, quantity: 1 },
  { id: 22, cartId: 6, name: 'Crème solaire SPF 9000', category: 'Beauté', price: 45.50, quantity: 2 },
  { id: 23, cartId: 6, name: 'Bombe anti-ours pour randonneur', category: 'Sport', price: 78.90, quantity: 1 },

  // Cart 7 - Ella Vétiplein
  { id: 24, cartId: 7, name: 'Kit complet origami niveau dieu', category: 'Loisirs créatifs', price: 23.40, quantity: 1 },
  { id: 25, cartId: 7, name: 'Baguette magique LED rechargeable', category: 'Jouets', price: 12.80, quantity: 3 },

  // Cart 8 - Harry Cover
  { id: 26, cartId: 8, name: 'Encyclopédie des escargots Vol. 7', category: 'Livres', price: 67.30, quantity: 1 },
  { id: 27, cartId: 8, name: 'Monocle steampunk authentique', category: 'Mode', price: 89.90, quantity: 1 },
  { id: 28, cartId: 8, name: 'Cire à moustache bio', category: 'Beauté', price: 15.60, quantity: 1 },
  { id: 29, cartId: 8, name: 'Thé vert saveur pneu neuf', category: 'Épicerie', price: 8.90, quantity: 2 },
  { id: 30, cartId: 8, name: 'Manuel de survie en IKEA', category: 'Livres', price: 14.50, quantity: 1 },

  // Cart 9 - Marie Curie
  { id: 31, cartId: 9, name: 'Uranium enrichi pour radiographie', category: 'Science', price: 234.50, quantity: 1 },
  { id: 32, cartId: 9, name: 'Thermomètre à mercure vintage', category: 'Science', price: 67.80, quantity: 2 },
  { id: 33, cartId: 9, name: 'Gants en plomb stylés', category: 'Équipement', price: 89.30, quantity: 1 },
  { id: 34, cartId: 9, name: 'Compteur Geiger de poche', category: 'Science', price: 156.90, quantity: 1 },

  // Cart 11 - Nikola Tesla
  { id: 35, cartId: 11, name: 'Bobine Tesla DIY Kit', category: 'Électronique', price: 345.60, quantity: 1 },
  { id: 36, cartId: 11, name: 'Condensateur flux capacitif 1.21 GW', category: 'Électronique', price: 234.90, quantity: 1 },
  { id: 37, cartId: 11, name: 'Câbles haute tension décorés', category: 'Électronique', price: 67.80, quantity: 3 },
  { id: 38, cartId: 11, name: 'Isolant en caoutchouc parfumé', category: 'Électronique', price: 45.20, quantity: 1 },

  // Cart 14 - Ada Lovelace
  { id: 39, cartId: 14, name: 'Cartes perforées vintage', category: 'Informatique', price: 123.40, quantity: 5 },
  { id: 40, cartId: 14, name: 'Machine analytique miniature', category: 'Informatique', price: 198.70, quantity: 1 },
  { id: 41, cartId: 14, name: 'Algorithme en boîte collector', category: 'Informatique', price: 56.90, quantity: 1 },

  // Cart 21 - Albert Einstein
  { id: 42, cartId: 21, name: 'Tableau noir géant E=mc²', category: 'Éducation', price: 234.50, quantity: 1 },
  { id: 43, cartId: 21, name: 'Craie anti-gravité', category: 'Éducation', price: 45.80, quantity: 3 },
  { id: 44, cartId: 21, name: 'Perruque Einstein certifiée', category: 'Mode', price: 167.90, quantity: 1 },
  { id: 45, cartId: 21, name: 'Pipe à bulles de savon quantiques', category: 'Loisirs', price: 89.30, quantity: 1 },

  // Cart 33 - Voltaire
  { id: 46, cartId: 33, name: 'Plume d\\'oie premium XL', category: 'Écriture', price: 123.50, quantity: 2 },
  { id: 47, cartId: 33, name: 'Encre philosophique indélébile', category: 'Écriture', price: 67.90, quantity: 3 },
  { id: 48, cartId: 33, name: 'Bougie anti-obscurantisme', category: 'Décoration', price: 34.70, quantity: 5 },
  { id: 49, cartId: 33, name: 'Perruque poudrée authentique', category: 'Mode', price: 198.40, quantity: 1 },
  { id: 50, cartId: 33, name: 'Manifeste des Lumières en papyrus', category: 'Livres', price: 89.60, quantity: 1 },

  // Cart 48 - Galileo Galilei
  { id: 51, cartId: 48, name: 'Télescope Galilée Edition', category: 'Astronomie', price: 456.80, quantity: 1 },
  { id: 52, cartId: 48, name: 'Carte des étoiles 1610', category: 'Astronomie', price: 123.50, quantity: 1 },
  { id: 53, cartId: 48, name: 'Pendule de Foucault miniature', category: 'Science', price: 234.90, quantity: 1 },

  // Cart 57 - Alan Turing
  { id: 54, cartId: 57, name: 'Machine Enigma replica', category: 'Informatique', price: 345.70, quantity: 1 },
  { id: 55, cartId: 57, name: 'Pomme empoisonnée décorative', category: 'Décoration', price: 67.80, quantity: 1 },
  { id: 56, cartId: 57, name: 'Test de Turing pour débutants', category: 'Livres', price: 45.90, quantity: 1 },
  { id: 57, cartId: 57, name: 'Ordinateur mécanique rétro', category: 'Informatique', price: 234.60, quantity: 1 },

  // Cart 60 - William Shakespeare
  { id: 58, cartId: 60, name: 'Crâne de Yorick authentifié', category: 'Théâtre', price: 123.40, quantity: 1 },
  { id: 59, cartId: 60, name: 'Dague rétractable de César', category: 'Théâtre', price: 67.80, quantity: 1 },
  { id: 60, cartId: 60, name: 'Poison Roméo & Juliette (édulcoré)', category: 'Théâtre', price: 23.50, quantity: 1 },

  // Cart 69 - Antonio Vivaldi
  { id: 61, cartId: 69, name: 'Violon Les Quatre Saisons', category: 'Musique', price: 456.90, quantity: 1 },
  { id: 62, cartId: 69, name: 'Partitions baroques vintage', category: 'Musique', price: 89.40, quantity: 3 },
  { id: 63, cartId: 69, name: 'Métronome vénitien doré', category: 'Musique', price: 123.70, quantity: 1 },

  // Cart 74 - Leonardo da Vinci
  { id: 64, cartId: 74, name: 'Plans secret machine volante', category: 'Art', price: 234.80, quantity: 1 },
  { id: 65, cartId: 74, name: 'Pinceaux en poils de licorne', category: 'Art', price: 167.90, quantity: 5 },
  { id: 66, cartId: 74, name: 'Toile La Joconde vierge', category: 'Art', price: 345.60, quantity: 1 },
  { id: 67, cartId: 74, name: 'Carnet croquis Renaissance', category: 'Art', price: 78.40, quantity: 2 },

  // Cart 79 - Omar Khayyam
  { id: 68, cartId: 79, name: 'Astrolabe persan gravé', category: 'Astronomie', price: 234.50, quantity: 1 },
  { id: 69, cartId: 79, name: 'Recueil Rubāiyāt enluminé', category: 'Livres', price: 156.80, quantity: 1 },
  { id: 70, cartId: 79, name: 'Encens mathématique', category: 'Spiritualité', price: 45.90, quantity: 3 },

  // Cart 91 - Confucius
  { id: 71, cartId: 91, name: 'Rouleau sagesse ancienne', category: 'Philosophie', price: 234.60, quantity: 1 },
  { id: 72, cartId: 91, name: 'Bâtons d\\'encens sagesse', category: 'Spiritualité', price: 45.70, quantity: 10 },
  { id: 73, cartId: 91, name: 'Calligraphie Les Entretiens', category: 'Art', price: 198.50, quantity: 1 },
  { id: 74, cartId: 91, name: 'Thé de la contemplation', category: 'Épicerie', price: 67.80, quantity: 2 },

  // Cart 103 - Rabindranath Tagore
  { id: 75, cartId: 103, name: 'Sitar en bois de santal', category: 'Musique', price: 345.80, quantity: 1 },
  { id: 76, cartId: 103, name: 'Poèmes Gitanjali manuscrits', category: 'Livres', price: 156.70, quantity: 1 },
  { id: 77, cartId: 103, name: 'Encre safran doré', category: 'Écriture', price: 67.40, quantity: 2 },

  // Cart 113 - Oscar Niemeyer
  { id: 78, cartId: 113, name: 'Maquette cathédrale Brasília', category: 'Architecture', price: 234.90, quantity: 1 },
  { id: 79, cartId: 113, name: 'Équerre moderniste', category: 'Architecture', price: 89.60, quantity: 1 },
  { id: 80, cartId: 113, name: 'Plans béton courbe', category: 'Architecture', price: 167.80, quantity: 1 },
  { id: 81, cartId: 113, name: 'Cafézinho brésilien premium', category: 'Épicerie', price: 45.30, quantity: 3 },

  // Cart 10 - Marie Curie (2e panier)
  { id: 82, cartId: 10, name: 'Parapluie anti-pluie quantique', category: 'Insolite', price: 89.90, quantity: 1 },
  { id: 83, cartId: 10, name: 'Savon qui ne mousse jamais', category: 'Insolite', price: 12.50, quantity: 2 },
  { id: 84, cartId: 10, name: 'Chaussettes dépareillées assorties pack 12', category: 'Insolite', price: 23.80, quantity: 1 },

  // Cart 12 - Nikola Tesla (2e panier)
  { id: 85, cartId: 12, name: 'Guide conversation avec les plantes', category: 'Insolite', price: 34.60, quantity: 1 },
  { id: 86, cartId: 12, name: 'Réveil qui retarde le temps', category: 'Insolite', price: 67.90, quantity: 1 },
  { id: 87, cartId: 12, name: 'Brosse à dents pour gaucher uniquement', category: 'Insolite', price: 15.40, quantity: 1 },
  { id: 88, cartId: 12, name: 'Lunettes de soleil pour la nuit', category: 'Insolite', price: 45.70, quantity: 1 },

  // Cart 15 - Ada Lovelace (2e panier)
  { id: 89, cartId: 15, name: 'Sel sans sodium certifié bio', category: 'Insolite', price: 8.90, quantity: 1 },
  { id: 90, cartId: 15, name: 'Eau lyophilisée format voyage', category: 'Insolite', price: 19.50, quantity: 3 },
  { id: 91, cartId: 15, name: 'Cours de procrastination express', category: 'Insolite', price: 99.90, quantity: 1 },

  // Cart 16 - Alain Térieur (1er panier)
  { id: 92, cartId: 16, name: 'Certificat authenticité pour faux', category: 'Insolite', price: 56.80, quantity: 1 },
  { id: 93, cartId: 16, name: 'Kit déménagement pour nomade', category: 'Insolite', price: 78.40, quantity: 1 },
  { id: 94, cartId: 16, name: 'Boussole qui pointe vers le frigo', category: 'Insolite', price: 34.90, quantity: 1 },

  // Cart 22 - Albert Einstein (2e panier)
  { id: 95, cartId: 22, name: 'Clavier AZERTY pour QWERTY', category: 'Insolite', price: 45.60, quantity: 1 },
  { id: 96, cartId: 22, name: 'Horloge temps relatif Einstein', category: 'Insolite', price: 123.50, quantity: 1 },
  { id: 97, cartId: 22, name: 'Stylo invisible encre visible', category: 'Insolite', price: 18.90, quantity: 2 },

  // Cart 36 - Jean-Jacques Rousseau (1er panier)
  { id: 98, cartId: 36, name: 'Dictionnaire français-français', category: 'Insolite', price: 67.30, quantity: 1 },
  { id: 99, cartId: 36, name: 'Lampe solaire pour cave', category: 'Insolite', price: 89.70, quantity: 1 },
  { id: 100, cartId: 36, name: 'Éponge imperméable anti-eau', category: 'Insolite', price: 12.40, quantity: 1 },

  // Paniers manquants - remplis avec produits variés
  { id: 101, cartId: 13, name: 'Carambole', category: 'Fruits exotiques', price: 8.90, quantity: 2 },
  { id: 102, cartId: 13, name: 'Pneu toutes saisons 205/55R16', category: 'Automobile', price: 89.90, quantity: 1 },
  { id: 103, cartId: 17, name: 'Litchi séché', category: 'Fruits exotiques', price: 6.70, quantity: 1 },
  { id: 104, cartId: 17, name: 'Filtre à air sport', category: 'Automobile', price: 34.50, quantity: 1 },
  { id: 105, cartId: 18, name: 'Fruit du dragon', category: 'Fruits exotiques', price: 11.20, quantity: 2 },
  { id: 106, cartId: 18, name: 'Panais bio', category: 'Légumes anciens', price: 4.30, quantity: 1 },
  { id: 107, cartId: 19, name: 'Rambutan extra large', category: 'Fruits exotiques', price: 15.80, quantity: 1 },
  { id: 108, cartId: 19, name: 'Liquide lave-glace -25°C', category: 'Automobile', price: 7.90, quantity: 2 },
  { id: 109, cartId: 20, name: 'Corossol', category: 'Fruits exotiques', price: 18.50, quantity: 1 },
  { id: 110, cartId: 20, name: 'Cerfeuil tubéreux bio', category: 'Légumes anciens', price: 9.20, quantity: 1 },
  { id: 111, cartId: 23, name: 'Courge musquée', category: 'Légumes anciens', price: 5.60, quantity: 2 },
  { id: 112, cartId: 23, name: 'Essuie-glaces Bosch', category: 'Automobile', price: 28.90, quantity: 1 },
  { id: 113, cartId: 24, name: 'Topinambour violet', category: 'Légumes anciens', price: 6.80, quantity: 3 },
  { id: 114, cartId: 24, name: 'Fruit de la passion', category: 'Fruits exotiques', price: 12.40, quantity: 1 },
  { id: 115, cartId: 25, name: 'Huile moteur 10W40', category: 'Automobile', price: 38.90, quantity: 1 },
  { id: 116, cartId: 25, name: 'Rutabaga jaune', category: 'Légumes anciens', price: 3.90, quantity: 2 },
  { id: 117, cartId: 26, name: 'Longane', category: 'Fruits exotiques', price: 9.80, quantity: 2 },
  { id: 118, cartId: 26, name: 'Balai d\\'essuie-glace universel', category: 'Automobile', price: 15.50, quantity: 1 },
  { id: 119, cartId: 27, name: 'Crosnes du Japon', category: 'Légumes anciens', price: 8.40, quantity: 1 },
  { id: 120, cartId: 27, name: 'Jaboticaba', category: 'Fruits exotiques', price: 22.30, quantity: 1 },
  { id: 121, cartId: 28, name: 'Courge spaghetti', category: 'Légumes anciens', price: 7.60, quantity: 1 },
  { id: 122, cartId: 28, name: 'Plaquettes de frein avant', category: 'Automobile', price: 56.90, quantity: 1 },
  { id: 123, cartId: 29, name: 'Kiwano', category: 'Fruits exotiques', price: 13.80, quantity: 2 },
  { id: 124, cartId: 29, name: 'Panaís blanc', category: 'Légumes anciens', price: 4.90, quantity: 1 },
  { id: 125, cartId: 30, name: 'Salicorne fraîche', category: 'Légumes anciens', price: 11.20, quantity: 1 },
  { id: 126, cartId: 30, name: 'Antigel moteur 5L', category: 'Automobile', price: 24.90, quantity: 1 },
  { id: 127, cartId: 31, name: 'Sapotille', category: 'Fruits exotiques', price: 16.50, quantity: 1 },
  { id: 128, cartId: 31, name: 'Ampoules H7 LED', category: 'Automobile', price: 45.90, quantity: 2 },
  { id: 129, cartId: 32, name: 'Scorsonère noire', category: 'Légumes anciens', price: 6.30, quantity: 2 },
  { id: 130, cartId: 32, name: 'Pitaya rouge', category: 'Fruits exotiques', price: 14.80, quantity: 1 },
  { id: 131, cartId: 34, name: 'Rambutan nature', category: 'Fruits exotiques', price: 10.90, quantity: 3 },
  { id: 132, cartId: 34, name: 'Courge butternut', category: 'Légumes anciens', price: 5.40, quantity: 1 },
  { id: 133, cartId: 35, name: 'Batterie 12V 60Ah', category: 'Automobile', price: 89.90, quantity: 1 },
  { id: 134, cartId: 35, name: 'Chayotte', category: 'Fruits exotiques', price: 7.80, quantity: 2 },
  { id: 135, cartId: 37, name: 'Tétragone cornue', category: 'Légumes anciens', price: 9.60, quantity: 1 },
  { id: 136, cartId: 37, name: 'Bougies d\\'allumage NGK', category: 'Automobile', price: 32.90, quantity: 4 },
  { id: 137, cartId: 38, name: 'Chérimolier', category: 'Fruits exotiques', price: 19.80, quantity: 1 },
  { id: 138, cartId: 38, name: 'Salsifis noir', category: 'Légumes anciens', price: 6.90, quantity: 2 },
  { id: 139, cartId: 39, name: 'Filtre à huile premium', category: 'Automobile', price: 12.50, quantity: 1 },
  { id: 140, cartId: 39, name: 'Néflier du Japon', category: 'Fruits exotiques', price: 15.60, quantity: 1 },
  { id: 141, cartId: 40, name: 'Cerfeuil musqué', category: 'Légumes anciens', price: 8.90, quantity: 1 },
  { id: 142, cartId: 40, name: 'Courroie de distribution', category: 'Automobile', price: 78.90, quantity: 1 },
  { id: 143, cartId: 41, name: 'Atemoya', category: 'Fruits exotiques', price: 21.40, quantity: 1 },
  { id: 144, cartId: 41, name: 'Chervis cultivé', category: 'Légumes anciens', price: 7.80, quantity: 2 },
  { id: 145, cartId: 42, name: 'Disques de frein arrière', category: 'Automobile', price: 67.90, quantity: 1 },
  { id: 146, cartId: 42, name: 'Momordique', category: 'Fruits exotiques', price: 13.90, quantity: 1 },
  { id: 147, cartId: 43, name: 'Raiponce', category: 'Légumes anciens', price: 10.20, quantity: 1 },
  { id: 148, cartId: 43, name: 'Huile 5W30 synthèse', category: 'Automobile', price: 52.90, quantity: 1 },
  { id: 149, cartId: 44, name: 'Cupuaçu', category: 'Fruits exotiques', price: 24.50, quantity: 1 },
  { id: 150, cartId: 44, name: 'Carde poirée', category: 'Légumes anciens', price: 5.80, quantity: 2 },
  { id: 151, cartId: 45, name: 'Joints de culasse', category: 'Automobile', price: 95.90, quantity: 1 },
  { id: 152, cartId: 45, name: 'Feijoa', category: 'Fruits exotiques', price: 11.90, quantity: 3 },
  { id: 153, cartId: 46, name: 'Bardane comestible', category: 'Légumes anciens', price: 9.40, quantity: 1 },
  { id: 154, cartId: 46, name: 'Pulpe de tamarin', category: 'Fruits exotiques', price: 8.60, quantity: 1 },
  { id: 155, cartId: 47, name: 'Filtre à carburant', category: 'Automobile', price: 18.90, quantity: 1 },
  { id: 156, cartId: 47, name: 'Arroche rouge', category: 'Légumes anciens', price: 6.70, quantity: 2 },
  { id: 157, cartId: 49, name: 'Maracuja', category: 'Fruits exotiques', price: 14.80, quantity: 2 },
  { id: 158, cartId: 49, name: 'Kit embrayage complet', category: 'Automobile', price: 178.90, quantity: 1 },
  { id: 159, cartId: 50, name: 'Oca du Pérou', category: 'Légumes anciens', price: 12.30, quantity: 1 },
  { id: 160, cartId: 50, name: 'Lucuma', category: 'Fruits exotiques', price: 17.90, quantity: 1 },
  { id: 161, cartId: 51, name: 'Amortisseurs avant', category: 'Automobile', price: 134.90, quantity: 2 },
  { id: 162, cartId: 51, name: 'Poire de terre', category: 'Légumes anciens', price: 8.80, quantity: 2 },
  { id: 163, cartId: 52, name: 'Mangaba', category: 'Fruits exotiques', price: 19.60, quantity: 1 },
  { id: 164, cartId: 52, name: 'Filtre à air cabine', category: 'Automobile', price: 22.90, quantity: 1 },
  { id: 165, cartId: 53, name: 'Capucine tubéreuse', category: 'Légumes anciens', price: 11.50, quantity: 1 },
  { id: 166, cartId: 53, name: 'Camu-camu', category: 'Fruits exotiques', price: 26.80, quantity: 1 },
  { id: 167, cartId: 54, name: 'Pommade frein cuivre', category: 'Automobile', price: 8.90, quantity: 1 },
  { id: 168, cartId: 54, name: 'Ulluco', category: 'Légumes anciens', price: 13.70, quantity: 1 },
  { id: 169, cartId: 55, name: 'Açaí', category: 'Fruits exotiques', price: 22.40, quantity: 2 },
  { id: 170, cartId: 55, name: 'Liquide de direction', category: 'Automobile', price: 14.90, quantity: 1 },
  { id: 171, cartId: 56, name: 'Macre nageante', category: 'Légumes anciens', price: 15.80, quantity: 1 },
  { id: 172, cartId: 56, name: 'Guarana', category: 'Fruits exotiques', price: 18.30, quantity: 1 },
  { id: 173, cartId: 58, name: 'Silencieux échappement', category: 'Automobile', price: 156.90, quantity: 1 },
  { id: 174, cartId: 58, name: 'Gombo violet', category: 'Légumes anciens', price: 7.60, quantity: 2 },
  { id: 175, cartId: 59, name: 'Babaco', category: 'Fruits exotiques', price: 16.90, quantity: 1 },
  { id: 176, cartId: 59, name: 'Radiateur moteur', category: 'Automobile', price: 189.90, quantity: 1 },
  { id: 177, cartId: 61, name: 'Arroche blonde', category: 'Légumes anciens', price: 6.20, quantity: 2 },
  { id: 178, cartId: 61, name: 'Poire d\\'avocat', category: 'Fruits exotiques', price: 12.80, quantity: 3 },
  { id: 179, cartId: 62, name: 'Courroie accessoires', category: 'Automobile', price: 42.90, quantity: 1 },
  { id: 180, cartId: 62, name: 'Salicorne de mer', category: 'Légumes anciens', price: 14.60, quantity: 1 },
  { id: 181, cartId: 63, name: 'Cherimoya', category: 'Fruits exotiques', price: 23.90, quantity: 1 },
  { id: 182, cartId: 63, name: 'Injecteurs diesel', category: 'Automobile', price: 234.90, quantity: 4 },
  { id: 183, cartId: 64, name: 'Roquette sauvage', category: 'Légumes anciens', price: 5.90, quantity: 2 },
  { id: 184, cartId: 64, name: 'Tamarillo', category: 'Fruits exotiques', price: 15.40, quantity: 2 },
  { id: 185, cartId: 65, name: 'Kit distribution complet', category: 'Automobile', price: 178.90, quantity: 1 },
  { id: 186, cartId: 65, name: 'Mauve sylvestre', category: 'Légumes anciens', price: 8.30, quantity: 1 },
  { id: 187, cartId: 66, name: 'Pepino melon', category: 'Fruits exotiques', price: 11.70, quantity: 2 },
  { id: 188, cartId: 66, name: 'Pompe à eau', category: 'Automobile', price: 89.90, quantity: 1 },
  { id: 189, cartId: 67, name: 'Plantain corne', category: 'Légumes anciens', price: 6.80, quantity: 3 },
  { id: 190, cartId: 67, name: 'Grumichama', category: 'Fruits exotiques', price: 21.60, quantity: 1 },
  { id: 191, cartId: 68, name: 'Turbo échange standard', category: 'Automobile', price: 456.90, quantity: 1 },
  { id: 192, cartId: 68, name: 'Radicchio panaché', category: 'Légumes anciens', price: 7.90, quantity: 1 },
  { id: 193, cartId: 70, name: 'Kiwi gold', category: 'Fruits exotiques', price: 9.80, quantity: 4 },
  { id: 194, cartId: 70, name: 'Démarreur reconditionné', category: 'Automobile', price: 123.90, quantity: 1 },
  { id: 195, cartId: 71, name: 'Pourpier doré', category: 'Légumes anciens', price: 5.60, quantity: 2 },
  { id: 196, cartId: 71, name: 'Physalis peruviana', category: 'Fruits exotiques', price: 13.40, quantity: 2 },
  { id: 197, cartId: 72, name: 'Alternateur 90A', category: 'Automobile', price: 167.90, quantity: 1 },
  { id: 198, cartId: 72, name: 'Mâche sauvage', category: 'Légumes anciens', price: 8.90, quantity: 1 },
  { id: 199, cartId: 73, name: 'Jabuticaba', category: 'Fruits exotiques', price: 28.90, quantity: 1 },
  { id: 200, cartId: 73, name: 'Jeu plaquettes frein', category: 'Automobile', price: 78.90, quantity: 1 },
  { id: 201, cartId: 75, name: 'Chiendent officinal', category: 'Légumes anciens', price: 6.40, quantity: 2 },
  { id: 202, cartId: 75, name: 'Jujube chinois', category: 'Fruits exotiques', price: 16.80, quantity: 2 },
  { id: 203, cartId: 76, name: 'Catalyseur universel', category: 'Automobile', price: 289.90, quantity: 1 },
  { id: 204, cartId: 76, name: 'Criste marine', category: 'Légumes anciens', price: 12.60, quantity: 1 },
  { id: 205, cartId: 77, name: 'Sapote noire', category: 'Fruits exotiques', price: 19.90, quantity: 1 },
  { id: 206, cartId: 77, name: 'Vanne EGR', category: 'Automobile', price: 156.90, quantity: 1 },
  { id: 207, cartId: 78, name: 'Ficoïde glaciale', category: 'Légumes anciens', price: 9.80, quantity: 1 },
  { id: 208, cartId: 78, name: 'Longan séché', category: 'Fruits exotiques', price: 11.40, quantity: 2 },
  { id: 209, cartId: 80, name: 'Silent bloc triangle', category: 'Automobile', price: 45.90, quantity: 2 },
  { id: 210, cartId: 80, name: 'Amarante rouge', category: 'Légumes anciens', price: 7.20, quantity: 2 },
  { id: 211, cartId: 81, name: 'Ramboutan frais', category: 'Fruits exotiques', price: 14.90, quantity: 3 },
  { id: 212, cartId: 81, name: 'Rotules de suspension', category: 'Automobile', price: 67.90, quantity: 2 },
  { id: 213, cartId: 82, name: 'Mertensia maritime', category: 'Légumes anciens', price: 18.60, quantity: 1 },
  { id: 214, cartId: 82, name: 'Mangue Tommy', category: 'Fruits exotiques', price: 8.90, quantity: 4 },
  { id: 215, cartId: 83, name: 'Capteur ABS avant', category: 'Automobile', price: 56.90, quantity: 1 },
  { id: 216, cartId: 83, name: 'Tétragone', category: 'Légumes anciens', price: 10.40, quantity: 1 },
  { id: 217, cartId: 84, name: 'Litchi Victoria', category: 'Fruits exotiques', price: 12.80, quantity: 3 },
  { id: 218, cartId: 84, name: 'Soufflet de cardan', category: 'Automobile', price: 28.90, quantity: 2 },
  { id: 219, cartId: 85, name: 'Plantain légume', category: 'Légumes anciens', price: 5.90, quantity: 4 },
  { id: 220, cartId: 85, name: 'Sapote mamey', category: 'Fruits exotiques', price: 22.40, quantity: 1 },
  { id: 221, cartId: 86, name: 'Maître-cylindre frein', category: 'Automobile', price: 123.90, quantity: 1 },
  { id: 222, cartId: 86, name: 'Pissenlit cultivé', category: 'Légumes anciens', price: 6.80, quantity: 2 },
  { id: 223, cartId: 87, name: 'Papaye solo', category: 'Fruits exotiques', price: 7.90, quantity: 2 },
  { id: 224, cartId: 87, name: 'Durite refroidissement', category: 'Automobile', price: 34.90, quantity: 3 },
  { id: 225, cartId: 88, name: 'Bette à carde', category: 'Légumes anciens', price: 4.90, quantity: 3 },
  { id: 226, cartId: 88, name: 'Carambole étoilée', category: 'Fruits exotiques', price: 11.60, quantity: 2 },
  { id: 227, cartId: 89, name: 'Thermostat moteur', category: 'Automobile', price: 42.90, quantity: 1 },
  { id: 228, cartId: 89, name: 'Raiponce en épi', category: 'Légumes anciens', price: 13.80, quantity: 1 },
  { id: 229, cartId: 90, name: 'Goyave rose', category: 'Fruits exotiques', price: 9.90, quantity: 3 },
  { id: 230, cartId: 90, name: 'Sonde lambda', category: 'Automobile', price: 89.90, quantity: 1 },
  { id: 231, cartId: 92, name: 'Ortie cultivée', category: 'Légumes anciens', price: 7.60, quantity: 2 },
  { id: 232, cartId: 92, name: 'Ananas Victoria', category: 'Fruits exotiques', price: 6.90, quantity: 1 },
  { id: 233, cartId: 93, name: 'Capteur pression huile', category: 'Automobile', price: 28.90, quantity: 1 },
  { id: 234, cartId: 93, name: 'Bourrache officinale', category: 'Légumes anciens', price: 8.40, quantity: 2 },
  { id: 235, cartId: 94, name: 'Fruit du dragon blanc', category: 'Fruits exotiques', price: 13.90, quantity: 2 },
  { id: 236, cartId: 94, name: 'Filtre à particules', category: 'Automobile', price: 567.90, quantity: 1 },
  { id: 237, cartId: 95, name: 'Oseille sanguine', category: 'Légumes anciens', price: 6.90, quantity: 2 },
  { id: 238, cartId: 95, name: 'Kaki sharon', category: 'Fruits exotiques', price: 8.80, quantity: 4 },
  { id: 239, cartId: 96, name: 'Volant moteur', category: 'Automobile', price: 234.90, quantity: 1 },
  { id: 240, cartId: 96, name: 'Claytone de Cuba', category: 'Légumes anciens', price: 11.20, quantity: 1 },
  { id: 241, cartId: 97, name: 'Mangoustan violet', category: 'Fruits exotiques', price: 24.90, quantity: 1 },
  { id: 242, cartId: 97, name: 'Filtre FAP', category: 'Automobile', price: 456.90, quantity: 1 },
  { id: 243, cartId: 98, name: 'Chénopode bon-henri', category: 'Légumes anciens', price: 9.60, quantity: 1 },
  { id: 244, cartId: 98, name: 'Grenade wonderful', category: 'Fruits exotiques', price: 7.80, quantity: 3 },
  { id: 245, cartId: 99, name: 'Cardans avant', category: 'Automobile', price: 178.90, quantity: 2 },
  { id: 246, cartId: 99, name: 'Épinard-fraise', category: 'Légumes anciens', price: 8.90, quantity: 2 },
  { id: 247, cartId: 100, name: 'Kumquat', category: 'Fruits exotiques', price: 10.40, quantity: 2 },
  { id: 248, cartId: 100, name: 'Débitmètre d\\'air', category: 'Automobile', price: 167.90, quantity: 1 },
  { id: 249, cartId: 101, name: 'Pimprenelle', category: 'Légumes anciens', price: 7.80, quantity: 1 },
  { id: 250, cartId: 101, name: 'Pitaya jaune', category: 'Fruits exotiques', price: 16.90, quantity: 1 },
  { id: 251, cartId: 102, name: 'Pompe injection diesel', category: 'Automobile', price: 567.90, quantity: 1 },
  { id: 252, cartId: 102, name: 'Livèche officinale', category: 'Légumes anciens', price: 12.40, quantity: 1 },
  { id: 253, cartId: 104, name: 'Durian Monthong', category: 'Fruits exotiques', price: 34.90, quantity: 1 },
  { id: 254, cartId: 104, name: 'Triangle de suspension', category: 'Automobile', price: 89.90, quantity: 2 },
  { id: 255, cartId: 105, name: 'Moutarde brune', category: 'Légumes anciens', price: 5.60, quantity: 2 },
  { id: 256, cartId: 105, name: 'Corossol épineux', category: 'Fruits exotiques', price: 28.90, quantity: 1 },
  { id: 257, cartId: 106, name: 'Injecteurs essence', category: 'Automobile', price: 345.90, quantity: 4 },
  { id: 258, cartId: 106, name: 'Berce commune', category: 'Légumes anciens', price: 9.80, quantity: 1 },
  { id: 259, cartId: 107, name: 'Jaboticaba noire', category: 'Fruits exotiques', price: 32.90, quantity: 1 },
  { id: 260, cartId: 107, name: 'Capteur température eau', category: 'Automobile', price: 34.90, quantity: 1 },
  { id: 261, cartId: 108, name: 'Angélique officinale', category: 'Légumes anciens', price: 11.60, quantity: 1 },
  { id: 262, cartId: 108, name: 'Salak', category: 'Fruits exotiques', price: 18.40, quantity: 2 },
  { id: 263, cartId: 109, name: 'Compresseur clim', category: 'Automobile', price: 289.90, quantity: 1 },
  { id: 264, cartId: 109, name: 'Arroche des jardins', category: 'Légumes anciens', price: 6.90, quantity: 2 },
  { id: 265, cartId: 110, name: 'Açaí en poudre', category: 'Fruits exotiques', price: 24.90, quantity: 1 },
  { id: 266, cartId: 110, name: 'Kit embrayage sport', category: 'Automobile', price: 234.90, quantity: 1 },
  { id: 267, cartId: 111, name: 'Souci officinal', category: 'Légumes anciens', price: 8.40, quantity: 1 },
  { id: 268, cartId: 111, name: 'Camu camu bio', category: 'Fruits exotiques', price: 29.90, quantity: 1 },
  { id: 269, cartId: 112, name: 'Turbo neuf', category: 'Automobile', price: 789.90, quantity: 1 },
  { id: 270, cartId: 112, name: 'Fenouil bronze', category: 'Légumes anciens', price: 7.60, quantity: 2 },
  { id: 271, cartId: 114, name: 'Mangue Kent', category: 'Fruits exotiques', price: 9.90, quantity: 3 },
  { id: 272, cartId: 114, name: 'Capteur PMH', category: 'Automobile', price: 67.90, quantity: 1 },
  { id: 273, cartId: 115, name: 'Consoude de Russie', category: 'Légumes anciens', price: 10.80, quantity: 1 },
  { id: 274, cartId: 115, name: 'Longane frais', category: 'Fruits exotiques', price: 12.90, quantity: 2 },
  { id: 275, cartId: 116, name: 'Silent-bloc moteur', category: 'Automobile', price: 78.90, quantity: 2 },
  { id: 276, cartId: 116, name: 'Shiso pourpre', category: 'Légumes anciens', price: 9.40, quantity: 1 },
  { id: 277, cartId: 117, name: 'Ramboutan bio', category: 'Fruits exotiques', price: 17.90, quantity: 2 },
  { id: 278, cartId: 117, name: 'Radiateur chauffage', category: 'Automobile', price: 134.90, quantity: 1 },
  { id: 279, cartId: 118, name: 'Mélisse citronnelle', category: 'Légumes anciens', price: 8.60, quantity: 2 },
  { id: 280, cartId: 118, name: 'Sapote blanche', category: 'Fruits exotiques', price: 21.90, quantity: 1 },
  { id: 281, cartId: 119, name: 'Pompe à essence', category: 'Automobile', price: 156.90, quantity: 1 },
  { id: 282, cartId: 119, name: 'Épazote mexicain', category: 'Légumes anciens', price: 11.80, quantity: 1 },
  { id: 283, cartId: 120, name: 'Litchi empereur', category: 'Fruits exotiques', price: 14.90, quantity: 3 },
  { id: 284, cartId: 120, name: 'Biellettes direction', category: 'Automobile', price: 89.90, quantity: 2 },
  { id: 285, cartId: 121, name: 'Hysope officinale', category: 'Légumes anciens', price: 9.90, quantity: 1 },
  { id: 286, cartId: 121, name: 'Kiwano bio', category: 'Fruits exotiques', price: 16.40, quantity: 1 },
  { id: 287, cartId: 122, name: 'Kit chaîne distribution', category: 'Automobile', price: 234.90, quantity: 1 },
  { id: 288, cartId: 122, name: 'Livèche écossaise', category: 'Légumes anciens', price: 13.60, quantity: 1 }
];
`;

/**
 * Service API Store
 * Source: src/app/presentations/signal-store/demo/common-code/services/store-api.service.ts
 */
export const storeApiServiceTs = `import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Store } from '../models/store.model';
import { MOCK_STORES } from '../mocks/stores.mock';

@Injectable({ providedIn: 'root' })
export class StoreApiService {
  getStores(): Observable<Store[]> {
    return of(MOCK_STORES).pipe(delay(300));
  }
}
`;

/**
 * Service API Client
 * Source: src/app/presentations/signal-store/demo/common-code/services/client-api.service.ts
 */
export const clientApiServiceTs = `import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Client } from '../models/client.model';
import { MOCK_CLIENTS } from '../mocks/clients.mock';

@Injectable({ providedIn: 'root' })
export class ClientApiService {
  getClientsByStore(storeId: number): Observable<Client[]> {
    const clients = MOCK_CLIENTS.filter(c => c.storeId === storeId);
    return of(clients).pipe(delay(400));
  }
}
`;

/**
 * Service API Cart
 * Source: src/app/presentations/signal-store/demo/common-code/services/cart-api.service.ts
 */
export const cartApiServiceTs = `import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Cart } from '../models/cart.model';
import { MOCK_CARTS } from '../mocks/carts.mock';

@Injectable({ providedIn: 'root' })
export class CartApiService {
  getCartsByClient(clientId: number): Observable<Cart[]> {
    const carts = MOCK_CARTS.filter(c => c.clientId === clientId);
    return of(carts).pipe(delay(350));
  }
}
`;

/**
 * Service API Product
 * Source: src/app/presentations/signal-store/demo/common-code/services/product-api.service.ts
 */
export const productApiServiceTs = `import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Product } from '../models/product.model';
import { MOCK_PRODUCTS } from '../mocks/products.mock';

@Injectable({ providedIn: 'root' })
export class ProductApiService {
  getProductsByCart(cartId: number): Observable<Product[]> {
    const products = MOCK_PRODUCTS.filter(p => p.cartId === cartId);
    return of(products).pipe(delay(300));
  }
}
`;

/**
 * NgRx Actions pour les magasins
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/actions/stores.actions.ts
 */
export const ngrxStoresActionsTs = `import { createAction, props } from '@ngrx/store';
import { Store } from '../../../../common-code/models/store.model';

export const loadStores = createAction('[Stores] Load Stores');

export const loadStoresSuccess = createAction(
  '[Stores] Load Stores Success',
  props<{ stores: Store[] }>()
);

export const loadStoresFailure = createAction(
  '[Stores] Load Stores Failure',
  props<{ error: string }>()
);

export const selectStore = createAction(
  '[Stores] Select Store',
  props<{ storeId: number | null }>()
);
`;

/**
 * NgRx Actions pour les clients
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/actions/clients.actions.ts
 */
export const ngrxClientsActionsTs = `import { createAction, props } from '@ngrx/store';
import { Client } from '../../../../common-code/models/client.model';

export const loadClients = createAction(
  '[Clients] Load Clients',
  props<{ storeId: number }>()
);

export const loadClientsSuccess = createAction(
  '[Clients] Load Clients Success',
  props<{ clients: Client[] }>()
);

export const loadClientsFailure = createAction(
  '[Clients] Load Clients Failure',
  props<{ error: string }>()
);

export const selectClient = createAction(
  '[Clients] Select Client',
  props<{ clientId: number | null }>()
);

export const clearClients = createAction('[Clients] Clear Clients');
`;

/**
 * NgRx Actions pour les paniers
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/actions/carts.actions.ts
 */
export const ngrxCartsActionsTs = `import { createAction, props } from '@ngrx/store';
import { Cart } from '../../../../common-code/models/cart.model';

export const loadCarts = createAction(
  '[Carts] Load Carts',
  props<{ clientId: number }>()
);

export const loadCartsSuccess = createAction(
  '[Carts] Load Carts Success',
  props<{ carts: Cart[] }>()
);

export const loadCartsFailure = createAction(
  '[Carts] Load Carts Failure',
  props<{ error: string }>()
);

export const selectCart = createAction(
  '[Carts] Select Cart',
  props<{ cartId: number | null }>()
);

export const clearCarts = createAction('[Carts] Clear Carts');
`;

/**
 * NgRx Actions pour les produits
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/actions/products.actions.ts
 */
export const ngrxProductsActionsTs = `import { createAction, props } from '@ngrx/store';
import { Product } from '../../../../common-code/models/product.model';

export const loadProducts = createAction(
  '[Products] Load Products',
  props<{ cartId: number }>()
);

export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Products] Load Products Failure',
  props<{ error: string }>()
);

export const clearProducts = createAction('[Products] Clear Products');
`;

/**
 * NgRx Reducer pour les magasins
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers/stores.reducer.ts
 */
export const ngrxStoresReducerTs = `import { createReducer, on } from '@ngrx/store';
import { Store } from '../../../../common-code/models/store.model';
import * as StoresActions from '../actions/stores.actions';

export interface StoresState {
  stores: Store[];
  selectedStoreId: number | null;
  loading: boolean;
  error: string | null;
}

export const initialState: StoresState = {
  stores: [],
  selectedStoreId: null,
  loading: false,
  error: null
};

export const storesReducer = createReducer(
  initialState,
  on(StoresActions.loadStores, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(StoresActions.loadStoresSuccess, (state, { stores }) => ({
    ...state,
    stores,
    loading: false
  })),
  on(StoresActions.loadStoresFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(StoresActions.selectStore, (state, { storeId }) => ({
    ...state,
    selectedStoreId: storeId
  }))
);
`;

/**
 * NgRx Reducer pour les clients
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers/clients.reducer.ts
 */
export const ngrxClientsReducerTs = `import { createReducer, on } from '@ngrx/store';
import { Client } from '../../../../common-code/models/client.model';
import * as ClientsActions from '../actions/clients.actions';

export interface ClientsState {
  clients: Client[];
  selectedClientId: number | null;
  loading: boolean;
  error: string | null;
}

export const initialState: ClientsState = {
  clients: [],
  selectedClientId: null,
  loading: false,
  error: null
};

export const clientsReducer = createReducer(
  initialState,
  on(ClientsActions.loadClients, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ClientsActions.loadClientsSuccess, (state, { clients }) => ({
    ...state,
    clients,
    loading: false
  })),
  on(ClientsActions.loadClientsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ClientsActions.selectClient, (state, { clientId }) => ({
    ...state,
    selectedClientId: clientId
  })),
  on(ClientsActions.clearClients, () => initialState)
);
`;

/**
 * NgRx Reducer pour les paniers
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers/carts.reducer.ts
 */
export const ngrxCartsReducerTs = `import { createReducer, on } from '@ngrx/store';
import { Cart } from '../../../../common-code/models/cart.model';
import * as CartsActions from '../actions/carts.actions';

export interface CartsState {
  carts: Cart[];
  selectedCartId: number | null;
  loading: boolean;
  error: string | null;
}

export const initialState: CartsState = {
  carts: [],
  selectedCartId: null,
  loading: false,
  error: null
};

export const cartsReducer = createReducer(
  initialState,
  on(CartsActions.loadCarts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(CartsActions.loadCartsSuccess, (state, { carts }) => ({
    ...state,
    carts,
    loading: false
  })),
  on(CartsActions.loadCartsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(CartsActions.selectCart, (state, { cartId }) => ({
    ...state,
    selectedCartId: cartId
  })),
  on(CartsActions.clearCarts, () => initialState)
);
`;

/**
 * NgRx Reducer pour les produits
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers/products.reducer.ts
 */
export const ngrxProductsReducerTs = `import { createReducer, on } from '@ngrx/store';
import { Product } from '../../../../common-code/models/product.model';
import * as ProductsActions from '../actions/products.actions';

export interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null
};

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProductsActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false
  })),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ProductsActions.clearProducts, () => initialState)
);
`;

/**
 * NgRx Reducers Index - Configuration globale
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/reducers/index.ts
 */
export const ngrxReducersIndexTs = `import { ActionReducerMap } from '@ngrx/store';
import { storesReducer, StoresState } from './stores.reducer';
import { clientsReducer, ClientsState } from './clients.reducer';
import { cartsReducer, CartsState } from './carts.reducer';
import { productsReducer, ProductsState } from './products.reducer';

export interface AppState {
  stores: StoresState;
  clients: ClientsState;
  carts: CartsState;
  products: ProductsState;
}

export const reducers: ActionReducerMap<AppState> = {
  stores: storesReducer,
  clients: clientsReducer,
  carts: cartsReducer,
  products: productsReducer
};
`;

/**
 * NgRx Effects pour les magasins
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/stores.effects.ts
 */
export const ngrxStoresEffectsTs = `import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { StoreApiService } from '../../../../common-code/services/store-api.service';
import * as StoresActions from '../actions/stores.actions';

@Injectable()
export class StoresEffects {
  private actions\$ = inject(Actions);
  private storeApiService = inject(StoreApiService);

  loadStores\$ = createEffect(() =>
    this.actions\$.pipe(
      ofType(StoresActions.loadStores),
      switchMap(() =>
        this.storeApiService.getStores().pipe(
          map(stores => StoresActions.loadStoresSuccess({ stores })),
          catchError(error => of(StoresActions.loadStoresFailure({ error: error.message })))
        )
      )
    )
  );
}
`;

/**
 * NgRx Effects pour les clients
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/clients.effects.ts
 */
export const ngrxClientsEffectsTs = `import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ClientApiService } from '../../../../common-code/services/client-api.service';
import * as ClientsActions from '../actions/clients.actions';
import * as CartsActions from '../actions/carts.actions';
import * as StoresActions from '../actions/stores.actions';

@Injectable()
export class ClientsEffects {
  private actions\$ = inject(Actions);
  private store = inject(Store);
  private clientApiService = inject(ClientApiService);

  loadClientsOnStoreSelect\$ = createEffect(() =>
    this.actions\$.pipe(
      ofType(StoresActions.selectStore),
      switchMap(({ storeId }) => {
        if (storeId === null) {
          return of(ClientsActions.clearClients());
        }
        return of(ClientsActions.loadClients({ storeId }));
      })
    )
  );

  loadClients\$ = createEffect(() =>
    this.actions\$.pipe(
      ofType(ClientsActions.loadClients),
      switchMap(({ storeId }) =>
        this.clientApiService.getClientsByStore(storeId).pipe(
          map(clients => ClientsActions.loadClientsSuccess({ clients })),
          catchError(error => of(ClientsActions.loadClientsFailure({ error: error.message })))
        )
      )
    )
  );

  clearCartsOnClearClients\$ = createEffect(() =>
    this.actions\$.pipe(
      ofType(ClientsActions.clearClients),
      map(() => CartsActions.clearCarts())
    )
  );
}
`;

/**
 * NgRx Effects pour les paniers
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/carts.effects.ts
 */
export const ngrxCartsEffectsTs = `import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CartApiService } from '../../../../common-code/services/cart-api.service';
import * as CartsActions from '../actions/carts.actions';
import * as ClientsActions from '../actions/clients.actions';
import * as ProductsActions from '../actions/products.actions';

@Injectable()
export class CartsEffects {
  private actions\$ = inject(Actions);
  private store = inject(Store);
  private cartApiService = inject(CartApiService);

  loadCartsOnClientSelect\$ = createEffect(() =>
    this.actions\$.pipe(
      ofType(ClientsActions.selectClient),
      switchMap(({ clientId }) => {
        if (clientId === null) {
          return of(CartsActions.clearCarts());
        }
        return of(CartsActions.loadCarts({ clientId }));
      })
    )
  );

  loadCarts\$ = createEffect(() =>
    this.actions\$.pipe(
      ofType(CartsActions.loadCarts),
      switchMap(({ clientId }) =>
        this.cartApiService.getCartsByClient(clientId).pipe(
          map(carts => CartsActions.loadCartsSuccess({ carts })),
          catchError(error => of(CartsActions.loadCartsFailure({ error: error.message })))
        )
      )
    )
  );

  clearProductsOnClearCarts\$ = createEffect(() =>
    this.actions\$.pipe(
      ofType(CartsActions.clearCarts),
      map(() => ProductsActions.clearProducts())
    )
  );
}
`;

/**
 * NgRx Effects pour les produits
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/effects/products.effects.ts
 */
export const ngrxProductsEffectsTs = `import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { ProductApiService } from '../../../../common-code/services/product-api.service';
import * as ProductsActions from '../actions/products.actions';
import * as CartsActions from '../actions/carts.actions';

@Injectable()
export class ProductsEffects {
  private actions\$ = inject(Actions);
  private productApiService = inject(ProductApiService);

  loadProductsOnCartSelect\$ = createEffect(() =>
    this.actions\$.pipe(
      ofType(CartsActions.selectCart),
      switchMap(({ cartId }) => {
        if (cartId === null) {
          return of(ProductsActions.clearProducts());
        }
        return of(ProductsActions.loadProducts({ cartId }));
      })
    )
  );

  loadProducts\$ = createEffect(() =>
    this.actions\$.pipe(
      ofType(ProductsActions.loadProducts),
      switchMap(({ cartId }) =>
        this.productApiService.getProductsByCart(cartId).pipe(
          map(products => ProductsActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductsActions.loadProductsFailure({ error: error.message })))
        )
      )
    )
  );
}
`;

/**
 * NgRx Selectors pour les magasins
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/selectors/stores.selectors.ts
 */
export const ngrxStoresSelectorsTs = `import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoresState } from '../reducers/stores.reducer';

export const selectStoresState = createFeatureSelector<StoresState>('stores');

export const selectAllStores = createSelector(
  selectStoresState,
  (state: StoresState) => state.stores
);

export const selectSelectedStoreId = createSelector(
  selectStoresState,
  (state: StoresState) => state.selectedStoreId
);

export const selectSelectedStore = createSelector(
  selectAllStores,
  selectSelectedStoreId,
  (stores, selectedId) => stores.find(s => s.id === selectedId) || null
);

export const selectStoresLoading = createSelector(
  selectStoresState,
  (state: StoresState) => state.loading
);

export const selectStoresError = createSelector(
  selectStoresState,
  (state: StoresState) => state.error
);
`;

/**
 * NgRx Selectors pour les clients
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/selectors/clients.selectors.ts
 */
export const ngrxClientsSelectorsTs = `import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ClientsState } from '../reducers/clients.reducer';

export const selectClientsState = createFeatureSelector<ClientsState>('clients');

export const selectAllClients = createSelector(
  selectClientsState,
  (state: ClientsState) => state.clients
);

export const selectSelectedClientId = createSelector(
  selectClientsState,
  (state: ClientsState) => state.selectedClientId
);

export const selectSelectedClient = createSelector(
  selectAllClients,
  selectSelectedClientId,
  (clients, selectedId) => clients.find(c => c.id === selectedId) || null
);

export const selectClientsLoading = createSelector(
  selectClientsState,
  (state: ClientsState) => state.loading
);

export const selectClientsError = createSelector(
  selectClientsState,
  (state: ClientsState) => state.error
);
`;

/**
 * NgRx Selectors pour les paniers
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/selectors/carts.selectors.ts
 */
export const ngrxCartsSelectorsTs = `import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartsState } from '../reducers/carts.reducer';

export const selectCartsState = createFeatureSelector<CartsState>('carts');

export const selectAllCarts = createSelector(
  selectCartsState,
  (state: CartsState) => state.carts
);

export const selectSelectedCartId = createSelector(
  selectCartsState,
  (state: CartsState) => state.selectedCartId
);

export const selectSelectedCart = createSelector(
  selectAllCarts,
  selectSelectedCartId,
  (carts, selectedId) => carts.find(c => c.id === selectedId) || null
);

export const selectCartsLoading = createSelector(
  selectCartsState,
  (state: CartsState) => state.loading
);

export const selectCartsError = createSelector(
  selectCartsState,
  (state: CartsState) => state.error
);
`;

/**
 * NgRx Selectors pour les produits
 * Source: src/app/presentations/signal-store/demo/old-store-code/ngrx-store/store/selectors/products.selectors.ts
 */
export const ngrxProductsSelectorsTs = `import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsState } from '../reducers/products.reducer';

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectAllProducts = createSelector(
  selectProductsState,
  (state: ProductsState) => state.products
);

export const selectProductsLoading = createSelector(
  selectProductsState,
  (state: ProductsState) => state.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  (state: ProductsState) => state.error
);

export const selectProductsTotal = createSelector(
  selectAllProducts,
  (products) => products.reduce((sum, p) => sum + (p.price * p.quantity), 0)
);
`;

/**
 * NgRx Demo Component - L'enfer de l'Observable
 * Source: src/app/presentations/signal-store/demo/components/ngrx-demo/ngrx-demo.component.ts
 */
export const ngrxDemoComponentTs = `import { Component, ChangeDetectionStrategy, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { AppState } from '../../old-store-code/ngrx-store/store/reducers';
import { selectAllStores, selectSelectedStoreId, selectSelectedStore, selectStoresLoading } from '../../old-store-code/ngrx-store/store/selectors/stores.selectors';
import { selectAllClients, selectSelectedClientId, selectSelectedClient, selectClientsLoading } from '../../old-store-code/ngrx-store/store/selectors/clients.selectors';
import { selectAllCarts, selectSelectedCartId, selectSelectedCart, selectCartsLoading } from '../../old-store-code/ngrx-store/store/selectors/carts.selectors';
import { selectAllProducts, selectProductsTotal, selectProductsLoading } from '../../old-store-code/ngrx-store/store/selectors/products.selectors';
import * as StoresActions from '../../old-store-code/ngrx-store/store/actions/stores.actions';
import * as ClientsActions from '../../old-store-code/ngrx-store/store/actions/clients.actions';
import * as CartsActions from '../../old-store-code/ngrx-store/store/actions/carts.actions';
import * as ProductsActions from '../../old-store-code/ngrx-store/store/actions/products.actions';
import { Store as StoreModel } from '../../common-code/models/store.model';
import { Client } from '../../common-code/models/client.model';
import { Cart } from '../../common-code/models/cart.model';
import { Product } from '../../common-code/models/product.model';

@Component({
  selector: 'app-ngrx-demo',
  templateUrl: './ngrx-demo.component.html',
  styleUrl: './ngrx-demo.component.scss',
  imports: [Select, FormsModule, AsyncPipe, CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxDemoComponent implements OnInit {
  private readonly store = inject(Store<AppState>);

  // Observables from selectors
  stores\$: Observable<StoreModel[]> = this.store.select(selectAllStores);
  selectedStoreId\$: Observable<number | null> = this.store.select(selectSelectedStoreId);
  selectedStore\$: Observable<StoreModel | null> = this.store.select(selectSelectedStore);
  storesLoading\$: Observable<boolean> = this.store.select(selectStoresLoading);

  clients\$: Observable<Client[]> = this.store.select(selectAllClients);
  selectedClientId\$: Observable<number | null> = this.store.select(selectSelectedClientId);
  selectedClient\$: Observable<Client | null> = this.store.select(selectSelectedClient);
  clientsLoading\$: Observable<boolean> = this.store.select(selectClientsLoading);

  carts\$: Observable<Cart[]> = this.store.select(selectAllCarts);
  selectedCartId\$: Observable<number | null> = this.store.select(selectSelectedCartId);
  selectedCart\$: Observable<Cart | null> = this.store.select(selectSelectedCart);
  cartsLoading\$: Observable<boolean> = this.store.select(selectCartsLoading);

  products\$: Observable<Product[]> = this.store.select(selectAllProducts);
  productsTotal\$: Observable<number> = this.store.select(selectProductsTotal);
  productsLoading\$: Observable<boolean> = this.store.select(selectProductsLoading);

  // For template bindings (needed for two-way binding with p-select)
  selectedStoreIdValue: number | null = null;
  selectedClientIdValue: number | null = null;
  selectedCartIdValue: number | null = null;

  ngOnInit() {
    // Dispatch initial load action
    this.store.dispatch(StoresActions.loadStores());

    // Subscribe to selected IDs for two-way binding
    this.selectedStoreId\$.subscribe(id => this.selectedStoreIdValue = id);
    this.selectedClientId\$.subscribe(id => this.selectedClientIdValue = id);
    this.selectedCartId\$.subscribe(id => this.selectedCartIdValue = id);
  }

  onStoreChange(storeId: number | null) {
    this.store.dispatch(StoresActions.selectStore({ storeId }));
    if (storeId !== null) {
      this.store.dispatch(ClientsActions.loadClients({ storeId }));
    }
  }

  onClientChange(clientId: number | null) {
    this.store.dispatch(ClientsActions.selectClient({ clientId }));
    if (clientId !== null) {
      this.store.dispatch(CartsActions.loadCarts({ clientId }));
    }
  }

  onCartChange(cartId: number | null) {
    this.store.dispatch(CartsActions.selectCart({ cartId }));
    if (cartId !== null) {
      this.store.dispatch(ProductsActions.loadProducts({ cartId }));
    }
  }
}
`;

/**
 * NgRx Demo Template - AsyncPipe partout
 * Source: src/app/presentations/signal-store/demo/components/ngrx-demo/ngrx-demo.component.html
 */
export const ngrxDemoComponentHtml = `<div class="demo-grid">
  <!-- Store Selection -->
  <div class="selection-card">
    <h3>1. 🏪 Choisissez un Magasin</h3>
    <p-select
      [options]="(stores\$ | async) || []"
      [(ngModel)]="selectedStoreIdValue"
      (onChange)="onStoreChange(\$event.value)"
      optionLabel="name"
      optionValue="id"
      [loading]="(storesLoading\$ | async) || false"
      placeholder="Sélectionner un magasin"
      [style]="{'width': '100%'}"
    />
    @if (selectedStore\$ | async; as selectedStore) {
      <div class="selection-info">
        <strong>{{ selectedStore.name }}</strong>
        <p>{{ selectedStore.city }}, {{ selectedStore.country }}</p>
      </div>
    }
  </div>

  <!-- Client Selection -->
  <div class="selection-card" [class.disabled]="!(selectedStoreId\$ | async)">
    <h3>2. 👤 Choisissez un Client</h3>
    <p-select
      [options]="(clients\$ | async) || []"
      [(ngModel)]="selectedClientIdValue"
      (onChange)="onClientChange(\$event.value)"
      optionLabel="name"
      optionValue="id"
      [loading]="(clientsLoading\$ | async) || false"
      [disabled]="!(selectedStoreId\$ | async)"
      placeholder="Sélectionner un client"
      [style]="{'width': '100%'}"
    />
    @if (selectedClient\$ | async; as selectedClient) {
      <div class="selection-info">
        <strong>{{ selectedClient.name }}</strong>
        <p>{{ selectedClient.email }}</p>
      </div>
    }
  </div>

  <!-- Cart Selection -->
  <div class="selection-card" [class.disabled]="!(selectedClientId\$ | async)">
    <h3>3. 🛒 Choisissez un Panier</h3>
    <p-select
      [options]="(carts\$ | async) || []"
      [(ngModel)]="selectedCartIdValue"
      (onChange)="onCartChange(\$event.value)"
      optionLabel="date"
      optionValue="id"
      [loading]="(cartsLoading\$ | async) || false"
      [disabled]="!(selectedClientId\$ | async)"
      placeholder="Sélectionner un panier"
      [style]="{'width': '100%'}"
    />
    @if (selectedCart\$ | async; as selectedCart) {
      <div class="selection-info">
        <strong>Panier du {{ selectedCart.date }}</strong>
        <p>Total: {{ selectedCart.total | currency:'EUR' }}</p>
      </div>
    }
  </div>

  <!-- Products List -->
  <div class="products-card" [class.disabled]="!(selectedCartId\$ | async)">
    <h3>4. 📦 Produits dans le Panier</h3>
    @if (productsLoading\$ | async) {
      <div class="loading-state">Chargement des produits...</div>
    } @else if ((products\$ | async)?.length) {
      <div class="products-list">
        @for (product of (products\$ | async); track product.id) {
          <div class="product-item">
            <div class="product-details">
              <strong>{{ product.name }}</strong>
              <span class="product-category">{{ product.category }}</span>
            </div>
            <div class="product-price">
              <span class="quantity">x{{ product.quantity }}</span>
              <strong>{{ product.price * product.quantity | currency:'EUR' }}</strong>
            </div>
          </div>
        }
      </div>
      <div class="products-total">
        <strong>Total:</strong>
        <strong class="total-amount">{{ (productsTotal\$ | async) | currency:'EUR' }}</strong>
      </div>
    } @else if (selectedCartId\$ | async) {
      <div class="empty-state">Aucun produit dans ce panier</div>
    } @else {
      <div class="empty-state">Sélectionnez un panier pour voir les produits</div>
    }
  </div>
</div>

<div class="code-hint">
  ⚠️ Ceci nécessite <strong>15+ fichiers</strong> : actions, reducers, effects, selectors, tests... (~800 lignes de code !)
</div>
`;

/**
 * StoresStore - Signal Store pour la gestion des magasins
 * Source: src/app/presentations/signal-store/demo/signal-store-code/signal-store/store/stores.store.ts
 */
export const storesStoreTs = `import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, withHooks, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Store } from '../../../common-code/models/store.model';
import { StoreApiService } from '../../../common-code/services/store-api.service';

interface StoresState {
  stores: Store[];
  selectedStoreId: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: StoresState = {
  stores: [],
  selectedStoreId: null,
  loading: false,
  error: null
};

export const StoresStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ stores, selectedStoreId }) => ({
    selectedStore: computed(() => stores().find(s => s.id === selectedStoreId()) || null)
  })),
  withMethods((store, storeApiService = inject(StoreApiService)) => ({
    loadStores: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { loading: true, error: null })),
        switchMap(() =>
          storeApiService.getStores().pipe(
            tapResponse({
              next: (stores) => patchState(store, { stores, loading: false }),
              error: (error: Error) => patchState(store, { error: error.message, loading: false })
            })
          )
        )
      )
    ),

    selectStore(storeId: number | null) {
      patchState(store, { selectedStoreId: storeId });
    }
  })),
  withHooks({
    onInit(store) {
      store.loadStores();
    }
  })
);
`;

/**
 * ClientsStore - Signal Store pour la gestion des clients
 * Source: src/app/presentations/signal-store/demo/signal-store-code/signal-store/store/clients.store.ts
 */
export const clientsStoreTs = `import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, EMPTY } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Client } from '../../../common-code/models/client.model';
import { ClientApiService } from '../../../common-code/services/client-api.service';

interface ClientsState {
  clients: Client[];
  selectedClientId: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: ClientsState = {
  clients: [],
  selectedClientId: null,
  loading: false,
  error: null
};

export const ClientsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ clients, selectedClientId }) => ({
    selectedClient: computed(() => clients().find(c => c.id === selectedClientId()) || null)
  })),
  withMethods((store, clientApiService = inject(ClientApiService)) => ({
    loadClientsByStore: rxMethod<number | null>(
      pipe(
        tap(() => patchState(store, { clients: [], selectedClientId: null })),
        switchMap((storeId) => {
          if (storeId === null) return EMPTY;
          patchState(store, { loading: true, error: null });
          return clientApiService.getClientsByStore(storeId).pipe(
            tapResponse({
              next: (clients) => patchState(store, { clients, loading: false }),
              error: (error: Error) => patchState(store, { error: error.message, loading: false })
            })
          );
        })
      )
    ),

    selectClient(clientId: number | null) {
      patchState(store, { selectedClientId: clientId });
    },

    reset() {
      patchState(store, { clients: [], selectedClientId: null });
    }
  }))
);
`;

/**
 * CartsStore - Signal Store pour la gestion des paniers
 * Source: src/app/presentations/signal-store/demo/signal-store-code/signal-store/store/carts.store.ts
 */
export const cartsStoreTs = `import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, EMPTY } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Cart } from '../../../common-code/models/cart.model';
import { CartApiService } from '../../../common-code/services/cart-api.service';

interface CartsState {
  carts: Cart[];
  selectedCartId: number | null;
  loading: boolean;
  error: string | null;
}

const initialState: CartsState = {
  carts: [],
  selectedCartId: null,
  loading: false,
  error: null
};

export const CartsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ carts, selectedCartId }) => ({
    selectedCart: computed(() => carts().find(c => c.id === selectedCartId()) || null)
  })),
  withMethods((store, cartApiService = inject(CartApiService)) => ({
    loadCartsByClient: rxMethod<number | null>(
      pipe(
        tap(() => patchState(store, { carts: [], selectedCartId: null })),
        switchMap((clientId) => {
          if (clientId === null) return EMPTY;
          patchState(store, { loading: true, error: null });
          return cartApiService.getCartsByClient(clientId).pipe(
            tapResponse({
              next: (carts) => patchState(store, { carts, loading: false }),
              error: (error: Error) => patchState(store, { error: error.message, loading: false })
            })
          );
        })
      )
    ),

    selectCart(cartId: number | null) {
      patchState(store, { selectedCartId: cartId });
    },

    reset() {
      patchState(store, { carts: [], selectedCartId: null });
    }
  }))
);
`;

/**
 * ProductsStore - Signal Store pour la gestion des produits
 * Source: src/app/presentations/signal-store/demo/signal-store-code/signal-store/store/products.store.ts
 */
export const productsStoreTs = `import { computed, inject } from '@angular/core';
import { signalStore, withState, withComputed, withMethods, patchState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, EMPTY } from 'rxjs';
import { tapResponse } from '@ngrx/operators';
import { Product } from '../../../common-code/models/product.model';
import { ProductApiService } from '../../../common-code/services/product-api.service';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null
};

export const ProductsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ products }) => ({
    total: computed(() => products().reduce((sum, p) => sum + (p.price * p.quantity), 0))
  })),
  withMethods((store, productApiService = inject(ProductApiService)) => ({
    loadProductsByCart: rxMethod<number | null>(
      pipe(
        tap(() => patchState(store, { products: [] })),
        switchMap((cartId) => {
          if (cartId === null) return EMPTY;
          patchState(store, { loading: true, error: null });
          return productApiService.getProductsByCart(cartId).pipe(
            tapResponse({
              next: (products) => patchState(store, { products, loading: false }),
              error: (error: Error) => patchState(store, { error: error.message, loading: false })
            })
          );
        })
      )
    ),

    reset() {
      patchState(store, { products: [] });
    }
  }))
);
`;

/**
 * Signal Store Demo Component - Composition des 4 Signal Stores
 * Source: src/app/presentations/signal-store/slides/demo-interactive/demo-interactive.slide.ts
 */
export const signalStoreDemoComponentTs = `import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { StoresStore } from '../../demo/signal-store-code/signal-store/store/stores.store';
import { ClientsStore } from '../../demo/signal-store-code/signal-store/store/clients.store';
import { CartsStore } from '../../demo/signal-store-code/signal-store/store/carts.store';
import { ProductsStore } from '../../demo/signal-store-code/signal-store/store/products.store';
import { Select } from 'primeng/select';

@Component({
  selector: 'app-demo-interactive-slide',
  templateUrl: './demo-interactive.slide.html',
  styleUrl: './demo-interactive.slide.scss',
  imports: [Select, FormsModule, CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoInteractiveSlide {
  // Inject 4 separate stores - composition in action!
  private readonly storesStore = inject(StoresStore);
  private readonly clientsStore = inject(ClientsStore);
  private readonly cartsStore = inject(CartsStore);
  private readonly productsStore = inject(ProductsStore);

  // Expose stores state
  stores = this.storesStore.stores;
  selectedStoreId = this.storesStore.selectedStoreId;
  selectedStore = this.storesStore.selectedStore;
  storesLoading = this.storesStore.loading;

  clients = this.clientsStore.clients;
  selectedClientId = this.clientsStore.selectedClientId;
  selectedClient = this.clientsStore.selectedClient;
  clientsLoading = this.clientsStore.loading;

  carts = this.cartsStore.carts;
  selectedCartId = this.cartsStore.selectedCartId;
  selectedCart = this.cartsStore.selectedCart;
  cartsLoading = this.cartsStore.loading;

  products = this.productsStore.products;
  productsTotal = this.productsStore.total;
  productsLoading = this.productsStore.loading;

  // Orchestrate actions across stores
  onStoreChange(storeId: number | null) {
    this.storesStore.selectStore(storeId);
    this.clientsStore.reset();
    this.cartsStore.reset();
    this.productsStore.reset();
    if (storeId !== null) {
      this.clientsStore.loadClientsByStore(storeId);
    }
  }

  onClientChange(clientId: number | null) {
    this.clientsStore.selectClient(clientId);
    this.cartsStore.reset();
    this.productsStore.reset();
    if (clientId !== null) {
      this.cartsStore.loadCartsByClient(clientId);
    }
  }

  onCartChange(cartId: number | null) {
    this.cartsStore.selectCart(cartId);
    this.productsStore.reset();
    if (cartId !== null) {
      this.productsStore.loadProductsByCart(cartId);
    }
  }
}
`;

/**
 * Signal Store Demo Template - Pas d'AsyncPipe !
 * Source: src/app/presentations/signal-store/slides/demo-interactive/demo-interactive.slide.html
 */
export const signalStoreDemoComponentHtml = `<h1>🎮 Démo Interactive : SignalStore en Action</h1>

<div class="slide-container">
  <p class="subtitle">Une seule ligne de code par action, tout le reste est automatique !</p>

  <div class="demo-grid">
    <!-- Store Selection -->
    <div class="selection-card">
      <h3>1. 🏪 Choisissez un Magasin</h3>
      <p-select
        [options]="stores()"
        [(ngModel)]="selectedStoreId"
        (onChange)="onStoreChange(\$event.value)"
        optionLabel="name"
        optionValue="id"
        [loading]="storesLoading()"
        placeholder="Sélectionner un magasin"
        [style]="{'width': '100%'}"
      />
      @if (selectedStore()) {
        <div class="selection-info">
          <strong>{{ selectedStore()!.name }}</strong>
          <p>{{ selectedStore()!.city }}, {{ selectedStore()!.country }}</p>
        </div>
      }
    </div>

    <!-- Client Selection -->
    <div class="selection-card" [class.disabled]="!selectedStoreId()">
      <h3>2. 👤 Choisissez un Client</h3>
      <p-select
        [options]="clients()"
        [(ngModel)]="selectedClientId"
        (onChange)="onClientChange(\$event.value)"
        optionLabel="name"
        optionValue="id"
        [loading]="clientsLoading()"
        [disabled]="!selectedStoreId()"
        placeholder="Sélectionner un client"
        [style]="{'width': '100%'}"
      />
      @if (selectedClient()) {
        <div class="selection-info">
          <strong>{{ selectedClient()!.name }}</strong>
          <p>{{ selectedClient()!.email }}</p>
        </div>
      }
    </div>

    <!-- Cart Selection -->
    <div class="selection-card" [class.disabled]="!selectedClientId()">
      <h3>3. 🛒 Choisissez un Panier</h3>
      <p-select
        [options]="carts()"
        [(ngModel)]="selectedCartId"
        (onChange)="onCartChange(\$event.value)"
        optionLabel="date"
        optionValue="id"
        [loading]="cartsLoading()"
        [disabled]="!selectedClientId()"
        placeholder="Sélectionner un panier"
        [style]="{'width': '100%'}"
      />
      @if (selectedCart()) {
        <div class="selection-info">
          <strong>Panier du {{ selectedCart()!.date }}</strong>
          <p>Total: {{ selectedCart()!.total | currency:'EUR' }}</p>
        </div>
      }
    </div>

    <!-- Products List -->
    <div class="products-card" [class.disabled]="!selectedCartId()">
      <h3>4. 📦 Produits dans le Panier</h3>
      @if (productsLoading()) {
        <div class="loading-state">Chargement des produits...</div>
      } @else if (products().length > 0) {
        <div class="products-list">
          @for (product of products(); track product.id) {
            <div class="product-item">
              <div class="product-details">
                <strong>{{ product.name }}</strong>
                <span class="product-category">{{ product.category }}</span>
              </div>
              <div class="product-price">
                <span class="quantity">x{{ product.quantity }}</span>
                <strong>{{ product.price * product.quantity | currency:'EUR' }}</strong>
              </div>
            </div>
          }
        </div>
        <div class="products-total">
          <strong>Total:</strong>
          <strong class="total-amount">{{ productsTotal() | currency:'EUR' }}</strong>
        </div>
      } @else if (selectedCartId()) {
        <div class="empty-state">Aucun produit dans ce panier</div>
      } @else {
        <div class="empty-state">Sélectionnez un panier pour voir les produits</div>
      }
    </div>
  </div>

  <div class="code-hint">
    💡 Tout ceci fonctionne avec <strong>1 seul fichier</strong> de ~160 lignes !
  </div>
</div>
`;

