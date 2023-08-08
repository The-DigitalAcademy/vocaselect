import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  

  
  
  // @ViewChild('nav', { static: true }) navContainer!: ElementRef<HTMLElement>;

  // ngAfterViewInit() {

  // const toggle = this.navContainer.nativeElement.querySelector('.nav-toggle');

  //   if (toggle) {
  //     toggle.addEventListener('click', () => {
  //       if (this.navContainer.nativeElement.classList.contains('is-active')) {
  //         this.navContainer.nativeElement.classList.remove('is-active');
  //       } else {
  //         this.navContainer.nativeElement.classList.add('is-active');
  //       }
  //     });

  //     this.navContainer.nativeElement.addEventListener('blur', () => {
  //       this.navContainer.nativeElement.classList.remove('is-active');
  //     });
  //   }
  // }

}
