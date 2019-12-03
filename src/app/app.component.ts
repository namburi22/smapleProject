import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/commonServices/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  userDetails:any;
  constructor(private authService:AuthService){}
  ngOnInit() {
    // get the user details
    
    this.authService.getUserDetails().subscribe(data=>{
      this.userDetails = data })
  }
}
