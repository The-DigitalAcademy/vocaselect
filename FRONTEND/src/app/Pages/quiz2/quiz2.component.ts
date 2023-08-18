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
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    // secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    // fourthCtrl: ['', Validators.required],

  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    // sixthCtrl: ['', Validators.required],
  });
  seventhFormGroup = this._formBuilder.group({
    // seventhCtrl: ['', Validators.required],
  });
  eighthFormGroup = this._formBuilder.group({
    eighthCtrl: ['', Validators.required],
  });

  isLinear = true;
  hidden = false

  quiz: any; // Assuming the data is an array of objects or any other data structure
  option: any;

  constructor(private careerQuizService: CareerQuizService, private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.getDataFromServer();
    
  }

  quizQuestions = [
    {
      questionId: 1,
      questionText:
        'What are your favourite topic to learn about?',
      options: [''],
      selectedOption: [''],

    },
    {
      questionId: 2,
      questionText:
        'How would you describe your personality?',
      options: ['introverted', 'extroverted'],
      selectedOption: [''],
    },


    {
      questionId: 3,
      questionText: 'What do you enjoy doing in your free time?',
      options: [''],
      selectedOption: [''],
    },

    // {
    //   questionId: 4,
    //   questionText: '4.What do you enjoy doing on your free time?',
    //   options: [''],
    //   selectedOption: [''],
    // },
    {
      questionId: 4,
      questionText: 'Are you interested in remote or prefer on-site',
      options: ['remote', 'on-site'],
      selectedOption: [''],
    },
    {
      questionId: 5,
      questionText: 'What is your most exciting experience?',
      options: [''],
      selectedOption: [''],
    },
    {
      questionId: 6,
      questionText: 'Have you ever had a job or volunteered previously?',
      options: ['Yes I had a job/volunteered before', 'No I havent volunteered/worked before'],
      selectedOption: [''],
    },
    {
      questionId: 7,
      questionText: 'Are you willing to invest extra hours for a job you are passionate about?',
      options: ['yes', 'no'],
      selectedOption: [''],
    },
    // {
    //   questionId: 9,
    //   questionText: '9.Are you willing to invest extra hours on a dream job?',
    //   options: ['Yes i am willing to invest extra hours for a dream job', 'No i am not willing to invest extra hours for a dream job'],
    //   selectedOption: [''],
    // },
    {
      questionId: 8,
      questionText: 'Is there any other information or aspirations you would like about you?',
      options: [''],
      selectedOption: [''],
    },
  ];

  //amswers from user are from here

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




