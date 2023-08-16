import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from '../../_services/_ChatGPT_Services/careerChoice.service';

import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';

@Component({
  selector: 'app-career-choice',
  templateUrl: './career-choice.component.html',
  styleUrls: ['./career-choice.component.scss']
})
export class CareerChoiceComponent implements OnInit {
  careerChoice: string = ''; // User's career choice
  
  // Store course recommendations
  courseRecommendations: CourseRecommendation[] = [];

  constructor(private courseService: CareerRecommendationService) {}


  ngOnInit(): void {
    this.generateCourses();
  }

  generateCourses(): void {
    if (this.careerChoice) {
      this.courseService.generateCourses(this.careerChoice)
        .subscribe(
          (response) => {
            
            // Store the generated recommendations
            this.courseRecommendations = response;
            console.log(response)
          },
          (error) => {
            console.error('Error occurred:', error);
          }
        );
    }
  }

  //using ngclass to change background color for each card
  // cardBackgroundColors: string[] = ["#cde4f1", "#B9D9EB", "#B9D9EB", "#cde4f1"]; // Add more colors as desired
  // #D8BFD8" - pink
}