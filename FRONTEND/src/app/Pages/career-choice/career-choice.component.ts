import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from '../../services/careerChoice.service';

@Component({
  selector: 'app-career-choice',
  templateUrl: './career-choice.component.html',
  styleUrls: ['./career-choice.component.scss']
})
export class CareerChoiceComponent implements OnInit {
  enterCareer: string = ''; // User's career choice
  courses: Array<{ uniName: string; courseName: string }> = [];



  constructor(private courseService: CareerRecommendationService) {}


  ngOnInit(): void {
  }

  generateCourses(): void {
    if (this.enterCareer) {
      this.courseService.generateCourses(this.enterCareer)
        .subscribe((data: any) => {
          // Clean up the data and parse it into JSON objects
          this.courses = this.parseCourseData(data);
        });
    }
  }

  private parseCourseData(data: any): Array<{ uniName: string; courseName: string }> {
    const courses = [];

    for (const item of data) {
      try {
        const courseInfo = JSON.parse(item);
        const uniName = courseInfo["uniName"];
        const courseName = courseInfo["courseName"];
        
        // Push valid course data into courses array
        if (uniName && courseName) {
          courses.push({ uniName, courseName });
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }

    return courses;
  }


}