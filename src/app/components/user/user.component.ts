import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  // Property
  user: User;

  // Methods
  constructor() {
  }

  ngOnInit() {
    this.user = {
      firstName: 'Tim',
      lastName: 'Smith',
      email: 'tim@gmail.com'
    }
  }
}
