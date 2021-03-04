import SmoothScroll from './modules/SmoothScroll.js';
import Slide from './modules/Slide.js';
import Funcionamento from './modules/Funcionamento.js';
import MenuMobile from './modules/MenuMobile.js'

const smoothScroll = new SmoothScroll('a[href^="#"]');
smoothScroll.init();

const slideHome = new Slide('.slide', true);
slideHome.init();

const slideReviews = new Slide('.slideReviews', false);
slideReviews.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]', 'active');
menuMobile.init();
