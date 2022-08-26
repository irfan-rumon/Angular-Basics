import { Injectable } from '@angular/core';
import { DummyService } from './dummy.service';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  constructor(private dummy: DummyService) {
    this.anotherService();
  }

  display(msg: string): string {
    return 'Welcome to ' + msg;
  }

  getData(data: string): void {
    console.log(data);
  }

  anotherService() {
    console.log(this.dummy.getTitle());
  }
}
