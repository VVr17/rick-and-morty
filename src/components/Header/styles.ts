export const navLinkStyles = {
  py: 2,
  display: 'block',
  fontWeight: 700,
  textDecoration: 'none',
  color: 'primary.light',

  '&:hover': {
    color: 'action.hover',
  },
  '&:focus': {
    color: 'action.hover',
  },

  '&.active': {
    color: 'action.focus',
  },
};

export const mobileNavLinkStyles = {
  fontWeight: 700,
  textDecoration: 'none',
  '&.active': {
    textDecoration: 'underline',
  },
};
