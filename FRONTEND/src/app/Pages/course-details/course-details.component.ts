import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';
import { SelectedCourseService } from 'src/app/_services/_ChatGPT_Services/selected-course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  courseRecommendations: CourseRecommendation[] = [];
  showRecommendations: boolean = false;
  showLoader: boolean = false;

  constructor(
    private selectedCourseService: SelectedCourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    const courseName = this.route.snapshot.queryParamMap.get('courseName');
    if (courseName) {
      this.showLoader = true; // Display the loader and message
      this.selectedCourseService.getSelectedCourses(courseName)
        .subscribe(
          (courses) => {
            // this.courseRecommendations = courses;

            // Remove strings, commas, and single quotes from the course names
            // Modify courseRecommendations before displaying
            this.courseRecommendations = courses.map(course => {
              // Remove unwanted characters from courseName
              course.courseName = course.courseName.replace(/["',]/g, '');
              return course;
            });

            this.showLoader = false; // Hide the loader and message
            this.showRecommendations = true; // Show the recommendations
          },
          (error) => {
            console.error('Error:', error);
          }
        );
    }
  }

  // Define colors for card background using ngClass
  cardBackgroundColors: string[] = ["#A1C2F3", "#E6E6FA", "#A1C2F3", "#E6E6FA", "#A1C2F3", "#E6E6FA"];
  
}
