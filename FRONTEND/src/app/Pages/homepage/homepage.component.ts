import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HamburgerComponent } from 'src/app/components/hamburger/hamburger.component';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
user: any = {};
  constructor(public router: Router,private tokenStorage: TokenStorageService,) { }

  ngOnInit(): void {
     this.user = this.tokenStorage.getUser();  
  }

  logout(){
    console.log("tetsts")
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }

}
