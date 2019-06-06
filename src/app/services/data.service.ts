import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() {
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
   }

   getUsers(): User[] {
     console.log('Fetching users from service...');
    return this.users;
   }

   addUser(user: User) {
    this.users.unshift(user);
   }
}
