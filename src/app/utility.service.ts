import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { isBuffer } from 'util';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  private dataSource = new Subject();
  data = this.dataSource.asObservable();

  constructor() { }

  updatedDataSelection(value: boolean){
    if(value) {
      this.dataSource.next(value);
    }
  }
}
