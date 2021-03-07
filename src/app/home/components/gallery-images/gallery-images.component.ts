import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { data } from 'src/app/shared/data/data';
import disableScroll from 'disable-scroll';

@Component({
  selector: 'app-gallery-images',
  templateUrl: './gallery-images.component.html',
  styleUrls: ['./gallery-images.component.scss']
})
export class GalleryImagesComponent implements OnInit {

  @Output() onOpenGallery:EventEmitter<any> = new EventEmitter<any>();
  images:any[];

  constructor() { }

  ngOnInit(): void {
    this.images = data;
  }

  

  openGallery(index:number) {
    disableScroll.on();
    this.onOpenGallery.emit({
      status: true,
      index: index
    })
  }

}
