import Papa from 'papaparse';
import { CharacterType } from 'types/character';

/**
 *   Convert the character data to CSV format.
 *
 * @param data - An array of character objects or null values to be converted to CSV.
 * @returns A CSV-formatted string containing character data.
 */
export const convertToCSV = (data: (CharacterType | null)[]) => {
  return Papa.unparse(data);
};
