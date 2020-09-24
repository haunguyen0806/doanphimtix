import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Movie } from '../models/movies'
import { ApiService } from './api.service'
import { tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movieListSuject = new BehaviorSubject([]);
  movieList = this.movieListSuject.asObservable();

  constructor(private api: ApiService) { }

  layDanhSachPhim(): Observable<Movie[]> {
    const url = 'QuanLyPhim/LayDanhSachPhim?maNhom=GP03';

    return this.api.get<Movie[]>(url).pipe(tap(result => {
      this.movieListSuject.next(result);
    }));
  }

  layDanhSachPhimPhanTrang(soTrang= 1, soPhanTuTrenTrang= 5): Observable<any> {
    return this.api.get(`QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTuTrenTrang}`)
  }

  layChiTietPhim(maPhim: string): Observable<any> {
    const url = `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;

    return this.api.get(url);
  }

  themPhim(values: any): Observable<any>{
    const url = 'QuanLyPhim/ThemPhimUpLoadHinh';
    const obj = {
      ...values,
      manhom: 'GP01',
    };
    //Bởi vì obj có 1 key là File nên phải sử dụng đối tượng ForrmData
    const formData = new FormData();
    for(let key in obj){
      formData.append(key,obj[key]);
    }
    return this.api.post(url,formData);
    // return this.api.post(url,{...values, maNhom: 'GP01'});
  }
}
