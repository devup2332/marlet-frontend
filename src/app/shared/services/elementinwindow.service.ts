import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ElementinwindowService {
  constructor() {}

  onScreen(options:HTMLCollection) {
    const windowScroll = document.documentElement.scrollTop;
    const h1 = document.querySelector('.banner_c_h_c').clientHeight;
    const h2 = document.querySelector('.about_c_h_c').clientHeight;
    const h3 =
      document.querySelector('.container_gallery_first_section').clientHeight +
      document.querySelector('.gallery_images_c_h_c').clientHeight;
    const h4 = document.querySelector('.products_c_h_c').clientHeight;
    const h5 = document.querySelector('.contact_c_h_c').clientHeight;
    const headHeight = document.querySelector('.header').clientHeight;

    if(windowScroll > 0 && windowScroll <= h1) {
      for(let i=0;i<options.length;i++) {
        options[i].classList.remove('active')
      }
      options[0].classList.add('active');
    }

    if(windowScroll > h1 - headHeight && windowScroll <= h1 + h2) {
      for(let i=0;i<options.length;i++) {
        options[i].classList.remove('active')
      }
      options[1].classList.add('active');
    }

    if(windowScroll > h1 + h2 - headHeight && windowScroll <= h1 + h2 + h3) {
      for(let i=0;i<options.length;i++) {
        options[i].classList.remove('active')
      }
      options[2].classList.add('active');
    }

    if(windowScroll > h1 + h2 + h3 - headHeight && windowScroll <= h1 + h2 + h3 + h4) {
      for(let i=0;i<options.length;i++) {
        options[i].classList.remove('active')
      }
      options[3].classList.add('active');
    }

    if(windowScroll > h1 + h2 + h3+ h4 - headHeight && windowScroll <= h1 + h2 + h3 + h4 + h5) {
      for(let i=0;i<options.length;i++) {
        options[i].classList.remove('active')
      }
      options[4].classList.add('active');
    }
  }
}
