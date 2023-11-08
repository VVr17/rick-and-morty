export const selectStyles = {
  backgroundColor: 'secondary.main',
  color: 'primary.dark',
  padding: '12px 32px 12px 14px',

  '& div': {
    padding: 0,
  },

  '&:hover': {
    backgroundColor: 'action.hover',
  },
  '&:focus-within': {
    backgroundColor: 'action.focus',
  },
};

export const checkboxStyles = {
  '&.Mui-checked': {
    color: 'action.selected',
  },
};
