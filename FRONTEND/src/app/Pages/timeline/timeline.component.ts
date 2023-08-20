import { Component, OnInit } from '@angular/core';
import { TimelineService } from 'src/app/_services/_ChatGPT_Services/timeline.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  timeline :any = [];
  grade: any;

  constructor(private timelineService: TimelineService, private http:HttpClient, private router: Router){}  

  ngOnInit() {
    // Fetch items from the API when the component initializes
    this.fetchTimeline();
    console.log(this.timeline, 'user id')
  }

  fetchTimeline() {
    // const apiUrl = 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint URL
    // this.timelineService.getTimeline().subscribe(
    //   (response) => {
    //     this.timeline = response;
    //   },
    //   (error) => {
    //     console.error('Error fetching items from the API:', error);
    //   }
    // );
    //need to get the grade from user data
    this.grade = 11;

    const test = [{title: "Test 1", description: "testing description", grade:8}, 
    {title: "Test 2", description: "testing description", grade:9},
    {title: "Test 3", description: "testing description", grade:10},
    {title: "Test 4", description: "testing description", grade:11},
    {title: "Test 5", description: "testing description", grade:12},
  ];

  test.forEach((en:any)=>{
    this.timeline.push(en)
  });
  }

}
