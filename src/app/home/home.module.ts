import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryImagesComponent } from './components/gallery-images/gallery-images.component';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [HomeComponent, BannerComponent, AboutComponent, GalleryImagesComponent, ProductsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
