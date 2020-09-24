import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  curentUser: any = [];
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.initCurrentUser();
    
    this.auth.currenUser.subscribe({
      next: (result) => {
        this.curentUser = result;
      }
    })
  }

}
