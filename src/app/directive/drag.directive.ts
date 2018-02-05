import { Directive, HostListener, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appDrag][draggedClass]'
})
export class DragDirective {
  private _isDraggable = false;
  @Input('appDrag') // 让指令可以赋值
  set isDraggable(val: boolean) {
    this._isDraggable = val;
    this.rd.setAttribute(this.el.nativeElement, 'draggable', `${val}`);
  }
  get isDraggable() {
    return this._isDraggable;
  }

  @Input() draggedClass: string;
  constructor(private el: ElementRef, private rd: Renderer2) { }
  @HostListener('dragstart', ['$event'])
  onDragStart(ev: Event) {
    if (ev.target === this.el.nativeElement) {
      this.rd.addClass(this.el.nativeElement, this.draggedClass);
    }
  }
  @HostListener('dragend', ['$event'])
  onDragEnd(ev: Event) {
    if (ev.target === this.el.nativeElement) {
      this.rd.removeClass(this.el.nativeElement, this.draggedClass);
    }
  }
}
