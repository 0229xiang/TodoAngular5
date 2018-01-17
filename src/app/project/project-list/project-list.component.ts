import { ConfirmDialogComponent } from './../../share/confirm-dialog/confirm-dialog.component';
import { InviteComponent } from './../invite/invite.component';
import { NewProjectComponent } from './../new-project/new-project.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  // encapsulation: ViewEncapsulation.None 无法使用none模式，该模式下:host无效
})
export class ProjectListComponent implements OnInit {
  projects = [
    {
      'name': '企业协作平台',
      'desc': '这是一个企业项目',
      'coverImg': 'assets/img/covers/0.jpg'
    }, {
      'name': '企业协作平台',
      'desc': '这是一个企业项目',
      'coverImg': 'assets/img/covers/0.jpg'
    },
  ];
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: '新建项目' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  lauchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  lauchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: '编辑项目' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  lauchDeleteDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '删除项目', content: '删除当前项目后数据无法恢复' } });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

}
