import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChannelService } from '../../services/channel.service';
import {UserInterface} from '../../UserInterface';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  title: string = 'Js ...';
  products: string[] = ['Rice', 'Fruits', 'Shirts', 'Shoes'];

  constructor(private ch: ChannelService,
              private http: HttpClient) {}

  users: UserInterface[] = []            
  ngOnInit(): void{
    this.http.get('http://localhost:3000/users').subscribe(res => {
      console.log('res', res)
    })
  }

  loadData(data: string): void {
    this.ch.getData(data);
  }

  sum(a: number, b: number): number {
    return a + b;
  }

  viaService(msg: string): string {
    return this.ch.display(msg);
  }
}
