import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../core/services/movies.service'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  danhSachPhim: any[];
  totalPages: number = 0;
  currentPage: number = 1;
  pageCount: number = 5;
  constructor(private moviesService: MoviesService,
              private activatedRoute: ActivatedRoute
             ) { }

  ngOnInit(): void {
    // this.moviesService.layDanhSachPhimPhanTrang(this.currentPage,this.pageCount).subscribe({
    //   next: (result) => {
    //     this.danhSachPhim = result. items;
    //     this.totalPages = result.totalPages;
    //     console.log(this.danhSachPhim);
    //   }
    // })
    this.activatedRoute.queryParams.subscribe({
      next: (params) => {
        this.currentPage = parseInt(params.page) || 1;
        this.moviesService
          .layDanhSachPhimPhanTrang(params.page, this.pageCount)
          .subscribe({
            next: (result) => {
              this.danhSachPhim = result.items;
              this.totalPages = result.totalPages;
            }
          })
      }
    })
  }

  // changePage(page) {
  //   this.currentPage = page;
  //   console.log(page);
    
  //   this.moviesService
  //     .layDanhSachPhimPhanTrang(this.currentPage, this.pageCount)
  //     .subscribe({
  //       next: (result) => {
  //         this.danhSachPhim = result.items;
  //         this.totalPages = result.totalPages;
  //       }
  //     })
  // }

  handleAddMovie(){
    this.moviesService
      .layDanhSachPhimPhanTrang(this.currentPage, this.pageCount)
      .subscribe({
        next: (result) => {
          this.danhSachPhim = result.items;
          this.totalPages = result.totalPages;
        }
      })
  }
}
