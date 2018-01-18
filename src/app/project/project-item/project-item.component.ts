import { Component, OnInit, Input, ViewEncapsulation, EventEmitter, Output, HostBinding, HostListener } from '@angular/core';
import { cardAnim } from './../../animations/card.animation';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnim
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item;

  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  @HostBinding('@card') cardState = 'out';
  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  onmouseenter() {
    this.cardState = 'hover';
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.cardState = 'out';
  }

  onInviteClick() {
    this.onInvite.emit();
  }
  onEditProjectDialog() {
    this.onEdit.emit();
  }
  onDeleteProjectDialog() {
    this.onDelete.emit();
  }
}
