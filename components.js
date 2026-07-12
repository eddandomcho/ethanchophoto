class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
  <header class="header" id="home">
    <nav>
      <div class="nav__header">
        <div class="nav__logo">
          <a href="index.html">
            <img src="assets/ethanchophoto-logo.png" alt="Ethan Cho Photo Logo" />
          </a>
        </div>
  
        <div>
          <h1 class="nav__title">ETHAN CHO PHOTO</h1>
        </div>
  
        <div class="nav__menu__btn" id="menu-btn">
          <i class="ri-menu-line"></i>
        </div>
      </div>
      <ul class="nav__links" id="nav-links">
        <li><a href="index.html#home">HOME</a></li>
        <li><a href="index.html#about">ABOUT ME</a></li>
        <li><a href="photography.html">PHOTOGRAPHY</a></li>
        <li class="nav__logo">
          <a href="index.html">
            <img src="assets/ethanchophoto-logo.png" alt="Ethan Cho Photo Logo" />
          </a>
        </li>
        <li><a href="index.html#client">CLIENTS</a></li>
        <li><a href="index.html#blog">BLOG</a></li>
        <li><a href="index.html#contact">CONTACT</a></li>
      </ul>
    </nav>
    <div class="header__content">
      <h1 class="main__title">ETHAN CHO PHOTO</h1>
      <h2 class="main__subtitle">PHOTOGRAPHY PORTFOLIO | 사진 포트폴리오</h2>
      <i class="ri-arrow-down-long-line"></i>
    </div>
  </header>
  `;
  }
}
customElements.define("site-nav", SiteNav);
