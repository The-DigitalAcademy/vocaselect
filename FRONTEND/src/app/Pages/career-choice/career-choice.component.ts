import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from '../../_services/_ChatGPT_Services/careerChoice.service';

@Component({
  selector: 'app-career-choice',
  templateUrl: './career-choice.component.html',
  styleUrls: ['./career-choice.component.scss']
})
export class CareerChoiceComponent implements OnInit {
  careerChoice: string = ''; // User's career choice
  recommendations: any[] = [];

  constructor(private courseService: CareerRecommendationService) {}


  ngOnInit(): void {
    this.generateCourses();
  }

  generateCourses(): void {
    if (this.careerChoice) {
      this.courseService.generateCourses(this.careerChoice)
        .subscribe((response) => {
          this.recommendations = response;
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