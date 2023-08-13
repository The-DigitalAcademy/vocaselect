import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from '../../_services/_ChatGPT_Services/careerChoice.service';

import { Router } from '@angular/router';
// ApiSharedService
@Component({
  selector: 'app-fill-career',
  templateUrl: './fill-career.component.html',
  styleUrls: ['./fill-career.component.scss']
})
export class FillCareerComponent implements OnInit {
  careerChoice: string = ''; // User's career choice
  recommendations: any[] = [];

  //show course recommendations from api
  showRecommendations: boolean = false;

  //loader
  showLoader: boolean = false;

  constructor(
    private router: Router, 
    private courseService: CareerRecommendationService,
    ) { }

  ngOnInit(): void {
    
    this.generateCourses();
    console.log("ffffffff")

  }

  generateCourses(): void {
    if (this.careerChoice) {
      this.showLoader = true; // Display the loader and message
      this.courseService.generateCourses(this.careerChoice)
        .subscribe(
          (response) => {
          
          
            this.recommendations = response;
            console.log(response)
            this.showLoader = false; // Hide the loader and message
            this.showRecommendations = true; // Show the recommendations
          },
          (error) => {
            console.error('Error occurred:', error);
          }
        );
    }
  }

 

}
