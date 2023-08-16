import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { error } from 'console';
import { QuizQuestionsService } from 'src/app/services/quiz-questions.service';


@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss'],

})
export class QuizQuestionsComponent implements OnInit {
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

  constructor(private dataService: QuizQuestionsService, private _formBuilder: FormBuilder){ }

  ngOnInit(): void {
    this.getDataFromServer();
  }

  quizQuestions = [
    {
      questionId: 1,
      questionText:
        '1.What are your favourite topic to learn about?',
      options: [''],
      selectedOption: [''],

    },
    {
      questionId: 2,
      questionText:
        '2.How would you describe your personality?',
      options: ['introverted', 'extroverted'],
      selectedOption: [''],
    },
    

    {
      questionId: 3,
      questionText: '3.What do you enjoy doing in your free time?',
      options: [''],
      selectedOption: [''],
    },

    {
      questionId: 4,
      questionText: '4.What do you enjoy doing on your free time?',
      options: [''],
      selectedOption: [''],
    },
    {
      questionId: 5,
      questionText: '5.Are you interested in remote or prefer on-site',
      options: ['remote','on-site'],
      selectedOption: [''],
    },
    {
      questionId: 6,
      questionText: '6.Most exciting experience?',
      options: [''],
      selectedOption: [''],
    },
    {
      questionId: 7,
      questionText: '7.Have you ever had a job or volunteered previously?',
      options: ['Yes I had a job/volunteered before','No I havent volunteered/worked before'],
      selectedOption: [''],
    },
    {
      questionId: 8,
      questionText: '8.Are you willing to invest extra hours for a job you are passionate about?',
      options: ['yes', 'no'],
      selectedOption: [''],
    },
    {
      questionId: 9,
      questionText: '9.Are you willing to invest extra hours on a dream job?',
      options: ['Yes i am willing to invest extra hours for a dream job','No i am not willing to invest extra hours for a dream job'],
      selectedOption: [''],
    },
    {
      questionId: 10,
      questionText: '10.Is there any other information or aspirations you would like about yourself?',
      options: [''],
      selectedOption: [''],
    },
  ];


  getDataFromServer() {

    this.dataService.getData().subscribe(
    

      {
        next: (data :any)=>{
          this.quiz = data   ;
          console.log(this.quiz , "   quizzes are here")
        },
        
        error:(err:any)=>{

        }
      }
    );
  }

  

 
}
