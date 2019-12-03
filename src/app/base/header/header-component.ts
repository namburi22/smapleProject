import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/commonServices/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.css']
})
export class HeaderComponent implements OnInit{
  items:any;userName:string;
  constructor(private authService:AuthService) {}
  ngOnInit() {
    this.items=[   {
      label: 'Home',
      icon: 'pi pi-fw pi-pencil',
      items: [
          {label: 'Home', icon: 'pi pi-fw pi-refresh'}
      ]
  },]
  this.authService.userDetails.subscribe(res=> this.userName = res)
  }
}
