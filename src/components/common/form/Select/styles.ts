export const selectStyles = {
  backgroundColor: 'secondary.main',
  color: 'primary.dark',

  '&:hover': {
    backgroundColor: 'action.hover',
  },
  '&:focus-within': {
    backgroundColor: 'action.focus',
  },
};

export const multipleSelectStyles = {
  ...selectStyles,
  padding: '12px 32px 12px 14px',

  '& div': {
    padding: 0,
  },
};

export const menuStyles = { PaperProps: { sx: { maxHeight: 300 } } };

export const optionStyles = {
  color: 'primary.dark',
  textTransform: 'capitalize',
};

export const checkedStyles = {
  '&.Mui-checked': {
    color: 'action.selected',
  },
};
