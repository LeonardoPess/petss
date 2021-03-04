import ActiveSection from './ActiveSection.js';

export default class ActiveSection {
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

  isOffsetTop(offset) {
    if (offset > ) {

    }
  }

  addLinkEvent() {
    this.links.forEach((link) => {
      // link.addEventListener('click', this.scrollToSection)
      const href = link.currentTarget.getAttribute('href');
      const sectionOffset = this.getScrollTopByHref(href) - 80;
    })
  }

  init() {
    if (this.links.length) {
      this.addLinkEvent();
    }
  }
}
