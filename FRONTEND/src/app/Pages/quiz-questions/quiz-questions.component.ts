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
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    sixthCtrl: ['', Validators.required],
  });
  seventhFormGroup = this._formBuilder.group({
    seventhCtrl: ['', Validators.required],
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
