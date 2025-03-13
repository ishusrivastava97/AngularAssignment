import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private totalValue = new BehaviorSubject<number>(0);
  currentValue = this.totalValue.asObservable();
  addValue(newValue:number){
    const updateValue = this.totalValue.getValue() + newValue;
    this.totalValue.next(updateValue);
  }
  constructor() {}
}
