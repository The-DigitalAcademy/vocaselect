import { Component, OnInit } from '@angular/core';
// import { QuizQuestionsService } from 'src/app/services/quiz-questions.service';
import {  FormlyFieldConfig } from '@ngx-formly/core';

import { FormBuilder,  Validators } from '@angular/forms';
import { CareerRecommendation } from 'src/app/_Interface/career-recommendation';
import { CareerQuizService } from 'src/app/_services/_ChatGPT_Services/quiz.service';
 // Inject the service
// import { MatRadioModule } from '@angular/material/radio';

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
 
}

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.scss']
})
export class Quiz2Component implements OnInit {
  firstFormGroup : any;
  secondFormGroup : any;
  thirdFormGroup : any;
  fouthFormGroup : any;
  fifthFormGroup : any;
  sixthFormGroup : any;
  seventhFormGroup : any;
  eighthFormGroup : any;
  ninethFormGroup : any;
  tenthFormGroup : any;

  quiz: any; // Assuming the data is an array of objects or any other data structure
  option: any;

  // Flag to show a loader while generating recommendations
  showLoader: boolean = false;

  careerRecommendations: CareerRecommendation[] = [];

  constructor(private careerQuizService: CareerQuizService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.getDataFromServer();
    // this.submitQuiz();
    this.firstFormGroup = this._formBuilder.group({
      field1: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      field2: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      field3: ['', Validators.required]
    });
    this.fouthFormGroup = this._formBuilder.group({
      field4: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      field5: ['', Validators.required]
    });
    this.sixthFormGroup = this._formBuilder.group({
      field6: ['', Validators.required]
    });
    this.seventhFormGroup = this._formBuilder.group({
      field7: ['', Validators.required]
    });
    this.eighthFormGroup = this._formBuilder.group({
      field8: ['', Validators.required]
    });
    this.ninethFormGroup = this._formBuilder.group({
      field9: ['', Validators.required]
    });
    this.tenthFormGroup = this._formBuilder.group({
      field10: ['', Validators.required]
    });
  }

  quizQuestions = [
    {
      questionId: 1,
      questionText:
        '1. Are you interested in remote work or prefer on-site positions?',
      options: ['remote' , 'on-site', 'remote', ''],
      selectedOption: [''],
      
    },
    {
      questionId: 2,
      questionText:
        '2. Are you willing to undergo additional training or education to pursue a dream job?',
      options: ['yes', 'no'],
      selectedOption: [''],
    },
    // Add more quiz questions here...

    {
      questionId: 3,
      questionText: '3.How would you describe your personality? (e.g., outgoing, analytical, creative, etc.)',
      options: [''],
      selectedOption: [''],
    },

    {
      questionId: 4,
      questionText: 'What are your favorite subjects or topics to learn about?',
      options: [''],
      selectedOption: [''],
    },
    {
      questionId: 5,
      questionText: '4.What are your long-term career goals?',
      options: [''],
      selectedOption: [''],
    },
    {
      questionId: 6,
      questionText: '7.Have you ever volunteered or had job previous?',
      options: [''],
      selectedOption: [''],
    },
    {
      questionId: 7,
      questionText: '8.What job roles or positions have you always been curious about?',
      options: [''],
      selectedOption: [''],
    },
    {
      questionId: 8,
      questionText: '9.Are you willing to invest extra hours for a job you are passionate about?',
      options: [''],
      selectedOption: [''],
    },
    {
      questionId: 9,
      questionText: '.Is there any other information about yourself or your aspirations that you would like to share?',
      options: [''],
      selectedOption: [''],
    },
    {
      questionId: 10,
      questionText: 'What do you enjoy doing in your free time?',
      options: [''],
      selectedOption: [''],
    },
  ];

  //answers from the user are here now
  answers: any;
  
  submitQuiz() {
    this.answers = this.quizQuestions.map((question) => ({
      questionId: question.questionId,
       selectedOption: question.selectedOption, // Assuming selectedOption is an array, get the first element or use an empty string
    }));
    // Use the careerQuizService to send the answers to the API
    this.careerQuizService.generateCareerQuiz(this.answers)
      .subscribe(
        (response) => {
          
          // Handle the API response if needed
          console.log('API Response:', response);
        },
        (error) => {
          // Handle errors if needed
          console.error('API Error:', error);
        }
      );
  }

  selected1(question: any, option: any) {
    question.selectedOption = option;
  }
}



// generateCourses(): void {
//   if (this.careerChoice) {
//     this.showLoader = true; // Display the loader and message
//     this.courseService.generateCourses(this.careerChoice)
//       .subscribe(
//         (response) => {
//           // Store the generated recommendations
//           this.courseRecommendations = response;
//           console.log(response)
//           this.showLoader = false; // Hide the loader and message
//           this.showRecommendations = true; // Show the recommendations
//         },
//         (error) => {
//           console.error('Error occurred:', error);
//         }
//       );
//   }
// }
