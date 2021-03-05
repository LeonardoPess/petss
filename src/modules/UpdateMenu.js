import debounce from './debounce.js';

export default class UpdateMenu {
  constructor(links) {
    this.links = document.querySelectorAll(links);
    this.classActive = 'active';

    this.handleScroll = debounce(this.handleScroll.bind(this), 50);
  }

  getScrollTopByHref(id) {
    return document.querySelector(id).offsetTop;
  }

  getElementHeight(id) {
    return document.querySelector(id).offsetHeight;
  }

  scrollToPosition(to) {
    smoothScrollTo(0, to);
  }

  handleScroll() {
    this.links.forEach((link) => {
      const href = link.getAttribute('href');
      const offsetTop = this.getScrollTopByHref(href) - 90;
      if ( window.scrollY >= offsetTop && window.scrollY <= offsetTop + this.getElementHeight(href) ) {
        link.classList.add(this.classActive);
      } else {
        link.classList.remove(this.classActive)
      }
    });
  }

  addLinkEvent() {
    document.addEventListener('scroll', this.handleScroll)
  }

  init() {
    if (this.links.length) {
      this.addLinkEvent();
    }
  }
}
