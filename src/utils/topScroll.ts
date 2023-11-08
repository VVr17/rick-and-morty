/**
 * Scroll to the top of the page with a smooth scroll animation.
 */
export const topScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
