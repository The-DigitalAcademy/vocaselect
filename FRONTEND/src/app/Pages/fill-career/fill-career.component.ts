import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from '../../_services/_ChatGPT_Services/careerChoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fill-career',
  templateUrl: './fill-career.component.html',
  styleUrls: ['./fill-career.component.scss']
})
export class FillCareerComponent implements OnInit {
  careerChoice: string = ''; // User's career choice
  recommendations: any[] = [];

  constructor(private router: Router, private courseService: CareerRecommendationService) { }

  ngOnInit(): void {
    
    this.generateCourses();
    console.log("ffffffff")

  }

  generateCourses(): void {
    if (this.careerChoice) {
      this.courseService.generateCourses(this.careerChoice)
        .subscribe((response) => {
          this.recommendations = response;

           // Navigate to CoursesComponent with careerChoice parameter
           this.router.navigate(['/courses', this.careerChoice]);
        },
        (error) => {
          console.error('Error occurred:', error);
        } 
        );
    }
  }

}
