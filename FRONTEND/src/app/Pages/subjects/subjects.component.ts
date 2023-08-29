import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { SubjectsService } from 'src/app/_services/subjects.service';

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

  isChecked(event: any):void {
    
    if (event.target.checked) {
      this.allSelectedId.push({subjectId:event.target.value, userId: this.userId })
    } else {
      this.allSelectedId = this.allSelectedId.filter((userSubject:any) => userSubject.subjectId !== event.target.value)
    }

    console.log(this.allSelectedId)

  }


  // onSubmit():void {
    
  //   if (this.allSelectedId.length == 0) {
  //     console.log("Please select a course")
  //     return;
  //   }

  //   console.log(this.allSelectedId)

  //   this.router.navigate(['dream-job'])

  // }

  onSubmit(): void {
    console.log('Submit button clicked');
    
    if (this.allSelectedId.length === 0) {
      console.log("Please select a course");
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
