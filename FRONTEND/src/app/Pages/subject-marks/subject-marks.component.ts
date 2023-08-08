import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-subject-marks',
  templateUrl: './subject-marks.component.html',
  styleUrls: ['./subject-marks.component.scss']
})
export class SubjectMarksComponent implements OnInit {

  subjects: any; 
  public selectedSubjects: number[] = [];

  allSelectedId: any = [];
  userId: any;

  constructor(private subjectsService: SubjectsService, private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService){}

  ngOnInit(): void {
  }

  submitMarks(subjectId: number, marks: number) {
    const data = {
      userId: this.userId,
      subjectId: subjectId,
      marks: marks,
    };
  
    this.subjectsService.saveSubjectMarks(data).subscribe(
      (response) => {
        console.log('Subject marks saved/updated successfully:', response);
      },
      (error) => {
        console.error('Error saving/updating subject marks:', error);
      }
    );
  }

  isChecked(event: any, subjectId: number): void {
    if (event.target.checked) {
      this.selectedSubjects.push(subjectId);
    } else {
      this.selectedSubjects = this.selectedSubjects.filter((id) => id !== subjectId);
    }
  }
}
