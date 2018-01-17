import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InviteComponent implements OnInit {
  items = [{
    'id': 1,
    'name': 'jack',
  }, {
    'id': 2,
    'name': 'jack',
  }, {
    'id': 3,
    'name': 'jack',
  }];
  constructor() { }

  ngOnInit() {
  }
  displayUser(user: { id: number; name: string }) {
    return user ? user.name : '';
  }
}
