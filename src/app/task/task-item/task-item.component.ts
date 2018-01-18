import { itemAnim } from './../../animations/item.animation';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, HostListener } from '@angular/core';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    itemAnim
  ]
  // encapsulation: ViewEncapsulation.None
})
export class TaskItemComponent implements OnInit {
  @Input() item;
  @Input() avatar: String;
  @Output() taskClick = new EventEmitter<void>();
  widerPriority = 'out';
  constructor() { }
  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  @HostListener('mouseenter')
    onmouseenter() {
      this.widerPriority = 'in';
    }

  @HostListener('mouseleave')
  onmouseleave() {
    this.widerPriority = 'out';
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(e: Event) {
    e.stopPropagation();
  }

}
