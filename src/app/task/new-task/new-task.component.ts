import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, ViewEncapsulation, Inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewTaskComponent implements OnInit {
  title: string;
  priorities = [
    {
      value: 1,
      label: '移动'
    },
    {
      value: 2,
      label: '标记'
    },
    {
      value: 3,
      label: '删除'
    },
  ];
  constructor(@Inject(MAT_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.title = this.data.title;
  }

}
