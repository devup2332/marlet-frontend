import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { products } from 'src/app/shared/data/data';
import disableScroll from 'disable-scroll';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Output() onOpenModal: EventEmitter<any> = new EventEmitter<any>();

  products: any[];

  constructor() {}

  ngOnInit(): void {
    this.products = products;
  }

  openModal(product: any) {
    this.onOpenModal.emit({
      ...product,
      status:true
    });
    disableScroll.on();
  }
}
