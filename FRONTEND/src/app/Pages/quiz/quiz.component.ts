import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CareerQuizService } from '../../_services/_ChatGPT_Services/quiz.service';
import { CareerRecommendation  } from 'src/app/_Interface/career-recommendation';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizForm!: FormGroup;
  careerRecommendations: CareerRecommendation[] = [];

  

  constructor(private formBuilder: FormBuilder, private careerQuizService: CareerQuizService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.quizForm = this.formBuilder.group({
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      answer5: '',
      answer6: '',
      answer7: '',
      answer8: '',
      answer9: '',
      answer10: '',
    });
  }

  generateRecommendations() {
    const answers = this.quizForm.value;
    this.careerQuizService.generateCareerQuiz(answers).subscribe(
      (response) => {

        // this.careerRecommendations = response.quizRecommendations;
        console.log(this.careerRecommendations)
      },
      (error) => {
        console.error('Error generating recommendations:', error);
        // Handle error display to the user
      }
    );
  }
}
