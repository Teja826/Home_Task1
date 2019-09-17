import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoUpdateService {
  subject = new Subject();

  constructor() { }

  getNewsData() {
    return this.subject.asObservable();
  }

  updateNewsData(event) {
    this.subject.next(event.target.value);
  }
}
