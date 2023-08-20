import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CareerRecommendation } from 'src/app/_Interface/career-recommendation';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
  careers: CareerRecommendation[] = [];
  // sharedCareerService: any;
  // careers: any[] = [
  //   {
  //     "name": "Pharmacist", "description":"a healthcare provider who gives you your prescriptions. But they're also an important member of your healthcare team. They're the person who knows the most about drugs."
  //   },
  //   {
  //     "name": "Dentist", "description":"responsible for treating your patients by filling in cavities and perhaps removing teeth when necessary. Dentists can specialise in oral surgery too if you take your studies further"
  //   },
  //   {
  //     "name": "Astronaut", "description":"a person trained to pilot a spacecraft, travel in a spacecraft or work in space."
  //   },
  //   {
  //     "name": "Surgeon", "description":"a doctor who specializes in evaluating and treating conditions that may require surgery, or physically changing the human body. Surgeries can be done to diagnose or treat disease or injury"
  //   }
  // ];

   
    constructor(private route: ActivatedRoute,  ) { }

  ngOnInit(): void {
    // Retrieve the passed data from the state object
    // this.careers = this.route.snapshot?.data?.['state']?.careers || [];
    // Subscribe to the careers data from the shared service
   
  };
}


