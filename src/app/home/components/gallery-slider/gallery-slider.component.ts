import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { data } from 'src/app/shared/data/data';
import disableScroll from 'disable-scroll';

interface dataGallery {
  status: boolean;
  index: number;
}

@Component({
  selector: 'app-gallery-slider',
  templateUrl: './gallery-slider.component.html',
  styleUrls: ['./gallery-slider.component.scss'],
})
export class GallerySliderComponent implements OnInit {
  @Input('data') data: dataGallery;
  @ViewChild('gallery_c',{static: true}) Gallery:ElementRef<HTMLDivElement>;
  imagesArray: { url: string; }[] = []

  constructor() {}

  ngOnInit(): void {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeGallery();
      }
    });

    document.addEventListener('click', (e) => {
      if(e.target === this.Gallery.nativeElement) {
        this.closeGallery();
      }
    })

    this.imagesArray = data;
  }

  closeGallery() {
    this.data.status = false;
    disableScroll.off();
  }

  previewSlide() {
    if(this.data.index > 0) {
      this.data.index--
    }else {
      this.data.index = data.length - 1
    }
  }

  nextSlide() {
    if(this.data.index < data.length - 1) {
      this.data.index++
    }else {
      this.data.index = 0
    }
  }
}
