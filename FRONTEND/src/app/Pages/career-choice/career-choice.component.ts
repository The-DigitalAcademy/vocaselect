import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from 'src/app/services/careerChoice.service';

@Component({
  selector: 'app-career-choice',
  templateUrl: './career-choice.component.html',
  styleUrls: ['./career-choice.component.scss']
})
export class CareerChoiceComponent implements OnInit {
  careerChoice: string = '';
  recommendations: string[] = [];

  isLoading: boolean = false; 

  constructor(private careerRecommendationService: CareerRecommendationService) {}

  

  ngOnInit(): void {
  }

  generateRecommendations(): void {
    if (!this.careerChoice) {
      return;
    }

    this.isLoading = true; // Set isLoading to true before making the API call

    this.careerRecommendationService
      .getCareerRecommendations(this.careerChoice)
      .subscribe(
        (response) => {
          this.recommendations = response.recommendations;
          this.isLoading = false; // Set isLoading to false when the API call is successful
        },
        (error) => {
          console.error('Error occurred:', error);
          this.isLoading = false; // Set isLoading to false in case of an error
        }
      );
  }

}
