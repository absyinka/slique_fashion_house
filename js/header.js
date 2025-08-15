export const headerHTML = `
<header>
  <div class="logo">
    <a href="/">Silque Fashion House</a>
  </div>
  <button id="nav-toggle" class="nav-toggle" aria-controls="site-nav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="hamburger"></span>
  </button>
  <nav>
    <ul id="site-nav">
      <li><a href="about.html">About Us</a></li>
      <li class="dropdown">
        <span class="dropbtn" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false">Collections ▾</span>
        <ul class="dropdown-content">
          <li><a href="traditional.html">Traditional</a></li>
          <li><a href="casual.html">Casual</a></li>
          <li><a href="formal.html">Formal</a></li>
        </ul>
      </li>
      <li><a href="board.html">Board of Trustees</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
</header>
`;
