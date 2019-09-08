import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangedataService {

  private urlSource = new BehaviorSubject('https://www.youtube.com/embed/6ZfuNTqbHE8');
  url = this.urlSource.asObservable();

  constructor() { }

  sendUrl(url: string) {
    this.urlSource.next(url);
  }
}
