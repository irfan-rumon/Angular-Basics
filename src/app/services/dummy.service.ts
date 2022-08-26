import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  title: string = 'This is dummy';

  constructor() {}

  getTitle(): string {
    return this.title;
  }
}
