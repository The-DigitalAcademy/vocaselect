import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';
import { SelectedCourseService } from 'src/app/_services/_ChatGPT_Services/selected-course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  selectedCourseId: any;


  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    // Retrieve the selected course from the Router state
    // this.selectedCourseId = this.route.snapshot.paramMap.('courseName');
  }

  // fetchSelectedCourse() {
  //   this.selectedCourseService.getSelectedCourses(this.courseName)
  //     .subscribe(
  //       (courses) => {
  //         this.selectedCourse = courses;
  //         console.log(this.selectedCourse)
  //       },
  //       (error) => {
  //         console.error('Error:', error);
  //       }
  //     );
  // }
}
