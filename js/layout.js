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
  // Load small nav helper after header is in the DOM.
  // Resolve the URL relative to this module so pages in subfolders don't produce a 404 or get served HTML.
  const navScript = document.createElement('script');
  try {
    // import.meta.url is available in ES modules; resolve nav.js relative to this file's location
    navScript.src = new URL('./nav.js', import.meta.url).href;
  } catch (e) {
    // Fallback: use the js/ path relative to site root
    navScript.src = './js/nav.js';
  }
  navScript.defer = true;
  document.body.appendChild(navScript);
});
