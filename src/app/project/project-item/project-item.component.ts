import { Component, OnInit, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectItemComponent implements OnInit {

  @Input() item;

  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
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
