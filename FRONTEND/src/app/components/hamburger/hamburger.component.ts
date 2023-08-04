import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // showFiller = false;

  // @ViewChild(MatSidenav)
  // sidenav!: MatSidenav;

  // constructor(private observer: BreakpointObserver) {}

  // ngAfterViewInit() {
  //   this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
  //     if (res.matches) {
  //       this.sidenav.mode = "over";
  //       this.sidenav.close();
  //     } else {
  //       this.sidenav.mode = "side";
  //       this.sidenav.open();
  //     }
  //   });
  // }

}
