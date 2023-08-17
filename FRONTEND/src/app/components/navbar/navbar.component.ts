import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  shouldShowNav: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      console.log(data);
      this.shouldShowNav = data['showNav']; // Use square bracket notation
    });
  }

  // findRoute(route: string) {
  //   return this.router.url.includes(route);
  // }

}
