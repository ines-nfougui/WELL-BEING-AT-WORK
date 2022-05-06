import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-from',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FromComponent implements OnInit {
  user: any;

  constructor(private route:Router) { }

  ngOnInit(): void {
    this.user = new User();
  }
  submit({value, valid}: { value: User, valid: boolean }) {
    this.user = value;
    console.log(this.user);
  }
  save(f: NgForm) {
    console.log(f.value['login']);
  }
}
