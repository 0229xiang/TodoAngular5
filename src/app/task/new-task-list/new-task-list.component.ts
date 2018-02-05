import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewEncapsulation, Inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewTaskListComponent implements OnInit {
  title = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<NewTaskListComponent>) { }

  ngOnInit() {
    this.title = this.data.title;
  }

}
