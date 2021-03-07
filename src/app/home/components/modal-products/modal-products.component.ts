import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import disableScroll from 'disable-scroll';

@Component({
  selector: 'app-modal-products',
  templateUrl: './modal-products.component.html',
  styleUrls: ['./modal-products.component.scss'],
})
export class ModalProductsComponent implements OnInit {
  @Input() product: any;
  @ViewChild('modal_container', { static: true })
  ModalContainer: ElementRef<HTMLDivElement>;

  constructor() {}

  ngOnInit(): void {
    this.ModalContainer.nativeElement.addEventListener('click', (e) => {
      if (e.target === this.ModalContainer.nativeElement && this.product) {
        this.closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.product) {
        this.closeModal();
      }
    });
  }

  closeModal(): void {
    this.product.status = false;
    disableScroll.off();
  }
}
