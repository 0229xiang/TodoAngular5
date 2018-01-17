import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar: String;
  @Output() taskClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(e: Event) {
    e.stopPropagation();
  }

}
