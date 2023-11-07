import { CharacterType } from 'types/character';
import { convertToCSV } from './convertToCSV';

export const downloadCharacters = (characters: (CharacterType | null)[]) => {
  const csvData = convertToCSV(characters);
  const blob = new Blob([csvData], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.download = 'characters.csv';

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
