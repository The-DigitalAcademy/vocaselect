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

  onCheckboxChange(subject: any) {
    if (this.isSelected(subject)) {
      this.selectedSubjects = this.selectedSubjects.filter((selectedSubject) => selectedSubject !== subject.id);
    } else {
      this.selectedSubjects.push(subject.id);
    }
  }

  isSelected(subject: any): boolean {
    return this.selectedSubjects.includes(subject.id);
  }

  sendSelectedSubjectsToServer() {
    this.subjectsService.sendSelectedSubjects(this.selectedSubjects).subscribe(
      (response) => {
        console.log('Selected subjects sent to the server:', response);
        // Optionally, you can perform additional actions after sending the data, such as showing a success message.
      },
      (error) => {
        console.error('Error sending selected subjects to the server:', error);
        // Optionally, you can handle error cases, such as showing an error message.
      }
    );
  }

  
  
}
