import smoothScrollTo from './smoothScrollTo.js';

export default class SmoothScroll {
  constructor(links) {
    this.links = document.querySelectorAll(links);

    this.scrollToSection = this.scrollToSection.bind(this);
  }

  getScrollTopByHref(id) {
    return document.querySelector(id).offsetTop;
  }

  scrollToPosition(to) {
    smoothScrollTo(0, to);
  }

  scrollToSection(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const to = this.getScrollTopByHref(href) - 80;
    this.scrollToPosition(to);
  }

  addLinkEvent() {
    this.links.forEach((link) => {
      link.addEventListener('click', this.scrollToSection)
    })
  }

  init() {
    this.addLinkEvent();
  }
}
