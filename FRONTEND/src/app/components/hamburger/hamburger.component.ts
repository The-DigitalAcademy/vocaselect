import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {
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
