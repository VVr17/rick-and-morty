/**
 * Get a character status, species, and gender description based on the provided data.
 *
 * @param {string} type - The type of description ('list' or 'details').
 * @param {string} status - The character's status.
 * @param {string} species - The character's species.
 * @param {string} gender - The character's gender.
 *
 * @returns {string} A concatenated description with optional fields.
 */
export const getStatusDescription = (
  type: 'list' | 'details',
  status: string,
  species: string,
  gender: string
) => {
  return `${status && status} - ${species && species} ${
    type === 'details' && gender ? `- ${gender}` : ''
  }`;
};
