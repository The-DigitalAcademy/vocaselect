import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
     
  subjects: any;   
 
  constructor(private subjectsService: SubjectsService, private router: Router)
  {    

  }  
  ngOnInit() {
    // this.subjectsService.getSubjects().subscribe({
    //   next: (data: any) => {
    //     this.subjects = data;
    //     console.log(data, 'subjects');
    //   },
    //   error: (err: any) => {
    //     // this.errorMessage = err.error.message;
    //     // this.isLoginFailed = true;
    //   }
    // });
  }

  
  
}
