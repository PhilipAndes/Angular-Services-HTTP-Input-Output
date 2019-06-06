import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm', { static: false }) form: any;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Tim',
        lastName: 'Smith',
        email: 'tim@gmail.com',
        isActive: true,
        registered: new Date('01/02/2019 08:30:00'),
        hide: true
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'JDoe@yahoo.com',
        isActive: false,
        registered: new Date('03/11/2018 06:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'KarenW@gmail.com',
        isActive: true,
        registered: new Date('10/12/2017 10:30:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }

// We going to put in some curly braces with value and valid
// Then we are going to type that to an object
// Value which is going to have the User type
// valid which is going to be a boolean
  onSubmit({value, valid}: {value: User, valid: boolean}) {
    // Then we check if the form is valid or not:
    // Its always valid for us because the button is only enabled if its valid, but we are going to check it here anyway
    if(!valid){
      console.log('Form is not valid');
    } else {
      // Else we just want to add to the users
      // Unshift for adding to the beginning of the array
      // Which takes in value from above which is a User type
      // Now its just going to take firstname, lastname and email, but we also have isActive, registered and hide so we have to add those things
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      //Then we want to reset the form
      this.form.reset();
    }
  }

}
