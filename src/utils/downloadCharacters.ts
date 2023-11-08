import { CharacterType } from 'types';
import { convertToCSV } from './convertToCSV';

/**
 * Download character data as a CSV file.
 *
 * @param characters - An array of character objects values to be downloaded.
 */
export const downloadCharacters = (characters: (CharacterType | null)[]) => {
  // Convert the character data to CSV format.
  const csvData = convertToCSV(characters);

  // Create a Blob from the CSV data with the specified MIME type.
  const blob = new Blob([csvData], { type: 'text/csv' });

  // Create a download link and trigger the download.
  downloadBlob(blob, 'characters.csv');
};

/**
 * Utility function to create a hidden download link and trigger the download.
 *
 * @param blob - The Blob data to be downloaded.
 * @param fileName - The name of the file to be downloaded.
 */
export const downloadBlob = (blob: Blob, fileName: string) => {
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = url;
  link.download = fileName;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
