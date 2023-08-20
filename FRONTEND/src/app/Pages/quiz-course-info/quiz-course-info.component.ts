import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CareerRecommendation } from 'src/app/_Interface/career-recommendation';
import { CourseRecommendation } from 'src/app/_Interface/course-recommendation';
import { QuizSelectedCourseService } from 'src/app/_services/_ChatGPT_Services/quiz/quiz-selected-course.service';

@Component({
  selector: 'app-quiz-course-info',
  templateUrl: './quiz-course-info.component.html',
  styleUrls: ['./quiz-course-info.component.scss']
})
export class QuizCourseInfoComponent implements OnInit {

  CourseRecommendations: CourseRecommendation[] = [];
  showRecommendations: boolean = false;
  showLoader: boolean = false;

  constructor(
    private selectedCourseService: QuizSelectedCourseService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    const careerName = this.route.snapshot.queryParamMap.get('careerName');
    if (careerName) {
      this.showLoader = true; // Display the loader and message
      this.selectedCourseService.Get_career_Choice_Selected_Course(careerName)
        .subscribe(
          (career) => {
            this.CourseRecommendations = career;

            // Remove strings, commas, and single quotes from the course names
            // Modify courseRecommendations before displaying
            this.CourseRecommendations = career.map(careerChoice => {
              // Remove unwanted characters from courseName
              careerChoice.courseName = careerChoice.courseName.replace(/["',]/g, '');
              return careerChoice;
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
// quizCourseInfo?careerChoice=High School Teacher
//getting the data from AI
  // getSelectedCourses(courseName: string): Observable<CourseRecommendation[]> {
  //   return this.http.get<CourseRecommendation[]>(`${this.baseUrl}/courseInfo?course=${courseName}`);
  // }

  // Get_career_Choice_Selected_Course(careerName: string): Observable<CourseRecommendation[]> {
  //   return this.http.get<CourseRecommendation[]>(`${this.baseUrl}/quizCourseInfo?careerChoice=${careerName}`);
  // }
// ngOnInit(): void {
//   const courseName = this.route.snapshot.queryParamMap.get('courseName');
//   if (courseName) {
//     this.showLoader = true; // Display the loader and message
//     this.selectedCourseService.getSelectedCourses(courseName)
//       .subscribe(
//         (courses) => {
//           this.courseRecommendations = courses;

//           // Remove strings, commas, and single quotes from the course names
//           // Modify courseRecommendations before displaying
//           this.courseRecommendations = courses.map(course => {
//             // Remove unwanted characters from courseName
//             course.courseName = course.courseName.replace(/["',]/g, '');
//             return course;
//           });

//           this.showLoader = false; // Hide the loader and message
//           this.showRecommendations = true; // Show the recommendations
//         },
//         (error) => {
//           console.error('Error:', error);
//         }
//       );
//   }