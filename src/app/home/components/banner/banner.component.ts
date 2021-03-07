import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ElementinwindowService } from '../../../shared/services/elementinwindow.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @ViewChild('banner_c_h_c', { static: true })
  bannerHTML: ElementRef<HTMLDivElement>;
  @ViewChild('nav', { static: true }) navHTML: ElementRef<HTMLDivElement>;

  constructor(private ElementinwindowService: ElementinwindowService) {}

  ngOnInit(): void {
    this.setLinksHeaderStyles();
    this.activeHeader();
  }

  setLinksHeaderStyles(): void {
    const options = this.navHTML.nativeElement.children[0].children;

    this.ElementinwindowService.onScreen(options);
    document.addEventListener('scroll', () => {
      this.ElementinwindowService.onScreen(options);
    });
  }

  activeHeader(): void {
    const header = this.bannerHTML.nativeElement.children[0];

    document.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 100) {
        header.classList.add('active');
        header.children[0].children[0].children[0].setAttribute(
          'src',
          'assets/icons/logo-light.svg'
        );
      } else {
        header.classList.remove('active');
        header.children[0].children[0].children[0].setAttribute(
          'src',
          'assets/icons/logo-dark.svg'
        );
      }
    });
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

  scrollTo(section: string) {
    const block = document.querySelector(section);
    block.scrollIntoView();
  }
}
