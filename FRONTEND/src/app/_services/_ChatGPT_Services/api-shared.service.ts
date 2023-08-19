import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private careersDataSubject = new BehaviorSubject<any[]>([]);
  careersData$ = this.careersDataSubject.asObservable();

  updateCareersData(careers: any[]) {
    this.careersDataSubject.next(careers);
  }

  
}
