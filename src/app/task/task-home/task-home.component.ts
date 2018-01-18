import { NewTaskListComponent } from './../new-task-list/new-task-list.component';
import { ConfirmDialogComponent } from './../../share/confirm-dialog/confirm-dialog.component';
import { CopyTaskComponent } from './../copy-task/copy-task.component';
import { NewTaskComponent } from './../new-task/new-task.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TaskHomeComponent implements OnInit {
  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一： 去订购一套衣服',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: 'Alice',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 2,
          desc: '任务二： 去订购一套汽车',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: 'Alice',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        }
      ]
    }, {
      id: 2,
      name: '完成',
      tasks: [
        {
          id: 1,
          desc: '任务1： 去订购一套汽车',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: 'Alice',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date()
        },
        {
          id: 1,
          desc: '任务2： 去订购一套汽车',
          completed: false,
          priority: 3,
          owner: {
            id: 1,
            name: 'Alice',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
          reminder: new Date()
        }
      ]
    }
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, { data: { title: '新建任务' } });
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, { data: { lists: this.lists } });
  }

  launchUpdateDialog(task) {
    this.dialog.open(NewTaskComponent, { data: { title: '修改任务', task: task } });
  }

  launchDeleteTaskDialog() {
    this.dialog.open(ConfirmDialogComponent, { data: { title: '删除任务', content: '删除当前任务，将不再恢复使用' } });
  }

  launchEditTaskDialog() {
     this.dialog.open(NewTaskListComponent, { data: { title: '更改列表名称' } });
  }
launchNewListDialog() {
  this.dialog.open(NewTaskListComponent, { data: { title: '新建列表' } });
}
}
