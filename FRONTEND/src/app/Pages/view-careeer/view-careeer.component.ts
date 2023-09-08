import { Component, OnInit } from '@angular/core';
import { ViewCareerService } from 'src/app/_services/_ChatGPT_Services/viewcareer/viewCareer.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-view-careeer',
  templateUrl: './view-careeer.component.html',
  styleUrls: ['./view-careeer.component.scss']
})
export class ViewCareeerComponent implements OnInit {

  constructor(private Viewcareer: ViewCareerService, private tokenStorage: TokenStorageService,private userService: UserService) { }

  careers: any;
  userId: any;
  

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
    
    this.userId = this.tokenStorage.getUser().id;
    this.Viewcareer.getCareerData(this.userId).subscribe(
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
