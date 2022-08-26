import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  title: string = 'Js ...';
  products: string[] = ['Rice', 'Fruits', 'Shirts', 'Shoes'];

  constructor() {}

  f(): void {
    console.log(this.title);
  }

  ngOnInit(): void {
    this.f();
  }
}
