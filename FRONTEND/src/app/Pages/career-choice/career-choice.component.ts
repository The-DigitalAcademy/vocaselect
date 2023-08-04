import { Component, OnInit } from '@angular/core';
import { CareerRecommendationService } from '../../services/careerChoice.service';

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

  // getCareerRecommendations(careerChoice: string): Observable<any> {
    // getCareerRecommendations

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
          console.log("bog guns" + this.recommendations)
        },
        (error) => {
          console.error('Error occurred:', error);
          this.isLoading = false; // Set isLoading to false in case of an error
        }
      );
  }

}