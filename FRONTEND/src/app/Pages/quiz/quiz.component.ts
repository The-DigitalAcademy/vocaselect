import { Component, OnInit } from '@angular/core';
import { CareerQuizService } from '../../_services/_ChatGPT_Services/quiz.service';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  answers: any = {};
  careers: string[] = [];
  showRecommendations = false;
  
  loading = false;


  constructor(private careerQuizService: CareerQuizService) {}


  ngOnInit(): void {
  }

}
