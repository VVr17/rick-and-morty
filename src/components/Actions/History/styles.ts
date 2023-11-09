export const styles = {
  style: {
    top: '24px',
    height: '580px',
    padding: '16px',
  },
};

export const closeButtonStyles = {
  width: 80,
  mt: 'auto',

  boxShadow: 'none',
  backgroundColor: 'transparent',
  color: 'action.selected',

  ':hover': {
    backgroundColor: 'action.hover',
    color: 'primary.light',
  },
  ':focus': {
    backgroundColor: 'action.hover',
    color: 'primary.light',
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
