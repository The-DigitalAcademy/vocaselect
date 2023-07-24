import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  name = 'Angular 6';
  selectedAll: any;
 channelDDList = [
   {
     "channelId": 0,
     "channelName": "Mathematics",
     "selected":false
   },
   {
     "channelId": 1,
     "channelName": "Life Sciences",
     "selected":false
   }];
   showCheckbox = false;

  showCheckboxes(){
    this.showCheckbox = !this.showCheckbox;
  }

  selectAll() {
    for (var i = 0; i < this.channelDDList.length; i++) {
      this.channelDDList[i].selected = this.selectedAll;
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.channelDDList.every(function(item:any)          {
        return item.selected == true;
      });
  }

  constructor() { }



}
