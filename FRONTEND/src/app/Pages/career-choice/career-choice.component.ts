import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from '../../services/careerChoice.service';

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

  // private parseCourseData(data: any): Array<{ uniName: string; courseName: string }> {
  //   const courses = [];

  //   for (const item of data) {
  //     try {
  //       const courseInfo = JSON.parse(item);
  //       const uniName = courseInfo["uniName"];
  //       const courseName = courseInfo["courseName"];
        
  //       // Push valid course data into courses array
  //       if (uniName && courseName) {
  //         courses.push({ uniName, courseName });
  //       }
  //     } catch (error) {
  //       console.error("Error parsing JSON:", error);
  //     }
  //   }

  //   return courses;
  // }


}