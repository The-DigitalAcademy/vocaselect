import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm!: UntypedFormGroup; // Declare the profileForm FormGroup
  user: any = {};
  constructor(private formBuilder: UntypedFormBuilder, private tokenStorage: TokenStorageService,private userService: UserService) { }

  

  
// method to update the users profile


initProfileForm() {
  this.profileForm = this.formBuilder.group({
    name: [this.user.name],
    surname: [this.user.surname],
    dob: [this.user.dob],
    city: [this.user.city],
    grade: [this.user.grade]
  });

  console.log(this.profileForm, "   profile form")
}



updateProfile() {
  // const userId = this.tokenStorage.getUser().id;
  // const updatedData = {
  //   id: userId,
  //   profileData: this.profileForm.value
    
  // };

  // const updatedData = this.profileForm.value;
  // console.log(updatedData, "form data are here");


  this.userService.updateProfile(this.user.id, this.profileForm.value).subscribe(
    (response) => {
      console.log('Profile updated successfully:', response);
      // Handle success, e.g., show a success message or update local data
    },
    (error) => {
      console.error('Error updating profile:', error);
      // Handle error, e.g., show an error message
    }
  );
}

// ...

  ///
  ngOnInit(): void {
     this.user = this.tokenStorage.getUser();   // it will display the user who currently loged in at a time 
  
     this.initProfileForm();
    
    }

}
