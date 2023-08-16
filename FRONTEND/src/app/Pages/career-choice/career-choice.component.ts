import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from '../../_services/_ChatGPT_Services/careerChoice.service';

import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-career-choice',
  templateUrl: './career-choice.component.html',
  styleUrls: ['./career-choice.component.scss']
})
export class CareerChoiceComponent implements OnInit {
  courseName: string | null = null; 
  uniName: any;
  courseDetails: any;

  // Store course recommendations
  courseRecommendations: CourseRecommendation[] = [];
  course: any;


  constructor(
    private route: ActivatedRoute, 
    private courseService: CareerRecommendationService
  ) {}


  ngOnInit(): void {
    // Get the course ID from the route parameters
    this.route.params.subscribe(params => {
      this.courseName = params['courseName']; // Assuming 'id' is the parameter name in the route
      // You can use this courseId to fetch and display the detailed course data
    });
  }

  fetchCourseDetails(courseName: string, uniName: string, admissionRequirements: string, courseDescription: string): void {
    if (courseName) {
      this.courseService.getCourseDetailsByName(courseName, uniName, admissionRequirements, courseDescription)
        .subscribe(
          (response) => {
            this.courseDetails = response; // Store course details
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