import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data:any
  product:any

  constructor() { }

  ngOnInit(): void {
  }

  openGallery(dataGallery:any) {
    this.data = dataGallery
  }

  openModal(product:any) {
    this.product = product
  }

}
