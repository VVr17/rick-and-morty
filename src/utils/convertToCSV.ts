import Papa from 'papaparse';
import { CharacterType } from 'types/character';

export const convertToCSV = (data: (CharacterType | null)[]) => {
  return Papa.unparse(data);
};
