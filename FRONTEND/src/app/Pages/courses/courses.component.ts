import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from '../../_services/_ChatGPT_Services/careerChoice.service';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  careerChoice: string = ''; // User's career choice
  recommendations: any[] = [];

  constructor(private route: ActivatedRoute, private courseService: CareerRecommendationService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.careerChoice = params['careerChoice'];
      this.fetchCourseRecommendations();
    });
  }

  fetchCourseRecommendations(): void {
    this.courseService.generateCourses(this.careerChoice)
      .subscribe(
        (response) => {
          console.log("hhhfhfhhfhhfhfhhfhfhf")
          this.recommendations = response; // Assuming the response is an array of course recommendations
          console.log(response)
        },
        (error) => {
          console.error('Error occurred:', error);
        }
      );
  }

  

}
