import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryImagesComponent } from './components/gallery-images/gallery-images.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GallerySliderComponent } from './components/gallery-slider/gallery-slider.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, AboutComponent, GalleryImagesComponent, ProductsComponent, ContactComponent, GallerySliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
