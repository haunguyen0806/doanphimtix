import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './home/news/news.component';
import { CarouselComponent } from './home/carousel/carousel.component';

// Import your library
import { SlickCarouselModule } from 'ngx-slick-carousel';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'detail/:id', component: MovieDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    MovieDetailComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    CarouselComponent
  ],
  imports: [
    // Ngoại trừ AppModule, tất cả module khác đều là forChild
    CommonModule,
    RouterModule.forChild(routes),SlickCarouselModule
  ],
})
export class MainModule {}
