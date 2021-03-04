export default class MenuMobile {
  constructor(menuBtn, menuContainer, activeState) {
    this.menuBtn = document.querySelector(menuBtn);
    this.menuContainer = document.querySelector(menuContainer);
    this.activeState = activeState;

    this._expanded = this.expanded;

    this.links = [...this.menuContainer.querySelectorAll('a[href^="#"]')];
    this.toggle = this.toggle.bind(this);
  }

  get expanded() {
    return JSON.parse(this.menuContainer.getAttribute('aria-expanded'));
  }

  open() {
    this.menuBtn.setAttribute('aria-expanded', true);
    this.menuContainer.setAttribute('aria-expanded', true);
    this.menuBtn.classList.add('open');
    this.menuContainer.classList.add(this.activeState);
  }

  close() {
      this.menuBtn.setAttribute('aria-expanded', false);
      this.menuContainer.setAttribute('aria-expanded', false);
      this.menuBtn.classList.remove('open');
      this.menuContainer.classList.remove(this.activeState);
  }

  toggle() {
    this.expanded ? this.close() : this.open();
  }

  handleEvents() {
    this.links.forEach((link) => link.addEventListener('click', this.toggle));
    this.menuBtn.addEventListener('click', this.toggle);
  }

  init() {
    this.handleEvents();
  }
}