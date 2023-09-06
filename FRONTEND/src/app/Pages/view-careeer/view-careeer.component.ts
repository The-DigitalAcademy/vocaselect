import { Component, OnInit } from '@angular/core';
import { ViewCareerService } from 'src/app/_services/_ChatGPT_Services/viewcareer/viewCareer.service';

@Component({
  selector: 'app-view-careeer',
  templateUrl: './view-careeer.component.html',
  styleUrls: ['./view-careeer.component.scss']
})
export class ViewCareeerComponent implements OnInit {

  constructor(private Viewcareer: ViewCareerService) { }

  careers: any;

  

  // getDataFromServer() {

  //   console.log("mpelemane")

  //   this.Viewcareer.getCareerData().subscribe(
  //     {
  //       next: (data: any) => {
  //         this.careers = data;
  //         console.log(this.careers, "   career are here")
  //       },

        

  //       error: (err: any) => {

  //       }
  //     }
  //   );
  // }


  fetchCareers() {
    // const apiUrl = 'YOUR_API_ENDPOINT'; // Replace with your actual API endpoint URL
    this.Viewcareer.getCareerData().subscribe(
      (response) => {
        this.careers = response;
      },
      (error) => {
        console.error('Error fetching items from the API:', error);
      }
    );
  }

  ngOnInit(): void {
    // this.getDataFromServer(),
    this. fetchCareers()
  }

}
