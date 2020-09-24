import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../core/services/movies.service'
import { Movie } from '../../core/models/movies';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  danhSachPhim: Movie[];
  loading: boolean = false;
  error: boolean = false;
  constructor(private movieService: MoviesService) { }

  // Tương đương componentDidMount bên React
  ngOnInit(): void {
    this.loading = true;
    
    this.movieService.layDanhSachPhim().subscribe({
      next: (result) => {
        this.danhSachPhim = result;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.error = true;
        this.loading = false;
      }
    });
    this.movieService.movieList.subscribe({
      next: (result) => {
        this.danhSachPhim = result;
      }
    })
  }
}
