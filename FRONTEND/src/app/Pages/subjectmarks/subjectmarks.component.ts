import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { SubjectsService } from '../../_services/subjects.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subjectmarks',
  templateUrl: './subjectmarks.component.html',
  styleUrls: ['./subjectmarks.component.scss']
})
export class SubjectmarksComponent implements OnInit {

  subjects: any;
  public selectedSubjects: string[] = [];

  updatedSubjectMarks: any = [];
  userId: any;
  belowAverage: any = [];

  constructor(private subjectsService: SubjectsService, private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    //redirect to login page when there's no token or the user is not logged in
    if (!this.tokenStorage.getToken()) {
      this.router.navigate(['login']);

    }

    // Fetch subject items from the API when the component initializes
    this.fetchSubjects();

  }

  fetchSubjects() {
    this.userId = this.tokenStorage.getUser().id;
    this.subjectsService.getSelectedSubjects(this.userId).subscribe(

      (response) => {
        console.log(response, 'subjects selecetd')

        this.subjects = response;
      },
      (error) => {
        console.error('Error fetching items from the API:', error);
      }
    );
  }

  marksValidation() {
    if (this.updatedSubjectMarks.length > 0) {

      this.belowAverage = this.updatedSubjectMarks.map((subjectMark: any) => {

        if (subjectMark.subject_marks < 50) {
          const subject = this.subjects.find((el:any)=> {if (el.selectedid.toString() === subjectMark.id.toString()) return el; });
          if(subject){
            return subject.subjectName;
          }
          return subjectMark.id;
        }
      });
    }
  }

  isChanged(event: any): void {
    // check if the subject marks changed and updated
    if (this.updatedSubjectMarks.length > 0) {
      var isIncluded = false;
      this.updatedSubjectMarks.map((obj: any) => {

        if (obj.id === event.target.id) {
          obj.subject_marks = event.target.value;
          isIncluded = true;
        }

        return obj;
      });

      if (!isIncluded) {
        this.updatedSubjectMarks.push({ id: event.target.id, subject_marks: event.target.value });
      }

    } else {
      this.updatedSubjectMarks.push({ id: event.target.id, subject_marks: event.target.value });
    }

       this.marksValidation();
    
  }

  onSubmit(): void {
    if (this.updatedSubjectMarks.length === 0) {
      console.log("Please update marks of the subjects");
      return;
    }

    // Make an HTTP POST request to the server with the selected subject IDs
    this.subjectsService.updateSelectedSubjects(this.updatedSubjectMarks).subscribe(
      (response) => {
        console.log('Selected subjects sent successfully:', response);
        // If needed, you can navigate to another route after successful submission
        this.router.navigate(['dream-job']);
      },
      (error) => {
        console.error('Error sending selected subjects:', error);
      }
    );
  }

}