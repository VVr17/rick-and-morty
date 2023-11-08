export const styles = {
  '& input': {
    color: 'primary.dark',
    backgroundColor: 'secondary.main',
    borderRadius: '4px',
  },
  '& input::placeholder': {
    color: 'primary.main',
    opacity: 0.8,
  },

  '& input:hover': {
    backgroundColor: 'action.hover',
  },
  '& input:focus': {
    backgroundColor: 'action.focus',
  },
};
