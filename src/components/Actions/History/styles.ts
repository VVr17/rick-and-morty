export const styles = {
  style: {
    top: '24px',
    maxHeight: '580px',
    padding: '16px',
  },
};

export const closeButtonStyles = {
  mt: 'auto',
  backgroundColor: 'action.focus',

  ':hover': {
    backgroundColor: 'action.hover',
  },
  ':focus': {
    backgroundColor: 'action.hover',
  },
};

export const linkStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  width: '100%',
  py: 2,
  pr: 2,
  gap: '8px',

  ':hover': { color: 'action.hover', textDecoration: 'underline' },
  ':focus': { color: 'action.hover', textDecoration: 'underline' },
};
