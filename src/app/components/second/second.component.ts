import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  color = new FormControl('');
  name = new FormControl('');

  username: string = '';

  myForm = new FormGroup({
    rank: new FormControl(''),
    salary: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.myForm.value);
  }
}
