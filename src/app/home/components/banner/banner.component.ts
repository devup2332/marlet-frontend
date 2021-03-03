import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @ViewChild('banner_c_h_c', { static: true }) bannerHTML: ElementRef<HTMLDivElement>;
  @ViewChild('nav', { static: true }) navHTML: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {
    this.setLinksHeaderStyles();
    this.activeHeader();
  }

  setLinksHeaderStyles () :void {
    const bannerHeight = this.bannerHTML.nativeElement.clientHeight;
    const aboutHeight = document.querySelector('.about_c_h_c').clientHeight;

    if (
      document.documentElement.scrollTop >= 0 &&
      document.documentElement.scrollTop < bannerHeight
    ) {
      this.navHTML.nativeElement.children[0].children[0].classList.add(
        'active'
      );
    }

    document.addEventListener('scroll', () => {
      if (
        document.documentElement.scrollTop >= 0 &&
        document.documentElement.scrollTop < bannerHeight - 200
      ) {
        for (let i = 0; i < 4; i++) {
          this.navHTML.nativeElement.children[0].children[i].classList.remove(
            'active'
          );
        }
        this.navHTML.nativeElement.children[0].children[0].classList.add(
          'active'
        );
      } else if (
        document.documentElement.scrollTop >= bannerHeight - 200 &&
        document.documentElement.scrollTop < aboutHeight + bannerHeight
      ) {
        for (let i = 0; i < 4; i++) {
          this.navHTML.nativeElement.children[0].children[i].classList.remove(
            'active'
          );
        }
        this.navHTML.nativeElement.children[0].children[1].classList.add(
          'active'
        );
      }
    });
  }

  activeHeader ():void {
    const header = this.bannerHTML.nativeElement.children[0];

    document.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop > 100) {
        header.classList.add('active');
        header.children[0].children[0].children[0].setAttribute('src','assets/icons/logo-light.svg')
      }else {
        header.classList.remove('active')
        header.children[0].children[0].children[0].setAttribute('src','assets/icons/logo-dark.svg')
      }
    })
  }

  openNav(nav: HTMLDivElement, btn: HTMLButtonElement) {
    nav.classList.toggle('visible');

    document.addEventListener('click', (e) => {
      if (
        e.target !== btn &&
        e.target !== btn.children[0] &&
        e.target !== btn.children[0].children[0] &&
        e.target !== btn.children[0].children[1] &&
        e.target !== btn.children[0].children[2] &&
        e.target !== nav
      ) {
        nav.classList.remove('visible');
      }
    });
  }
}
