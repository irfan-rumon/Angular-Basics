import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  constructor() {}

  display(msg: string): string {
    return 'Welcome to ' + msg;
  }
}
