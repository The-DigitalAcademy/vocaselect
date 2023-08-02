import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
user: any = {};
  constructor(private tokenStorage: TokenStorageService,) { }

  ngOnInit(): void {
     this.user = this.tokenStorage.getUser();  
  }

}
