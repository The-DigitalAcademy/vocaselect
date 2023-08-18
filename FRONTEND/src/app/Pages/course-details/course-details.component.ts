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
  showRecommendations = true;

  constructor(
    private selectedCourseService: SelectedCourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    const courseName = this.route.snapshot.queryParamMap.get('courseName');
    if (courseName) {
      this.selectedCourseService.getSelectedCourses(courseName)
        .subscribe(
          (courses) => {
            this.courseRecommendations = courses;
          },
          (error) => {
            console.error('Error:', error);
          }
        );
    }
  }

}
