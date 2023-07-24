import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  form: FormGroup;
  countries: Array<any> = [
    { name: 'India', value: 'india' },
    { name: 'France', value: 'france' },
    { name: 'USA', value: 'USA' },
    { name: 'Germany', value: 'germany' },
    { name: 'Japan', value: 'Japan' }
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
     selectedCountries:  new FormArray([])
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onCheckboxChange(event: any) {
    
    const selectedCountries = (this.form.controls['selectedCountries'] as FormArray);
    if (event.target.checked) {
      selectedCountries.push(new FormControl(event.target.value));
    } else {
      const index = selectedCountries.controls
      .findIndex(x => x.value === event.target.value);
      selectedCountries.removeAt(index);
    }
  }

  submit() {
    console.log(this.form.value);
  }

}
