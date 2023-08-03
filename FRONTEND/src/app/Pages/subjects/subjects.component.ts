import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectsService } from 'src/app/services/subjects.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
     
  subjects: any; 
  public selectedSubjects: string[] = [];

  allSelectedId: number[] = []

  constructor(private subjectsService: SubjectsService, private http: HttpClient, private router: Router){}  

  ngOnInit() {
    // Fetch items from the API when the component initializes
    this.fetchSubjects();
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
      this.allSelectedId.push(event.target.value)
    } else {
      this.allSelectedId = this.allSelectedId.filter(id => id !== event.target.value)
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
    if (this.allSelectedId.length === 0) {
      console.log("Please select a course");
      return;
    }
  
    // Make an HTTP POST request to the server with the selected subject IDs
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
  }
  
}
