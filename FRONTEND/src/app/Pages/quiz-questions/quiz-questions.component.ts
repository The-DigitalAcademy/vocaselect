import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { QuizQuestionsService } from 'src/app/services/quiz-questions.service';


@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss']
})
export class QuizQuestionsComponent implements OnInit {

  data: any; // Assuming the data is an array of objects or any other data structure

  constructor(private dataService: QuizQuestionsService){ }

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer() {

    this.dataService.getData().subscribe(
    

      {
        next: (data :any)=>{
          this.data = data   ;
          console.log(this.data , "   quizzes are here")
        },
        
        error:(err:any)=>{

        }
      }
    );
  }

 
}
