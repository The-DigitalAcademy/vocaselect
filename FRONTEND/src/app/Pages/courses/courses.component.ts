// import {  Component, Input, OnInit  } from '@angular/core';
// import { CareerRecommendationService } from '../../_services/_ChatGPT_Services/careerChoice/careerChoice.service';
// import { SharedDataService } from 'src/app/_services/_ChatGPT_Services/api-shared.service';
// import {  ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-courses',
//   templateUrl: './courses.component.html',
//   styleUrls: ['./courses.component.scss']
// })
// export class CoursesComponent implements OnInit {
  // @Input() careerChoice: string = '';
  // @Input() recommendations: any[] = [];

  // constructor(private apiSharedService: SharedDataService) { }

  // ngOnInit(): void {
    // this.careerChoice = this.apiSharedService.careerChoice;
    // this.recommendations = this.apiSharedService.recommendations;
    // console.log(this.careerChoice)
    // console.log(this.recommendations)
  // }

// }



// fetchCourseRecommendations(): void {
//   this.courseService.generateCourses(this.careerChoice)
//     .subscribe(
//       (response) => {
//         console.log("hhhfhfhhfhhfhfhhfhfhf")
//         this.recommendations = response; // Assuming the response is an array of course recommendations
//         console.log(response)
//       },
//       (error) => {
//         console.error('Error occurred:', error);
//       }
//     );
// }