import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from '../../_services/_ChatGPT_Services/careerChoice.service';

import { ActivatedRoute, Router } from '@angular/router';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';

@Component({
  selector: 'app-fill-career',
  templateUrl: './fill-career.component.html',
  styleUrls: ['./fill-career.component.scss']
})

export class FillCareerComponent implements OnInit {
  // User's career choice
  careerChoice: string = ''; 
  
  // Store course recommendations
  courseRecommendations: CourseRecommendation[] = [];

  // Flag to show course recommendations from the API
  showRecommendations: boolean = false;

  // Flag to show a loader while generating recommendations
  showLoader: boolean = false;

  course: any = ''

  constructor (
    private router: Router, 
    private courseService: CareerRecommendationService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    // Generate courses on component initialization
    this.generateCourses();
  }

  generateCourses(): void {
    if (this.careerChoice) {
      this.showLoader = true; // Display the loader and message
      this.courseService.generateCourses(this.careerChoice)
        .subscribe(
          (response) => {
            // Store the generated recommendations
            this.courseRecommendations = response;
            console.log(response)

            // Remove strings, commas, and single quotes from the course names
          this.courseRecommendations.forEach(course => {
            course.courseName = course.courseName.replace(/["',]/g, '');
          });
          
            this.showLoader = false; // Hide the loader and message
            this.showRecommendations = true; // Show the recommendations
          },
          (error) => {
            console.error('Error occurred:', error);
          }
        );
    }
  }

  // Define colors for card background using ngClass
  cardBackgroundColors: string[] = ["#A1C2F3", "#E6E6FA", "#A1C2F3", "#E6E6FA", "#A1C2F3", "#E6E6FA"];
  
  
  // selectedCourse(_course:any){
  //   this.selecteCourse
  // }
}
