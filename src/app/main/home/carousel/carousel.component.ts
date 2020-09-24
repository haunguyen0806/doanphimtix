import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  slides = [
    {imgPath: "https://s3img.vcdn.vn/123phim/2020/09/rom-c18-16008300686919.png"},
    {imgPath: "https://s3img.vcdn.vn/123phim/2020/09/ac-quy-doi-dau-deliver-us-from-evil-c16-15994546580686.jpg"},
    {imgPath: "https://s3img.vcdn.vn/123phim/2020/09/greenland-tham-hoa-thien-thach-16000538668854.png"}
  ];
  
  slideConfig={"slidesToShow": 1,"slidesToScroll": 1}

  constructor() { }

  ngOnInit(): void {
  }

}
