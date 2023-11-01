export const navButtonStyles = {
  backgroundColor: 'secondary.main',
  color: 'primary.main',
  boxShadow:
    '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)',

  '&:hover': {
    backgroundColor: 'text.secondary',
  },
  '&:focus': {
    backgroundColor: 'text.secondary',
  },
  '&:disabled': {
    backgroundColor: 'text.secondary',
    color: 'rgba(39, 43, 51, 0.60)',
  },
};

export const buttonStyles = {
  backgroundColor: 'background.default',
  color: 'text.primary',
  boxShadow:
    '0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)',

  '&:hover': {
    backgroundColor: 'text.secondary',
    color: 'primary.dark',
  },
  '&:focus': {
    backgroundColor: 'text.secondary',
    color: 'primary.dark',
  },

  '&.Mui-selected': {
    boxShadow:
      '0px 5px 14px 0px rgba(0, 0, 0, 0.12), 0px 9px 10px 0px rgba(0, 0, 0, 0.14), 0px 5px 5px 0px rgba(0, 0, 0, 0.20)',
    backgroundColor: 'text.primary',
    color: 'primary.dark',
  },
  '&.Mui-selected:hover': {
    backgroundColor: 'text.secondary',
    color: 'primary.dark',
  },
  '&.Mui-selected:focus': {
    backgroundColor: 'text.secondary',
    color: 'primary.dark',
  },
};
