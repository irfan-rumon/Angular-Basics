import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../services/channel.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  title: string = 'Js ...';
  products: string[] = ['Rice', 'Fruits', 'Shirts', 'Shoes'];

  constructor(private ch: ChannelService) {}

  ngOnInit(): void {
    this.f();
  }

  f(): void {
    console.log(this.title);
  }

  sum(a: number, b: number): number {
    return a + b;
  }

  viaService(msg: string): string {
    return this.ch.display(msg);
  }
}
