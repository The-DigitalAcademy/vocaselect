import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from '../../_services/_ChatGPT_Services/careerChoice.service';

import { Router } from '@angular/router';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';
// ApiSharedService
@Component({
  selector: 'app-fill-career',
  templateUrl: './fill-career.component.html',
  styleUrls: ['./fill-career.component.scss']
})
export class FillCareerComponent implements OnInit {
  careerChoice: string = ''; // User's career choice
  courseRecommendations: CourseRecommendation[] = [];;

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
          
            this.courseRecommendations = response;
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

  //using ngclass to change background color for each card
  cardBackgroundColors: string[] = ["#A1C2F3", "#E6E6FA", "#A1C2F3", "#E6E6FA", "#A1C2F3", "#E6E6FA"];
  // #D8BFD8" - pink

}
