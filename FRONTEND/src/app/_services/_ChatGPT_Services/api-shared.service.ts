import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  careerChoice: string = '';
  recommendations: any[] = [];

  constructor() {}

  setCareerChoice(choice: string): void {
    this.careerChoice = choice;
  }

  setRecommendations(recommendations: any[]): void {
    this.recommendations = recommendations;
  }
}
