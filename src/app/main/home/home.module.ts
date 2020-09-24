import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NewsComponent } from './news/news.component';
import { CarouselComponent } from './carousel/carousel.component';




@NgModule({
  declarations: [
    NewsComponent,
    CarouselComponent],
  imports: [
    CommonModule,
  ],exports:[
    HomeComponent
  ]
})
export class HomeModule { }
