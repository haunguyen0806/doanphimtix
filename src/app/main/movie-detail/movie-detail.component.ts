import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { MoviesService } from '../../core/services/movies.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  chiTietPhim: any;
  loading: boolean = false;
  error: boolean = false;

  constructor(
      private activatedRoute: ActivatedRoute,
      private moviesServie: MoviesService
      ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        console.log(params);
        this.loading =true;
        this.moviesServie.layChiTietPhim(params.id).subscribe({
          next: (result) => {
            this.chiTietPhim = result;
            this.loading = false;
          },
          error: (err) => {
            console.log(err);
            this.error = true;
            this.loading = false;
          }
        })
      }
    })
  }

}
