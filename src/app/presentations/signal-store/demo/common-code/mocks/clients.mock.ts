import { Client } from '../models/client.model';

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
