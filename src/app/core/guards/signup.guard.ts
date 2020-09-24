import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from '../../auth/signup/signup.component';


@Injectable({
  providedIn: 'root'
})
export class SignupGuard implements CanDeactivate<SignupComponent> {
  canDeactivate(
    component: SignupComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isDirty = component.signupForm.dirty

    //Néu isDirty === true => form đã thay đổi
    //Show confirm dialog thông báo cho người dùng
    if(isDirty) {
      return window.confirm('Bạn có chắc muốn rời khỏi trang này')
    }
    //Nếu isDirty === false => form chưa thay đổi => cho phép rời đi
    return true;
  }
  
}
