import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizQuestionsService } from 'src/app/_services/quiz-questions.service';
import { CareerQuizService } from 'src/app/_services/_ChatGPT_Services/quiz/quiz.service';
import { Router } from '@angular/router';
import { CareerRecommendation } from 'src/app/_Interface/career-recommendation';
// import { SharedDataService } from 'src/app/_services/_ChatGPT_Services/api-shared.service';


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
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({

  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
  });
  seventhFormGroup = this._formBuilder.group({
  });
  eighthFormGroup = this._formBuilder.group({
    eighthCtrl: ['', Validators.required],
  });

  isLinear = true;
  hidden = false

  quiz: any; // Assuming the data is an array of objects or any other data structure
  option: any;

   // Flag to show course recommendations from the API
  showRecommendations: boolean = false;

  // Flag to show a loader while generating recommendations
  showLoader: boolean = false;

  careers: CareerRecommendation[] = [];

  constructor
  (
    private dataService: QuizQuestionsService, 
    private _formBuilder: FormBuilder,
    private careerQuizService: CareerQuizService,
    private router: Router // Inject the Router service
  ) { }
  
  ngOnInit(): void {
    this.getDataFromServer();
  }

  quizQuestions = [
    {
      questionId: 1,
      questionText:
        "What are your favourite topics or subjects to learn about?",
      options: [''],
      selectedOption: [''],

    },
    {
      questionId: 2,
      questionText:
        'How would you describe your personality?',
        options: ['outgoing', 'analytical', 'creative', 'introverted', 'extroverted'],
      selectedOption: [''],
    },


    {
      questionId: 3,
      questionText: 'What do you enjoy doing in your free time?',
      options: [''],
      selectedOption: [''],
    },

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
    
    {
      questionId: 8,
      questionText: 'Is there any other information or aspirations you would like about you?',
      options: [''],
      selectedOption: [''],
    },
  ];

  //amswers from user are from here

  answers: any;

  generateCareerQuiz() {
    // Get the selected options and store them in an array of answers
    this.answers = this.quizQuestions.map((question) => ({
      questionId: question.questionId,

      selectedOption: [question.selectedOption],


    }));
    this.showLoader = true; // Display the loader and message

    // Use the careerQuizService to send the answers to the API
      this.careerQuizService.generateCareerQuiz(this.answers)
        .subscribe(
          (response: CareerRecommendation[]) => {
           
            // Handle the API response if needed
            console.log('API Response:', response);
            this.careers = response;


            this.showLoader = false; // Hide the loader and message
            this.showRecommendations = true; // Show the recommendations


            // Navigate to the "Careers" component and pass the data
            // this.router.navigate(['/careers'], { state: { careers: this.careers } });
          },
          (error) => {
            // Handle errors if needed
            console.error('API Error:', error);
          }
        );

    // POSTING QUIZ QUESTIONS TO DATABASE
    // this.dataService.postQuizToPostgres(this.answers).subscribe(
    //   {
    //     next: (data: any) => {
    //       this.quiz = data;
    //       console.log(this.quiz, "   quizzes are here")
    //     },
    //     error: (err: any) => {
    //       console.log(err, "its not posting")
    //     }
    //   }
    // );

    // Do whatever you want with the answers, e.g., send them to a backend server
    // console.log(this.answers, "     mpelemane");

  }



  selected1(question: any, option: any) {
    question.selectedOption = option;
  }


  getDataFromServer() {

    this.dataService.getData().subscribe(
      {
        next: (data: any) => {
          this.quiz = data;
          console.log(this.quiz, "   quizzes are here")
        },

        error: (err: any) => {

        }
      }
    );
  }

  // Define colors for card background using ngClass
  cardBackgroundColors: string[] = ["#A1C2F3", "#A1C2F3", "#A1C2F3", "#A1C2F3", "#A1C2F3", "#E6E6FA"];
}
