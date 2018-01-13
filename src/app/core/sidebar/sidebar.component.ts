import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { getDate } from 'date-fns';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {
  today = 'day';
  constructor() { }

  ngOnInit() {
    this.today = `day${getDate(new Date())}`;
  }

}
