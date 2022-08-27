import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../../employee';

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

  employee: Employee = {
    rank: '',
    salary: 0,
  };

  constructor() {
    this.employee = {} as Employee;
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.myForm.value);
  }
}
