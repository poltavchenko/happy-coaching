import MobileNav from './scripts/helpers/mobileNav';
import './scripts/helpers/responsive-helper';

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

class App {
  constructor() {
    this.init();
  }

  init() {
    this.responsiveFluidIframe();
    this.setHeaderHeight();
    this.initIosScroll();
    this.initMobileNav();
    this.initFancybox();

    if (!('ontouchstart' in document.documentElement)) {
      document.documentElement.classList.add('no-touch');
    }
  }

  // Responsive fluid iframe
  responsiveFluidIframe() {
    document.querySelectorAll('.rte iframe').forEach((iframe) => {
      const fluidHtml = document.createElement('div');

      fluidHtml.classList.add('fluid-iframe');
      iframe.parentNode.appendChild(fluidHtml);
      fluidHtml.appendChild(iframe);
    });
  }

  setHeaderHeight() {
    const events = ['load', 'resize', 'scroll'];

    events.forEach((event) => {
      window.addEventListener(event, () => {
        const headerHeight = `${document.querySelector('#header')?.getBoundingClientRect().height}px`;
        const headerPanelHeight = `${document.querySelector('.header__panel')?.getBoundingClientRect().height}px`;

        document.documentElement.style.setProperty('--header-height', headerHeight);
        document.documentElement.style.setProperty('--header-sticky-height', headerPanelHeight);
      });
    });
  }

  initIosScroll() {
    const html = document.documentElement;
    const { body } = document;
    const docEl = [html, body];
    const wrap = document.querySelector('.page-wrapper');
    const pageWrapperOpeners = document.querySelectorAll('.page-wrapper__opener');
    let scrollTop;

    function _unlockBody() {
      docEl.forEach((el) => {
        el.style.height = '';
        el.style.overflow = '';
        window.setTimeout(() => {
          el.style.scrollBehavior = 'smooth';
        }, 500);
      });
      wrap.style.top = '';
      window.scrollTo(0, scrollTop);
      window.setTimeout(() => {
        scrollTop = null;
      }, 0);
    }

    function _lockBody() {
      if (window.pageYOffset) {
        scrollTop = window.pageYOffset;
        wrap.style.top = `${-scrollTop}px`;
      }

      docEl.forEach((el) => {
        el.style.height = '100%';
        el.style.overflow = 'hidden';
        el.style.scrollBehavior = 'auto';
      });
    }

    function eventHandler() {
      if (document.documentElement.classList.contains('scroll-fix')) {
        _unlockBody();
        html.classList.remove('scroll-fix');
      } else {
        _lockBody();
        html.classList.add('scroll-fix');
      }
    }

    window.ResponsiveHelper.addRange({
      '..1199': {
        on() {
          pageWrapperOpeners.forEach((pageWrapperOpener) => {
            pageWrapperOpener.addEventListener('click', eventHandler);
          });
        },
        off() {
          pageWrapperOpeners.forEach((pageWrapperOpener) => {
            pageWrapperOpener.removeEventListener('click', eventHandler);
          });
        },
      },
    });
  }

  // mobile menu init
  initMobileNav() {
    window.onload = () => {
      new MobileNav('body', {
        menuActiveClass: 'menu-active',
        menuOpener: '.menu__opener',
        menuDrop: '.menu',
        hideOnClickOutside: false,
      });
    };
  }

  initFancybox() {
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });
  }
}

new App();
