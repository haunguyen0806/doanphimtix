import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';
import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  curenUserSubject = new BehaviorSubject<any | null>(null);
  currenUser = this.curenUserSubject.asObservable();

  constructor(private api: ApiService) { }

  initCurrentUser(): void {
    const user = localStorage.getItem('user');
    if(user){
      this.curenUserSubject.next(JSON.parse(user));
    }
  }
  dangKy(values: any): Observable<any> {
    const url = 'QuanLyNguoiDung/DangKy'
    return this.api.post(url, {...values,maNhom: 'GP01'});
  }

  dangNhap(values: any): Observable<any> {
    const url = 'QuanLyNguoiDung/DangNhap'
    return this.api.post(url, values).pipe(tap((result) => {
      localStorage.setItem('user',JSON.stringify(result));
      this.curenUserSubject.next(result);
    }));
  }
}
