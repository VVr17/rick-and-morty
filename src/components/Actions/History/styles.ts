export const styles = {
  style: {
    height: '580px',
    padding: '16px',
    top: '24px',
  },
};

export const closeButtonStyles = {
  mt: 'auto',
  width: 80,
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
