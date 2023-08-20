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

  timeline :any;

  constructor(private timelineService: TimelineService, private http:HttpClient, private router: Router){}  

  ngOnInit() {
    // Fetch items from the API when the component initializes
    this.fetchTimeline();
    console.log(this.timeline, 'user id')
  }

  fetchTimeline() {
    // const apiUrl = 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint URL
    this.timelineService.getTimeline().subscribe(
      (response) => {
        this.timeline = response;
      },
      (error) => {
        console.error('Error fetching items from the API:', error);
      }
    );
  }

}