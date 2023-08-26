import helloWorld from "./scripts/helloWorld";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

class App {
  constructor() {
    this.init();
  }

  init() {
    this.responsiveFluidIframe();
    this.initFancybox();
    helloWorld();

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

  initFancybox() {
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
    });
  }
}

new App();
