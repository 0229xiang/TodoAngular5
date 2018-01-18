import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
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
  @Output() sideNavToggle = new EventEmitter<void>();
  ngOnInit() {
    this.today = `day${getDate(new Date())}`;
  }
  onSideNavToggle() {
    this.sideNavToggle.emit();
  }

}
