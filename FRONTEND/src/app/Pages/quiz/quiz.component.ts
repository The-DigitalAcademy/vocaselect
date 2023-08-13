import { Component, OnInit } from '@angular/core';
import { CareerQuizService } from '../../_services/_ChatGPT_Services/quiz.service';
import { CareerRecommendation, QuizAnswers } from 'src/app/_Interface/career-recommendation';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  // answers: any = {}; // Initialize with default values as needed
  careerRecommendations: any[] = []; // Use the new interface;

  answers: QuizAnswers = {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
    answer7: '',
    answer8: '',
    answer9: '',
    answer10: ''
  };

  constructor(private careerQuizService: CareerQuizService) {}

  generateRecommendations() {
    this.careerQuizService.generateCareerQuiz(this.answers)
      .subscribe(
        (response: any) => {
          this.careerRecommendations = response.quizRecommendations;
          console.log(response.quizRecommendations)
        },
        (error: any) => {
          console.error('Error occurred:', error);
        }
      );
  }
  ngOnInit(): void {
  }

}
