import { headerHTML } from './header.js';
import { footerHTML } from './footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('header-placeholder');
  const footerContainer = document.getElementById('footer-placeholder');

  if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
  }

  if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
  }
});
