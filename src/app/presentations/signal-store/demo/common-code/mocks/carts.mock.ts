import { Cart } from '../models/cart.model';

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
