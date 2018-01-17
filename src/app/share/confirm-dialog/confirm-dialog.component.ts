import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
@Component({
  selector: 'app-confirm-dialog',
  template: `
    <form>
      <h2 mat-dialog-title>{{title}}</h2>
      <div mat-dialog-content>
        {{content}}
      </div>
      <mat-dialog-actions>
        <button type="button" mat-button mat-raised-button color="primary" (click)="onClose()">确认</button>
        <button type="button" mat-button [mat-dialog-close]="true">取消</button>
      </mat-dialog-actions>
    </form>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class ConfirmDialogComponent implements OnInit {
  title: string;
  content: string;
  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

}
