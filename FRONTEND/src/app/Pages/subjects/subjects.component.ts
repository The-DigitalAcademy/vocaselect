import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { SubjectsService } from 'src/app/_services/subjects.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  loading: boolean = false;
  subjects: any; 
  public selectedSubjects: string[] = [];

  allSelectedId: any = [];
  userId: any;
  selectedSubjectsCount: number = 0;

  constructor(private subjectsService: SubjectsService, private http: HttpClient, private router: Router, private tokenStorage: TokenStorageService){}  

  ngOnInit() {
    // Fetch items from the API when the component initializes
    this.fetchSubjects();
    this.userId = this.tokenStorage.getUser().id;
console.log(this.userId, 'user id')
  }

  fetchSubjects() {
    // const apiUrl = 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint URL
    this.subjectsService.getSubjects().subscribe(
      (response) => {
        this.subjects = response;
      },
      (error) => {
        console.error('Error fetching items from the API:', error);
      }
    );
  }

 isChecked(event: any): void {
  if (event.target.checked) {
    if (this.selectedSubjectsCount < 9) {
      this.allSelectedId.push({ subjectId: event.target.value, userId: this.userId });
      this.selectedSubjectsCount++;
    } else {
      event.target.checked = false; // Prevent checking more subjects when the limit is reached
      console.log("Maximum of 9 subjects can be selected.");
    }
  } else {
    this.allSelectedId = this.allSelectedId.filter(
      (userSubject: any) => userSubject.subjectId !== event.target.value
    );
    this.selectedSubjectsCount--;
  }
}


  onSubmit(): void {
    console.log('Submit button clicked');
  
    if (this.selectedSubjectsCount === 0) {
      console.log("Please select at least one course");
      return;
    }
  
    console.log("Sending selected subjects...");
  
    this.loading = true;
    console.log("Loading state set to true");
  
    // Make an HTTP POST request...
    this.subjectsService.saveSelectedSubjects(this.allSelectedId).subscribe(
      (response) => {
        console.log('Selected subjects sent successfully:', response);
        // If needed, you can navigate to another route after successful submission
        this.router.navigate(['dream-job']);
      },
      (error) => {
        console.error('Error sending selected subjects:', error);
      }
    );
  
    // Set loading state to false after submitting subjects
    this.loading = false;
    console.log("Loading state set to false");
  }
  
}
